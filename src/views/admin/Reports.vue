<script setup>
import { computed, onMounted, ref } from 'vue'
import AdminLayout from './AdminLayout.vue'
import { adminApi } from '@/services/adminApi'

const reportStats = ref([])
const chartValues = ref([])
const selectedMetric = ref('all')

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const chartData = [
  { month: 'Jan', views: 2100, inquiries: 180, conversion: 8.6, marker: 'Rent adjusted' },
  { month: 'Feb', views: 2600, inquiries: 220, conversion: 8.5, marker: 'New photos added' },
  { month: 'Mar', views: 3100, inquiries: 280, conversion: 9.1, marker: 'Feature boost' },
  { month: 'Apr', views: 3600, inquiries: 330, conversion: 9.2, marker: 'Priority placement' },
  { month: 'May', views: 4200, inquiries: 390, conversion: 9.3, marker: 'Listing refreshed' },
  { month: 'Jun', views: 4700, inquiries: 430, conversion: 9.1, marker: 'Pricing update' },
  { month: 'Jul', views: 5200, inquiries: 490, conversion: 9.4, marker: 'High-intent leads' },
  { month: 'Aug', views: 5600, inquiries: 540, conversion: 9.6, marker: 'Open house' },
  { month: 'Sep', views: 6100, inquiries: 610, conversion: 10.0, marker: 'Best-performing month' },
]

function normalizeChartData(chart) {
  if (!Array.isArray(chart) || chart.length === 0) return chartData.slice(0, 9)

  if (typeof chart[0] === 'number') {
    return chart.map((value, index) => ({
      month: monthLabels[index] || `M${index + 1}`,
      views: value * 110,
      inquiries: Math.max(30, Math.round(value * 9)),
      conversion: Number(((Math.max(30, Math.round(value * 9)) / (value * 110)) * 100).toFixed(1)),
      detail: `₦${(value / 10).toFixed(1)}M`,
      marker: 'Campaign update',
    }))
  }

  return chart.map((entry, index) => ({
    month: entry.month || monthLabels[index] || `M${index + 1}`,
    views: Number(entry.views ?? entry.value ?? 0) * 110,
    inquiries: Number(entry.inquiries ?? Math.max(30, Math.round((entry.value ?? 0) * 9))),
    conversion: Number(entry.conversion ?? 0),
    detail: entry.detail || 'Revenue',
    marker: entry.marker || 'Listing update',
  }))
}

const legendItems = [
  { key: 'all', label: 'All metrics' },
  { key: 'views', label: 'Page views' },
  { key: 'inquiries', label: 'Direct inquiries' },
]

const maxViews = computed(() => Math.max(...chartValues.value.map((item) => item.views), 7000))
const maxInquiries = computed(() => Math.max(...chartValues.value.map((item) => item.inquiries), 700))

function getBarHeight(value, maxValue) {
  return `${Math.max((value / maxValue) * 100, 8)}%`
}

async function loadReports() {
  try {
    const response = await adminApi.getReports()
    reportStats.value = response.summary || []
    chartValues.value = normalizeChartData(response.chart || chartData)
  } catch (error) {
    console.error('Failed to load reports:', error)
    reportStats.value = []
    chartValues.value = chartData
  }
}

onMounted(() => {
  loadReports()
})
</script>

