<script setup>
import LandlordLayout from './LandlordLayout.vue'

const data = [
  { month: 'Jan', views: 42, inquiries: 8 },
  { month: 'Feb', views: 58, inquiries: 10 },
  { month: 'Mar', views: 66, inquiries: 12 },
  { month: 'Apr', views: 74, inquiries: 14 },
  { month: 'May', views: 92, inquiries: 17 },
  { month: 'Jun', views: 110, inquiries: 19 },
  { month: 'Jul', views: 124, inquiries: 21 },
  { month: 'Aug', views: 138, inquiries: 24 },
  { month: 'Sep', views: 160, inquiries: 27 },
]

const maxViews = Math.max(...data.map((item) => item.views))
const maxInquiries = Math.max(...data.map((item) => item.inquiries))
</script>

<template>
  <LandlordLayout>
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Performance</p>
          <h2>Property visibility & conversion</h2>
        </div>
      </div>

      <div class="chart-box">
        <div class="chart-grid">
          <div v-for="item in data" :key="item.month" class="bar-group">
            <div class="bars">
              <div class="bar view-bar" :style="{ height: `${(item.views / maxViews) * 100}%` }"></div>
              <div class="bar inquiry-bar" :style="{ height: `${(item.inquiries / maxInquiries) * 100}%` }"></div>
            </div>
            <span>{{ item.month }}</span>
          </div>
        </div>
      </div>
    </section>
  </LandlordLayout>
</template>

<style scoped>
.panel {
  background: #fff;
  border: 1px solid #e5e2dc;
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(27, 42, 65, 0.04);
}

.panel-header {
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #c1652f;
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.6rem;
}

.chart-box {
  background: linear-gradient(180deg, #f8f7f3, #f1efe8);
  border: 1px solid #e9e3db;
  border-radius: 16px;
  padding: 20px 14px 10px;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  gap: 16px;
  align-items: end;
  height: 300px;
}

.bar-group {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 10px;
  height: 100%;
}

.bars {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
  height: 90%;
  width: 100%;
}

.bar {
  width: 22px;
  border-radius: 10px 10px 0 0;
}

.view-bar {
  background: linear-gradient(180deg, #1b2a41, #486d94);
}

.inquiry-bar {
  background: linear-gradient(180deg, #d9774f, #c1652f);
}

.bar-group span {
  color: #677684;
  font-size: 0.76rem;
  font-weight: 700;
}
</style>
