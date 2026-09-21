<script setup>
import { ref } from 'vue'
import AdminLayout from './AdminLayout.vue'
import { propertyListings } from './mockData'

const properties = ref([...propertyListings])

function changeStatus(id, nextStatus) {
  properties.value = properties.value.map((item) =>
    item.id === id ? { ...item, status: nextStatus } : item,
  )
}

function deleteProperty(id) {
  properties.value = properties.value.filter((item) => item.id !== id)
}
</script>

<template>
  <AdminLayout>
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Inventory</p>
          <h2>Property listings</h2>
        </div>
        <button type="button" class="primary-button">Add listing</button>
      </div>

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
                <button type="button" class="mini-button" @click="changeStatus(property.id, 'Active')">Activate</button>
                <button type="button" class="mini-button secondary" @click="changeStatus(property.id, 'Pending')">Pending</button>
                <button type="button" class="mini-button danger" @click="deleteProperty(property.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
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

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
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

.primary-button,
.mini-button {
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

.primary-button {
  background: #1b2a41;
  color: #fff;
  padding: 11px 16px;
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
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

td small {
  display: block;
  margin-top: 6px;
  color: #69737d;
}

.status-badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
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
  gap: 8px;
  flex-wrap: wrap;
}

.mini-button {
  padding: 8px 10px;
  background: #e8edf5;
  color: #1b2a41;
}

.mini-button.secondary {
  background: #f3ead9;
  color: #8d4c1b;
}

.mini-button.danger {
  background: #fbe6e6;
  color: #a63838;
}
</style>