<template>
  <AdminLayout>
    <section class="stats-grid">
      <article v-for="stat in reportStats" :key="stat.label" class="stat-card">
        <span>{{ stat.label }}</span>
        <strong>{{ stat.value }}</strong>
        <small>{{ stat.change }}</small>
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <h2>Performance overview</h2>
        <p>
          This overview tracks listing traffic, direct buyer inquiry volume, and conversion quality over time.
          Bars show top-of-funnel visibility while the line tracks bottom-of-funnel action intent.
        </p>
      </div>

      <div class="legend" aria-label="Chart legend">
        <button
          v-for="item in legendItems"
          :key="item.key"
          class="legend-button"
          :class="{ active: selectedMetric === item.key }"
          @click="selectedMetric = item.key"
          type="button"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="analytics-chart" aria-label="Property marketing analytics chart">
        <div class="y-axis left-axis">
          <span>Page views</span>
          <div class="axis-scale">
            <span>6k</span>
            <span>4k</span>
            <span>2k</span>
            <span>0</span>
          </div>
        </div>

        <div class="chart-surface">
          <div class="grid-lines"></div>
          <div class="series-grid">
            <div v-for="entry in chartValues.slice(0, 9)" :key="entry.month" class="month-column">
              <div class="marker" v-if="entry.marker" :title="`${entry.month}: ${entry.marker}`">●</div>
              <div v-if="selectedMetric !== 'inquiries'" class="bar-wrapper">
                <div
                  class="bar"
                  :style="{ height: getBarHeight(entry.views, maxViews) }"
                  :title="`${entry.month}: ${entry.views.toLocaleString()} page views`"
                ></div>
              </div>
              <div v-if="selectedMetric !== 'views'" class="line-wrapper">
                <div
                  class="line-point"
                  :style="{ bottom: `${(entry.inquiries / maxInquiries) * 100}%` }"
                  :title="`${entry.month}: ${entry.inquiries} direct inquiries (${entry.conversion}% conversion)`"
                ></div>
              </div>
              <span class="month-label">{{ entry.month }}</span>
              <small class="tooltip-detail">{{ entry.detail }}</small>
            </div>
          </div>
        </div>

        <div class="y-axis right-axis">
          <span>Direct inquiries</span>
          <div class="axis-scale">
            <span>600</span>
            <span>400</span>
            <span>200</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}

.stat-card,
.panel {
  background: #fff;
  border: 1px solid #e5e2dc;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(27, 42, 65, 0.04);
}

.stat-card {
  padding: 22px;
}

.stat-card span {
  display: block;
  color: #69737d;
  margin-bottom: 10px;
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 6px;
}

.stat-card small {
  color: #2c8f57;
  font-weight: 600;
}

.panel {
  padding: 22px;
}

.panel-header {
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 0 0 8px;
  font-size: 1.5rem;
}

.panel-header p {
  margin: 0;
  color: #69737d;
  line-height: 1.6;
}

.legend {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.legend-button {
  border: 1px solid #cfd5dc;
  background: #f8f5f1;
  color: #314159;
  border-radius: 999px;
  padding: 8px 14px;
  font-weight: 600;
  cursor: pointer;
}

.legend-button.active {
  background: #20304a;
  color: #fff;
  border-color: #20304a;
}

.analytics-chart {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) 56px;
  gap: 12px;
  align-items: end;
  min-height: 360px;
  padding: 16px 4px 10px;
  border-radius: 14px;
  background: linear-gradient(180deg, #f8f6f2, #f1eee8);
}

.y-axis {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #677684;
  font-size: 0.72rem;
  font-weight: 600;
}

.axis-scale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 78%;
  text-align: center;
}

.chart-surface {
  position: relative;
  height: 100%;
  min-height: 310px;
  border-left: 1px solid rgba(110, 120, 130, 0.2);
  border-bottom: 1px solid rgba(110, 120, 130, 0.2);
  background: linear-gradient(180deg, rgba(255,255,255,0.2), rgba(160,170,180,0.03));
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to top, rgba(125, 134, 143, 0.1) 1px, transparent 1px);
  background-size: 100% 20%;
}

.series-grid {
  position: absolute;
  inset: 10px 10px 12px 10px;
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  gap: 16px;
  align-items: end;
}

.month-column {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100%;
}

.bar-wrapper {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 42px;
  height: 77%;
  display: flex;
  align-items: end;
  justify-content: center;
}

.bar {
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #1f3350, #4c7ab7);
  box-shadow: 0 10px 20px rgba(31, 51, 80, 0.15);
}

.line-wrapper {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 60px;
  height: 77%;
}

.line-point {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d9774f;
  border: 2px solid #fff;
  box-shadow: 0 0 0 4px rgba(217, 119, 79, 0.18);
}

.marker {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: #c97538;
}

.month-label {
  position: absolute;
  bottom: -22px;
  color: #5c6977;
  font-size: 0.72rem;
  font-weight: 600;
}

.tooltip-detail {
  position: absolute;
  bottom: -38px;
  color: #263548;
  font-size: 0.68rem;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 820px) {
  .analytics-chart {
    grid-template-columns: 44px minmax(0, 1fr) 44px;
  }

  .series-grid {
    gap: 10px;
  }
}
</style>
