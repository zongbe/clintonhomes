<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function logout() {
  localStorage.removeItem('ch_admin_authenticated')
  localStorage.removeItem('ch_user_authenticated')
  router.push('/login')
}

const navItems = [
  { label: 'Dashboard', to: '/landlord/dashboard' },
  { label: 'My Listings', to: '/landlord/properties' },
  { label: 'Inquiries', to: '/landlord/inquiries' },
  { label: 'Performance', to: '/landlord/performance' },
]

const pageTitle = computed(() => route.meta.title || 'Dashboard')
</script>

<template>
  <div class="landlord-shell">
    <aside class="landlord-sidebar">
      <div class="brand-area">
        <div class="brand-mark">CH</div>
        <div>
          <p class="brand-name">Clinton Homes</p>
          <span class="brand-role">Landlord portal</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-item"
          :class="{ active: route.path === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="user-panel">
        <div class="avatar">A</div>
        <div>
          <strong>Aisha Okafor</strong>
          <small>Landlord</small>
        </div>
      </div>
    </aside>

    <main class="landlord-main">
      <header class="landlord-topbar">
        <div>
          <p class="eyebrow">Landlord dashboard</p>
          <h1>{{ pageTitle }}</h1>
        </div>

        <div class="topbar-actions">
          <button class="ghost-button" type="button">Add listing</button>
          <button class="ghost-button danger" type="button" @click="logout">Logout</button>
        </div>
      </header>

      <slot />
    </main>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  background: #f4f1eb;
  font-family: 'DM Sans', sans-serif;
}

* {
  box-sizing: border-box;
}

.landlord-shell {
  display: flex;
  min-height: 100vh;
  background: #f4f1eb;
  color: #1b2a41;
}

.landlord-sidebar {
  width: 260px;
  background: #11263d;
  color: #fff;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand-area {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #d97b3b, #c1652f);
  font-weight: 800;
}

.brand-name {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.brand-role {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 22px;
}

.nav-item {
  display: block;
  padding: 12px 14px;
  border-radius: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.82);
  font-weight: 600;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.user-panel {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 10px;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #d97b3b, #d15a2a);
  color: #fff;
  font-weight: 800;
}

.user-panel strong,
.user-panel small {
  display: block;
}

.user-panel small {
  color: rgba(255, 255, 255, 0.7);
}

.landlord-main {
  flex: 1;
  padding: 28px;
}

.landlord-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #c1652f;
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.landlord-topbar h1 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.topbar-actions {
  display: flex;
  gap: 10px;
}

.ghost-button {
  border: 1px solid #d5d8db;
  background: #fff;
  color: #1b2a41;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

.ghost-button.danger {
  border-color: #e7c1c1;
  background: #fff4f4;
  color: #9d2c2c;
}

@media (max-width: 900px) {
  .landlord-shell {
    flex-direction: column;
  }

  .landlord-sidebar {
    width: 100%;
  }

  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
