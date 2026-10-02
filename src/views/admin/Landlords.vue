<script setup>
import { onMounted, ref } from 'vue'
import AdminLayout from './AdminLayout.vue'
import { adminApi } from '@/services/adminApi'

const landlordApplications = ref([])
const selectedLandlord = ref(null)
const notification = ref({ visible: false, message: '', type: 'success' })

function showNotification(message, type = 'success') {
  notification.value = { visible: true, message, type }
  window.setTimeout(() => {
    notification.value.visible = false
  }, 2600)
}

async function loadLandlords() {
  landlordApplications.value = await adminApi.getLandlords()
}

async function approveLandlord(id) {
  const result = await adminApi.updateLandlordStatus(id, 'Approved')
  landlordApplications.value = landlordApplications.value.map((app) =>
    app.id === id ? { ...app, status: result.application.status } : app,
  )
  if (selectedLandlord.value && selectedLandlord.value.id === id) {
    selectedLandlord.value = { ...selectedLandlord.value, status: 'Approved' }
  }
  showNotification('Landlord application approved successfully.')
}

async function rejectLandlord(id) {
  const result = await adminApi.updateLandlordStatus(id, 'Rejected')
  landlordApplications.value = landlordApplications.value.map((app) =>
    app.id === id ? { ...app, status: result.application.status } : app,
  )
  if (selectedLandlord.value && selectedLandlord.value.id === id) {
    selectedLandlord.value = { ...selectedLandlord.value, status: 'Rejected' }
  }
  showNotification('Landlord application rejected.', 'warning')
}

async function deleteLandlord(id) {
  await adminApi.deleteLandlord(id)
  landlordApplications.value = landlordApplications.value.filter((app) => app.id !== id)
  if (selectedLandlord.value && selectedLandlord.value.id === id) {
    selectedLandlord.value = null
  }
}

function openProfile(app) {
  selectedLandlord.value = app
}

function closeProfile() {
  selectedLandlord.value = null
}

onMounted(() => {
  loadLandlords()
})
</script>

<template>
  <AdminLayout>
    <div v-if="notification.visible" class="toast" :class="notification.type">
      {{ notification.message }}
    </div>

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
            <div class="action-stack">
              <button type="button" class="mini-button ghost" @click="openProfile(app)">View profile</button>
              <button type="button" class="mini-button" @click="approveLandlord(app.id)">Approve</button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <div v-if="selectedLandlord" class="modal-backdrop" @click="closeProfile">
      <div class="profile-modal" @click.stop>
        <div class="profile-header">
          <div class="avatar large">{{ selectedLandlord.name.charAt(0) }}</div>
          <div>
            <p class="eyebrow">Landlord profile</p>
            <h3>{{ selectedLandlord.name }}</h3>
          </div>
          <button type="button" class="close-button" @click="closeProfile">×</button>
        </div>

        <div class="profile-grid">
          <div class="profile-block">
            <span>Email</span>
            <strong>{{ selectedLandlord.email || 'Not provided' }}</strong>
          </div>
          <div class="profile-block">
            <span>Phone</span>
            <strong>{{ selectedLandlord.phone || 'Not provided' }}</strong>
          </div>
          <div class="profile-block">
            <span>Location</span>
            <strong>{{ selectedLandlord.location }}</strong>
          </div>
          <div class="profile-block">
            <span>Property</span>
            <strong>{{ selectedLandlord.property }}</strong>
          </div>
          <div class="profile-block full">
            <span>About</span>
            <strong>{{ selectedLandlord.about || 'No profile summary provided yet.' }}</strong>
          </div>
          <div class="profile-block">
            <span>Property type</span>
            <strong>{{ selectedLandlord.propertyType || 'Not specified' }}</strong>
          </div>
          <div class="profile-block">
            <span>Portfolio</span>
            <strong>{{ selectedLandlord.portfolio || 'No prior portfolio listed' }}</strong>
          </div>
          <div class="profile-block">
            <span>Experience</span>
            <strong>{{ selectedLandlord.experience || 'Not specified' }}</strong>
          </div>
        </div>

        <div class="status-row modal-actions">
          <span class="status-badge" :class="selectedLandlord.status.toLowerCase()">{{ selectedLandlord.status }}</span>
          <div class="button-row">
            <button type="button" class="mini-button" @click="approveLandlord(selectedLandlord.id)">Approve</button>
            <button type="button" class="mini-button warn" @click="rejectLandlord(selectedLandlord.id)">Reject</button>
            <button type="button" class="mini-button danger" @click="deleteLandlord(selectedLandlord.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
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

.avatar.large {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
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
  gap: 12px;
  margin-top: 16px;
}

.action-stack,
.button-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
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

.status-badge.rejected {
  background: rgba(188, 53, 53, 0.12);
  color: #b73838;
}

.mini-button {
  border: none;
  padding: 8px 12px;
  background: #1b2a41;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

.mini-button.ghost {
  background: #eef1f4;
  color: #1b2a41;
}

.mini-button.warn {
  background: rgba(193, 101, 47, 0.12);
  color: #b55f2e;
}

.mini-button.danger {
  background: rgba(188, 53, 53, 0.12);
  color: #b73838;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 32, 0.46);
  display: grid;
  place-items: center;
  z-index: 60;
  padding: 20px;
}

.profile-modal {
  width: min(760px, 100%);
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 18px 50px rgba(17, 24, 39, 0.18);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.close-button {
  margin-left: auto;
  border: none;
  background: #f2f4f7;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-size: 1.4rem;
  cursor: pointer;
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 14px;
}

.profile-block {
  background: #f8f7f3;
  border: 1px solid #ece6df;
  border-radius: 12px;
  padding: 12px 14px;
}

.profile-block.full {
  grid-column: 1 / -1;
}

.profile-block span {
  display: block;
  color: #69737d;
  margin-bottom: 8px;
}

.profile-block strong {
  display: block;
  color: #20304a;
  line-height: 1.5;
}

.modal-actions {
  margin-top: 24px;
}

.toast {
  position: fixed;
  right: 22px;
  bottom: 22px;
  background: #17314d;
  color: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(17, 24, 39, 0.18);
  z-index: 100;
  font-weight: 700;
}

.toast.warning {
  background: #a85b2c;
}
</style>
