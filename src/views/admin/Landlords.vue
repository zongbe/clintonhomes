<script setup>
import { onMounted, ref } from 'vue'
import AdminLayout from './AdminLayout.vue'
import { adminApi } from '@/services/adminApi'

const landlordApplications = ref([])

async function loadLandlords() {
  landlordApplications.value = await adminApi.getLandlords()
}

async function approveLandlord(id) {
  const result = await adminApi.updateLandlordStatus(id, 'Approved')
  landlordApplications.value = landlordApplications.value.map((app) =>
    app.id === id ? { ...app, status: result.application.status } : app,
  )
}

onMounted(() => {
  loadLandlords()
})
</script>

<template>
  <AdminLayout>
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Onboarding</p>
          <h2>Landlord submissions</h2>
        </div>
      </div>

      <div class="cards-grid">
        <article v-for="app in landlordApplications" :key="app.id" class="landlord-card">
          <div class="card-top">
            <div class="avatar">{{ app.name.charAt(0) }}</div>
            <div>
              <h3>{{ app.name }}</h3>
              <small>{{ app.location }}</small>
            </div>
          </div>

          <p><strong>Property:</strong> {{ app.property }}</p>
          <p><strong>Submitted:</strong> {{ app.submitted }}</p>

          <div class="status-row">
            <span class="status-badge" :class="app.status.toLowerCase()">{{ app.status }}</span>
            <button type="button" class="mini-button" @click="approveLandlord(app.id)">Approve</button>
          </div>
        </article>
      </div>
    </section>
  </AdminLayout>
</template>

<style scoped>
.panel {
  background: #fff;
  border: 1px solid #e5e2dc;
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(27, 42, 65, 0.04);
}

.panel-header h2 {
  margin: 0;
  font-size: 1.6rem;
}

.eyebrow {
  margin: 0 0 8px;
  color: #c1652f;
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.landlord-card {
  padding: 18px;
  border: 1px solid #ece6df;
  border-radius: 16px;
  background: #faf8f4;
}

.card-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.avatar {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: #1b2a41;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
}

.card-top h3 {
  margin: 0;
}

.card-top small {
  color: #69737d;
}

.landlord-card p {
  margin: 8px 0;
  color: #2f3f52;
}

.status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.status-badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
}

.status-badge.pending {
  background: rgba(193, 101, 47, 0.12);
  color: #b55f2e;
}

.status-badge.approved {
  background: rgba(44, 143, 87, 0.12);
  color: #1a7d44;
}

.mini-button {
  border: none;
  padding: 8px 12px;
  background: #1b2a41;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
</style>
