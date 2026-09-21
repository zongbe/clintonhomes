<script setup>
import { onMounted, ref } from 'vue'
import AdminLayout from './AdminLayout.vue'
import { adminApi } from '@/services/adminApi'

const properties = ref([])
const showForm = ref(false)
const editingId = ref(null)
const notification = ref('')
const form = ref({
  title: '',
  location: '',
  price: '',
  status: 'Active',
  landlord: '',
  bedrooms: 0,
  baths: 0,
  type: 'Apartment',
})

const defaultForm = () => ({
  title: '',
  location: '',
  price: '',
  status: 'Active',
  landlord: '',
  bedrooms: 0,
  baths: 0,
  type: 'Apartment',
})

function notify(message) {
  notification.value = message
  window.clearTimeout(window.__ch_property_notify_timer)
  window.__ch_property_notify_timer = window.setTimeout(() => {
    notification.value = ''
  }, 2600)
}

function isLocked(property) {
  return property && property.status === 'Sold'
}

function openCreateForm() {
  editingId.value = null
  form.value = defaultForm()
  showForm.value = true
}

function openEditForm(property) {
  if (isLocked(property)) {
    notify('This sold property cannot be edited.')
    return
  }

  editingId.value = property.id
  form.value = {
    title: property.title,
    location: property.location,
    price: property.price,
    status: property.status,
    landlord: property.landlord,
    bedrooms: property.bedrooms || 0,
    baths: property.baths || 0,
    type: property.type,
  }
  showForm.value = true
}

function closeForm() {
  showForm.value = false
  editingId.value = null
  form.value = defaultForm()
}

async function loadProperties() {
  properties.value = await adminApi.getProperties()
}

async function submitProperty() {
  if (!form.value.title || !form.value.location || !form.value.price || !form.value.landlord) {
    return
  }

  const propertyToEdit = editingId.value ? properties.value.find((item) => item.id === editingId.value) : null

  if (propertyToEdit && propertyToEdit.status === 'Sold') {
    notify('Sold listings cannot be edited.')
    closeForm()
    return
  }

  const payload = {
    ...form.value,
    bedrooms: Number(form.value.bedrooms || 0),
    baths: Number(form.value.baths || 0),
  }

  if (editingId.value) {
    const response = await adminApi.updateProperty(editingId.value, payload)
    properties.value = properties.value.map((item) =>
      item.id === editingId.value ? response.property : item,
    )
    notify('Property updated successfully.')
  } else {
    const response = await adminApi.createProperty(payload)
    properties.value = [response.property, ...properties.value]
    notify('Property created successfully.')
  }

  closeForm()
}

async function changeStatus(id, nextStatus) {
  const property = properties.value.find((item) => item.id === id)

  if (!property || property.status === 'Sold') {
    notify('A sold property cannot change status.')
    return
  }

  const result = await adminApi.updatePropertyStatus(id, nextStatus)
  properties.value = properties.value.map((item) =>
    item.id === id ? { ...item, status: result.property.status } : item,
  )
  notify(`Status updated to ${nextStatus}.`)
}

async function deleteProperty(id) {
  const property = properties.value.find((item) => item.id === id)

  if (property && property.status === 'Sold') {
    notify('Sold listings are locked and cannot be deleted from this dashboard.')
    return
  }

  await adminApi.deleteProperty(id)
  properties.value = properties.value.filter((item) => item.id !== id)
}

onMounted(() => {
  loadProperties()
})
</script>

