<script setup>
import AdminLayout from './AdminLayout.vue'
</script>

<template>
  <AdminLayout>
    <section class="stats-grid">
      <article class="stat-card">
        <span>Revenue pipeline</span>
        <strong>₦14.8M</strong>
        <small>+18% from last month</small>
      </article>
      <article class="stat-card">
        <span>Buyer conversion</span>
        <strong>31%</strong>
        <small>Target: 40%</small>
      </article>
      <article class="stat-card">
        <span>Top location</span>
        <strong>Lekki</strong>
        <small>24 active leads</small>
      </article>
    </section>

    <section class="panel">
      <div class="panel-header">
        <h2>Performance overview</h2>
      </div>

      <div class="bar-chart" aria-label="Sales performance chart">
        <div class="bar-group">
          <span>Jan</span>
          <div class="bar" style="height: 38%"></div>
        </div>
        <div class="bar-group">
          <span>Feb</span>
          <div class="bar" style="height: 52%"></div>
        </div>
        <div class="bar-group">
          <span>Mar</span>
          <div class="bar" style="height: 68%"></div>
        </div>
        <div class="bar-group">
          <span>Apr</span>
          <div class="bar" style="height: 75%"></div>
        </div>
        <div class="bar-group">
          <span>May</span>
          <div class="bar" style="height: 86%"></div>
        </div>
        <div class="bar-group">
          <span>Jun</span>
          <div class="bar" style="height: 96%"></div>
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

.panel-header h2 {
  margin: 0 0 18px;
  font-size: 1.5rem;
}

.bar-chart {
  height: 260px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 10px 10px;
  border-radius: 12px;
  background: linear-gradient(180deg, #faf8f3, #f3efe9);
}

.bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 12px;
  height: 100%;
}

.bar {
  width: 100%;
  max-width: 50px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #c1652f, #df8c52);
}

.bar-group span {
  color: #69737d;
  font-size: 0.8rem;
}
</style>
