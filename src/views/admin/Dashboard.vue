<script setup>
import AdminLayout from './AdminLayout.vue'
import { dashboardStats, recentActivity } from './mockData'
</script>

<template>
  <AdminLayout>
    <section class="stats-grid">
      <article v-for="stat in dashboardStats" :key="stat.label" class="stat-card">
        <span>{{ stat.label }}</span>
        <strong>{{ stat.value }}</strong>
        <small>{{ stat.change }} vs last month</small>
      </article>
    </section>

    <section class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <h2>Recent activity</h2>
          <span>Updated today</span>
        </div>

        <ul class="activity-list">
          <li v-for="item in recentActivity" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="panel">
        <div class="panel-header">
          <h2>Quick actions</h2>
        </div>

        <div class="action-stack">
          <button type="button">Add new property</button>
          <button type="button">Review landlord requests</button>
          <button type="button">View all leads</button>
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

.content-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 20px;
}

.panel {
  padding: 22px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.25rem;
}

.panel-header span {
  color: #69737d;
  font-size: 0.9rem;
}

.activity-list {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 12px;
  color: #2f3f52;
}

.action-stack {
  display: grid;
  gap: 12px;
}

.action-stack button {
  width: 100%;
  border: none;
  background: #1b2a41;
  color: #fff;
  border-radius: 10px;
  padding: 12px 14px;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 700px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
