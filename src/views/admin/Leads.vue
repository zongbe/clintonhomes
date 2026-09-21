<script setup>
import { onMounted, ref } from 'vue'
import AdminLayout from './AdminLayout.vue'
import { adminApi } from '@/services/adminApi'

const leads = ref([])

async function loadLeads() {
  leads.value = await adminApi.getLeads()
}

async function updateStatus(id, nextStatus) {
  const result = await adminApi.updateLeadStatus(id, nextStatus)
  leads.value = leads.value.map((lead) =>
    lead.id === id ? { ...lead, status: result.lead.status } : lead,
  )
}

onMounted(() => {
  loadLeads()
})
</script>

<template>
  <AdminLayout>
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">CRM</p>
          <h2>Leads and inquiries</h2>
        </div>
      </div>

      <div class="qualification-box">
        <h3>How a lead is qualified</h3>
        <ul>
          <li>They confirm a preferred location and property type.</li>
          <li>They share a realistic budget range or willingness to purchase or rent.</li>
          <li>They show clear interest by requesting a viewing, enquiry, or follow-up action.</li>
        </ul>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Inquiry</th>
              <th>Source</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lead in leads" :key="lead.id">
              <td>{{ lead.name }}</td>
              <td>{{ lead.inquiry }}</td>
              <td>{{ lead.source }}</td>
              <td>
                <span class="status-badge" :class="lead.status.toLowerCase().replace(/\s+/g, '-')">
                  {{ lead.status }}
                </span>
              </td>
              <td>{{ lead.date }}</td>
              <td class="actions">
                <button type="button" class="mini-button" @click="updateStatus(lead.id, 'Qualified')">Qualified</button>
                <button type="button" class="mini-button secondary" @click="updateStatus(lead.id, 'Follow up')">Follow up</button>
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

.qualification-box {
  margin: 0 0 20px;
  padding: 18px 20px;
  background: #faf7f2;
  border: 1px solid #eee5d9;
  border-radius: 14px;
}

.qualification-box h3 {
  margin: 0 0 10px;
  font-size: 1rem;
}

.qualification-box ul {
  margin: 0;
  padding-left: 18px;
  color: #415266;
  line-height: 1.7;
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

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 14px 12px;
  text-align: left;
  border-bottom: 1px solid #ece7e1;
}

th {
  color: #69737d;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.status-badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 700;
}

.status-badge.new {
  background: rgba(73, 127, 201, 0.12);
  color: #3f73bd;
}

.status-badge.follow-up,
.status-badge.follow-up {
  background: rgba(193, 101, 47, 0.12);
  color: #b55f2e;
}

.status-badge.qualified {
  background: rgba(44, 143, 87, 0.12);
  color: #1a7d44;
}

.status-badge.closed {
  background: rgba(86, 102, 120, 0.12);
  color: #506275;
}

.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.mini-button {
  border: none;
  background: #1b2a41;
  color: #fff;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.mini-button.secondary {
  background: #f3ead9;
  color: #8d4c1b;
}
</style>
