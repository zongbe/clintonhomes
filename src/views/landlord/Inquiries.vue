<script setup>
import LandlordLayout from './LandlordLayout.vue'

const inquiries = [
  { name: 'Joy S.', property: 'Sunset garden residence', message: 'Interested in a viewing next week and wants to know the exact steps.', status: 'New' },
  { name: 'Tunde B.', property: 'Azure terrace home', message: 'Asked for price flexibility and floor plan details.', status: 'Follow up' },
  { name: 'Ada O.', property: 'Palm court duplex', message: 'Requested more information about location and move-in readiness.', status: 'Qualified' },
]
</script>

<template>
  <LandlordLayout>
    <section class="panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Inbox</p>
          <h2>Property inquiries</h2>
        </div>
      </div>

      <div class="inquiry-list">
        <article v-for="item in inquiries" :key="`${item.name}-${item.property}`" class="inquiry-card">
          <div class="profile-block">
            <div class="avatar">{{ item.name.charAt(0) }}</div>
            <div>
              <h3>{{ item.name }}</h3>
              <small>{{ item.property }}</small>
            </div>
          </div>

          <p>{{ item.message }}</p>

          <div class="footer-row">
            <span class="status" :class="item.status.toLowerCase().replace(/\s+/g, '-')">{{ item.status }}</span>
            <button type="button" class="mini-button">Reply</button>
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
  margin-bottom: 18px;
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

.inquiry-list {
  display: grid;
  gap: 16px;
}

.inquiry-card {
  padding: 18px;
  border: 1px solid #ece6df;
  border-radius: 16px;
  background: #faf8f4;
}

.profile-block {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #1b2a41;
  color: #fff;
  font-weight: 700;
}

.profile-block h3 {
  margin: 0 0 4px;
}

.profile-block small {
  color: #69737d;
}

.inquiry-card p {
  margin: 0 0 16px;
  line-height: 1.6;
  color: #344459;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.status {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 700;
}

.status.new {
  background: rgba(17, 38, 61, 0.1);
  color: #20304a;
}

.status.follow-up,
.status.follow-up {
  background: rgba(193, 101, 47, 0.12);
  color: #b55f2e;
}

.status.qualified {
  background: rgba(44, 143, 87, 0.12);
  color: #1a7d44;
}

.mini-button {
  border: none;
  background: #1b2a41;
  color: #fff;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
}
</style>
