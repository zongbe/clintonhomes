 <script setup>
import LandlordLayout from './LandlordLayout.vue'

const listings = [
  { title: 'Sunset garden residence', location: 'Victoria Island, Lagos', price: '₦895,000,000', status: 'Active', type: 'Luxury house', beds: '5 beds' },
  { title: 'Palm court duplex', location: 'Lekki Phase 2, Lagos', price: '₦750,000,000', status: 'Pending', type: 'Duplex', beds: '4 beds' },
  { title: 'Azure terrace home', location: 'Ikoyi, Lagos', price: '₦620,000,000', status: 'Active', type: 'Terrace home', beds: '3 beds' },
]
</script>

<template>
  <LandlordLayout>
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Portfolio</p>
          <h2>My listings</h2>
        </div>
        <button type="button" class="primary-button">Add property</button>
      </div>

      <div class="cards-grid">
        <article v-for="listing in listings" :key="listing.title" class="listing-card">
          <div class="listing-top">
            <div>
              <h3>{{ listing.title }}</h3>
              <small>{{ listing.location }}</small>
            </div>
            <span class="status" :class="listing.status.toLowerCase()">{{ listing.status }}</span>
          </div>

          <div class="details">
            <span>{{ listing.type }}</span>
            <span>{{ listing.beds }}</span>
          </div>

          <div class="price-row">
            <strong>{{ listing.price }}</strong>
            <button type="button" class="mini-button ghost">Edit</button>
          </div>

          <div class="actions">
            <button type="button" class="mini-button">View leads</button>
            <button type="button" class="mini-button warn">Mark sold</button>
          </div>
        </article>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
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

.primary-button,
.mini-button {
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}

.primary-button {
  background: #1b2a41;
  color: #fff;
  padding: 10px 14px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.listing-card {
  padding: 18px;
  border: 1px solid #ece6df;
  border-radius: 16px;
  background: #faf8f4;
}

.listing-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 14px;
}

.listing-top h3 {
  margin: 0 0 6px;
}

.listing-top small {
  color: #69737d;
}

.status {
  display: inline-block;
  padding: 6px 8px;
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

.details {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: #45566a;
  font-weight: 600;
  margin-bottom: 18px;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.price-row strong {
  font-size: 1.2rem;
}

.mini-button {
  padding: 8px 12px;
  background: #1b2a41;
  color: #fff;
}

.mini-button.ghost {
  background: #edf1f4;
  color: #1b2a41;
}

.mini-button.warn {
  background: rgba(193, 101, 47, 0.12);
  color: #b55f2e;
}

.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
