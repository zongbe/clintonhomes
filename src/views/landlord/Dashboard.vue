<script setup>
import LandlordLayout from './LandlordLayout.vue'

const summaryCards = [
  { label: 'Active listings', value: '12', change: '+3 this month' },
  { label: 'Pending inquiries', value: '26', change: '8 new today' },
  { label: 'Total views', value: '1,840', change: '+14.2%' },
  { label: 'Booked tours', value: '9', change: '+2 this week' },
]

const recentProperties = [
  { title: 'Sunset garden residence', status: 'Active', price: '₦895,000,000', views: '212 views' },
  { title: 'Palm court duplex', status: 'Pending', price: '₦750,000,000', views: '148 views' },
  { title: 'Azure terrace home', status: 'Active', price: '₦620,000,000', views: '196 views' },
]

const inquiries = [
  { name: 'Joy S.', property: 'Sunset garden residence', type: 'Viewing request' },
  { name: 'Tunde B.', property: 'Azure terrace home', type: 'Price inquiry' },
  { name: 'Ada O.', property: 'Palm court duplex', type: 'Message follow-up' },
]
</script>

<template>
  <LandlordLayout>
    <section class="stats-grid">
      <article v-for="card in summaryCards" :key="card.label" class="stat-card">
        <span>{{ card.label }}</span>
        <strong>{{ card.value }}</strong>
        <small>{{ card.change }}</small>
      </article>
    </section>

    <section class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <h2>My listings</h2>
          <button type="button" class="secondary-button">Add new</button>
        </div>

        <div class="property-list">
          <article v-for="item in recentProperties" :key="item.title" class="property-item">
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.price }}</p>
            </div>
            <div class="meta">
              <span class="status" :class="item.status.toLowerCase()">{{ item.status }}</span>
              <small>{{ item.views }}</small>
            </div>
          </article>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <h2>Latest inquiries</h2>
          <button type="button" class="secondary-button">View all</button>
        </div>

        <div class="inquiry-list">
          <article v-for="item in inquiries" :key="item.name" class="inquiry-item">
            <div class="avatar">{{ item.name.charAt(0) }}</div>
            <div class="inquiry-copy">
              <strong>{{ item.name }}</strong>
              <small>{{ item.property }}</small>
            </div>
            <span class="badge">{{ item.type }}</span>
          </article>
        </div>
      </div>
    </section>
  </LandlordLayout>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 26px;
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
  margin-bottom: 8px;
  color: #69737d;
}

.stat-card strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 8px;
}

.stat-card small {
  color: #2c8f57;
  font-weight: 700;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 20px;
}

.panel {
  padding: 22px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.3rem;
}

.secondary-button {
  border: 1px solid #d9dfe5;
  background: #f8f6f3;
  color: #20304a;
  border-radius: 10px;
  padding: 8px 12px;
  font-weight: 600;
  cursor: pointer;
}

.property-list,
.inquiry-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.property-item,
.inquiry-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 14px 12px;
  border: 1px solid #ece6df;
  border-radius: 12px;
  background: #faf8f4;
}

.property-item h3 {
  margin: 0 0 6px;
}

.property-item p,
.inquiry-copy small {
  margin: 0;
  color: #69737d;
}

.meta {
  text-align: right;
}

.status {
  display: inline-block;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.status.active {
  background: rgba(44, 143, 87, 0.12);
  color: #1a7d44;
}

.status.pending {
  background: rgba(193, 101, 47, 0.12);
  color: #b55f2e;
}

.meta small {
  display: block;
  margin-top: 8px;
  color: #69737d;
}

.inquiry-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #1b2a41;
  color: #fff;
  font-weight: 700;
}

.inquiry-copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.badge {
  padding: 6px 8px;
  border-radius: 999px;
  background: rgba(17, 38, 61, 0.08);
  color: #20304a;
  font-size: 0.72rem;
  font-weight: 700;
}

@media (max-width: 860px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
