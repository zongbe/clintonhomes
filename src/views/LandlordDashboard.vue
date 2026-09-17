<script setup>
const properties = [
  {
    id: 1,
    name: 'Maple Grove Villa',
    location: 'Lekki Phase 1, Lagos',
    type: '3 Bedroom House',
    price: '₦ 6,500,000 / year',
    status: 'Occupied',
    occupancy: 'Leased',
    uploaded: '12 Aug 2026',
    listing: 'Featured',
    color: 'sunset'
  },
  {
    id: 2,
    name: 'Cedar Heights',
    location: 'Gwarinpa, Abuja',
    type: '2 Bedroom Apartment',
    price: '₦ 4,800,000 / year',
    status: 'Available',
    occupancy: 'Vacant',
    uploaded: '28 Aug 2026',
    listing: 'Active',
    color: 'forest'
  },
  {
    id: 3,
    name: 'Oakland Residence',
    location: 'Wuse, Abuja',
    type: '4 Bedroom House',
    price: '₦ 9,500,000 / year',
    status: 'Pending',
    occupancy: 'Viewing',
    uploaded: '05 Sep 2026',
    listing: 'Draft',
    color: 'gold'
  },
  {
    id: 4,
    name: 'Bamboo Court',
    location: 'Ikeja, Lagos',
    type: '1 Bedroom Studio',
    price: '₦ 3,200,000 / year',
    status: 'Occupied',
    occupancy: 'Leased',
    uploaded: '14 Sep 2026',
    listing: 'Featured',
    color: 'stone'
  }
]

const metrics = [
  { label: 'Total houses', value: '124', change: '+12 this month' },
  { label: 'Occupied', value: '89', change: '72% occupancy' },
  { label: 'Available', value: '21', change: 'Ready to show' },
  { label: 'Monthly income', value: '₦ 380,000,000', change: '+18% vs last month' }
]

const statusClass = {
  Occupied: 'status occupied',
  Available: 'status available',
  Pending: 'status pending'
}
</script>

<template>
  <div class="dashboard-page">
    <header class="topbar">
      <div>
        <p class="eyebrow">Portfolio overview</p>
        <h1>Landlord dashboard</h1>
      </div>
      <div class="topbar__actions">
        <button class="secondary-btn">Export report</button>
        <button class="primary-btn">Add new house</button>
      </div>
    </header>

    <section class="metrics-grid">
      <article v-for="metric in metrics" :key="metric.label" class="metric-card">
        <span class="metric-card__label">{{ metric.label }}</span>
        <strong>{{ metric.value }}</strong>
        <small>{{ metric.change }}</small>
      </article>
    </section>

    <section class="panel">
      <div class="panel__header">
        <div>
          <p class="eyebrow">Uploaded properties</p>
          <h2>All houses uploaded</h2>
        </div>
        <router-link to="/sell" class="panel__link">Add property</router-link>
      </div>

      <div class="property-grid">
        <article v-for="property in properties" :key="property.id" class="property-card">
          <div class="property-card__image" :class="property.color">
            <span>{{ property.listing }}</span>
          </div>

          <div class="property-card__body">
            <div class="property-card__title-row">
              <h3>{{ property.name }}</h3>
              <span :class="statusClass[property.status] || 'status'">{{ property.status }}</span>
            </div>

            <p class="location">{{ property.location }}</p>
            <p class="type">{{ property.type }}</p>

            <div class="property-card__meta">
              <div>
                <span class="meta-label">Price</span>
                <strong>{{ property.price }}</strong>
              </div>
              <div>
                <span class="meta-label">Upload</span>
                <strong>{{ property.uploaded }}</strong>
              </div>
            </div>

            <div class="property-card__footer">
              <span>{{ property.occupancy }}</span>
              <button>View details</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard-page {
  background: #f7f3ec;
  min-height: 100vh;
  padding: 32px clamp(20px, 4vw, 60px) 56px;
  color: #1c1d1f;
  font-family: 'IBM Plex Sans', 'Segoe UI', sans-serif;
}

.topbar {
  max-width: 1200px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #b1763f;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: 'Fraunces', Georgia, serif;
}

h1 {
  font-size: clamp(2.2rem, 4vw, 3.5rem);
}

.topbar__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

button,
.panel__link {
  border: none;
  border-radius: 10px;
  font: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn,
.secondary-btn {
  padding: 0.8rem 1.2rem;
  font-weight: 600;
}

.primary-btn {
  background: #c1652f;
  color: #ffffff;
  box-shadow: 0 12px 24px rgba(193, 101, 47, 0.18);
}

.secondary-btn {
  background: #ffffff;
  color: #1f2a37;
  border: 1px solid #e0d9cf;
}

button:hover,
.panel__link:hover {
  transform: translateY(-1px);
}

.metrics-grid {
  max-width: 1200px;
  margin: 0 auto 28px;
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
}

.metric-card {
  background: #ffffff;
  border: 1px solid #e6e0d8;
  border-radius: 18px;
  padding: 22px 20px;
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.03);
}

.metric-card__label {
  display: block;
  color: #5c635d;
  font-size: 0.8rem;
  margin-bottom: 16px;
}

.metric-card strong {
  display: block;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  margin-bottom: 8px;
}

.metric-card small {
  color: #2d8f5f;
  font-weight: 600;
}

.panel {
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #e6e0d8;
  border-radius: 22px;
  padding: clamp(18px, 2vw, 28px);
}

.panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.panel__link {
  background: #edf0ea;
  color: #1c1d1f;
  text-decoration: none;
  padding: 0.7rem 1rem;
  font-weight: 600;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 18px;
}

.property-card {
  border: 1px solid #e8e1d8;
  border-radius: 18px;
  overflow: hidden;
  background: #fffdf8;
}

.property-card__image {
  height: 170px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 14px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.property-card__image span {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
}

.sunset {
  background: linear-gradient(135deg, #d8a468, #c1652f);
}

.forest {
  background: linear-gradient(135deg, #a7c2b0, #385c4d);
}

.gold {
  background: linear-gradient(135deg, #f5dc9c, #d1a65d);
}

.stone {
  background: linear-gradient(135deg, #dfe5eb, #8aa0ad);
}

.property-card__body {
  padding: 18px 18px 14px;
}

.property-card__title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.property-card__title-row h3 {
  font-size: 1.4rem;
}

.status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.36rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
}

.status.occupied {
  background: #eaf7ee;
  color: #1c7d4d;
}

.status.available {
  background: #eef7ff;
  color: #1866d4;
}

.status.pending {
  background: #fff2db;
  color: #9a6400;
}

.location,
.type {
  margin: 0;
  color: #52606f;
}

.location {
  margin-bottom: 8px;
}

.type {
  font-weight: 600;
  color: #1d2731;
  margin-bottom: 16px;
}

.property-card__meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.meta-label {
  display: block;
  font-size: 0.72rem;
  color: #6c737d;
  margin-bottom: 6px;
}

.property-card__meta strong {
  font-size: 1rem;
}

.property-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-top: 10px;
  border-top: 1px solid #eee5d8;
  color: #23313f;
  font-weight: 600;
}

.property-card__footer button {
  background: #f2eee8;
  color: #1d2731;
  padding: 0.7rem 0.9rem;
}

@media (max-width: 900px) {
  .metrics-grid,
  .property-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .topbar,
  .panel__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .metrics-grid,
  .property-grid {
    grid-template-columns: 1fr;
  }
}
</style>