<template>
  <AdminLayout>
    <section class="page-header panel-soft">
      <div>
        <p class="eyebrow">Inventory</p>
        <h2>Property portfolio</h2>
      </div>
      <button type="button" class="primary-button" @click="openCreateForm">+ Add listing</button>
    </section>

    <section class="stats-strip">
      <article class="metric-card">
        <span>Total listings</span>
        <strong>{{ properties.length }}</strong>
      </article>
      <article class="metric-card">
        <span>Active</span>
        <strong>{{ properties.filter((item) => item.status === 'Active').length }}</strong>
      </article>
      <article class="metric-card">
        <span>Pending</span>
        <strong>{{ properties.filter((item) => item.status === 'Pending').length }}</strong>
      </article>
      <article class="metric-card">
        <span>Sold</span>
        <strong>{{ properties.filter((item) => item.status === 'Sold').length }}</strong>
      </article>
    </section>

    <div v-if="notification" class="toast">{{ notification }}</div>

    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Location</th>
              <th>Price</th>
              <th>Status</th>
              <th>Landlord</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="property in properties" :key="property.id">
              <td>
                <strong>{{ property.title }}</strong>
                <small>{{ property.type }}</small>
              </td>
              <td>{{ property.location }}</td>
              <td>{{ property.price }}</td>
              <td>
                <span class="status-badge" :class="property.status.toLowerCase()">
                  {{ property.status }}
                </span>
              </td>
              <td>{{ property.landlord }}</td>
              <td class="actions">
                <button type="button" class="mini-button" :disabled="isLocked(property)" @click="openEditForm(property)">Edit</button>
                <button type="button" class="mini-button" :disabled="isLocked(property)" @click="changeStatus(property.id, 'Active')">Activate</button>
                <button type="button" class="mini-button secondary" :disabled="isLocked(property)" @click="changeStatus(property.id, 'Pending')">Pending</button>
                <button type="button" class="mini-button sold" :disabled="isLocked(property)" @click="changeStatus(property.id, 'Sold')">Sold</button>
                <button type="button" class="mini-button danger" :disabled="isLocked(property)" @click="deleteProperty(property.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div v-if="showForm" class="modal-backdrop" @click.self="closeForm">
      <div class="property-form-card">
        <div class="form-header">
          <div>
            <p class="eyebrow">{{ editingId ? 'Edit listing' : 'New listing' }}</p>
            <h3>{{ editingId ? 'Update property' : 'Create property' }}</h3>
          </div>
          <button type="button" class="close-button" @click="closeForm">×</button>
        </div>

        <form class="property-form" @submit.prevent="submitProperty">
          <div class="field-grid">
            <label>
              Property title
              <input v-model="form.title" type="text" placeholder="E.g. Luxury duplex in Lekki" />
            </label>
            <label>
              Property type
              <select v-model="form.type">
                <option value="Apartment">Apartment</option>
                <option value="Duplex">Duplex</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Villa">Villa</option>
              </select>
            </label>
            <label>
              Location
              <input v-model="form.location" type="text" placeholder="e.g. Lekki Phase 1, Lagos" />
            </label>
            <label>
              Price
              <input v-model="form.price" type="text" placeholder="₦85,000,000" />
            </label>
            <label>
              Landlord
              <input v-model="form.landlord" type="text" placeholder="Owner or manager name" />
            </label>
            <label>
              Status
              <select v-model="form.status">
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Sold">Sold</option>
              </select>
            </label>
            <label>
              Bedrooms
              <input v-model.number="form.bedrooms" type="number" min="0" />
            </label>
            <label>
              Bathrooms
              <input v-model.number="form.baths" type="number" min="0" />
            </label>
          </div>

          <div class="form-actions">
            <button type="button" class="secondary-action" @click="closeForm">Cancel</button>
            <button type="submit" class="primary-button">{{ editingId ? 'Save changes' : 'Create listing' }}</button>
          </div>
        </form>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
:global(body) {
  background: #f3efe9;
}

.panel-soft,
.panel {
  background: linear-gradient(180deg, #ffffff 0%, #fffdfb 100%);
  border: 1px solid rgba(27, 42, 65, 0.08);
  border-radius: 22px;
  box-shadow: 0 18px 45px rgba(27, 42, 65, 0.06);
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 26px 28px;
  margin-bottom: 22px;
}

.page-header h2 {
  margin: 0;
  font-size: 2rem;
}

.eyebrow {
  margin: 0 0 8px;
  color: #c1652f;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 18px;
  margin: 0 0 24px;
}

.metric-card {
  background: #1b2a41;
  color: #fff;
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: 0 12px 26px rgba(27, 42, 65, 0.15);
}

.metric-card span {
  display: block;
  opacity: 0.76;
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.metric-card strong {
  font-size: 2rem;
}

.panel {
  padding: 22px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 16px 12px;
  text-align: left;
  border-bottom: 1px solid #ece7e1;
  vertical-align: top;
}

th {
  color: #69737d;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

td small {
  display: block;
  margin-top: 6px;
  color: #69737d;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.status-badge.active {
  background: rgba(44, 143, 87, 0.12);
  color: #1a7d44;
}

.status-badge.pending {
  background: rgba(193, 101, 47, 0.12);
  color: #b55f2e;
}

.status-badge.sold {
  background: rgba(86, 102, 120, 0.12);
  color: #506275;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.primary-button,
.mini-button,
.secondary-action,
.close-button {
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.primary-button {
  background: linear-gradient(135deg, #1b2a41, #2e405a);
  color: #fff;
  padding: 11px 16px;
}

.mini-button {
  padding: 8px 10px;
  background: #edf2fa;
  color: #1b2a41;
}

.mini-button.secondary {
  background: #f8ebdb;
  color: #8d4c1b;
}

.mini-button.danger {
  background: #ffe9e9;
  color: #a63838;
}

.mini-button.sold {
  background: #e9eef7;
  color: #37455d;
}

.toast {
  position: fixed;
  right: 22px;
  bottom: 22px;
  background: #1b2a41;
  color: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 12px 28px rgba(27, 42, 65, 0.18);
  font-weight: 600;
  z-index: 50;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(12, 18, 25, 0.54);
  display: grid;
  place-items: center;
  padding: 24px;
  z-index: 30;
}

.property-form-card {
  width: min(760px, 100%);
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 30px 80px rgba(12, 18, 25, 0.24);
}

.form-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
}

.form-header h3 {
  margin: 0;
  font-size: 1.6rem;
}

.close-button {
  width: 36px;
  height: 36px;
  background: #f1f3f6;
  color: #1b2a41;
  font-size: 1.4rem;
}

.property-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  color: #2f3f52;
  font-weight: 600;
}

input,
select {
  border: 1px solid #dfe6eb;
  border-radius: 12px;
  padding: 12px 14px;
  font: inherit;
  background: #fbfbfb;
}

input:focus,
select:focus {
  outline: 2px solid rgba(193, 101, 47, 0.18);
  border-color: #c1652f;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
}

.secondary-action {
  background: #f4f1ec;
  color: #1b2a41;
  padding: 11px 16px;
}

@media (max-width: 760px) {
  .field-grid,
  .stats-strip {
    grid-template-columns: 1fr;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
