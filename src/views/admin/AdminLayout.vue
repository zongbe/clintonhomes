<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import logo from '@/assets/images/logo6.png'

const route = useRoute()
const router = useRouter()

function logout() {
  localStorage.removeItem('ch_admin_authenticated')
  router.push('/login')
}

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard' },
  { label: 'Properties', to: '/admin/properties' },
  { label: 'Landlords', to: '/admin/landlords' },
  { label: 'Leads', to: '/admin/leads' },
  { label: 'Reports', to: '/admin/reports' },
]

const pageTitle = computed(() => route.meta.title || 'Dashboard')
</script>

<template>
  <div class="admin-shell">
    <aside class="admin-sidebar">
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

      <div class="brand-block">
        <div class="brand-stack">
          <img :src="logo" alt="Clinton Homes logo" class="brand-logo" />
          <div class="admin-user-tag">
            <span class="user-name">Johnson Favour</span>
            <span class="user-role">Admin</span>
          </div>
        </div>
      </div>
    </aside>

    <main class="admin-main">
      <header class="admin-topbar">
        <div>
          <p class="eyebrow">Admin console</p>
          <h1>{{ pageTitle }}</h1>
        </div>

        <div class="topbar-actions">
          <button class="ghost-button" type="button">Export summary</button>
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

.admin-shell {
  display: flex;
  min-height: 100vh;
  background: #f4f1eb;
  color: #1b2a41;
}

.admin-sidebar {
  width: 260px;
  background: #1b2a41;
  color: #fff;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand-block {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.brand-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.brand-logo {
  width: 190px;
  max-width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 12px 22px rgba(193, 101, 47, 0.2));
}

.admin-user-tag {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  text-align: center;
}

.user-name {
  color: rgba(255, 255, 255, 0.96);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.user-role {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: block;
  padding: 12px 14px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 600;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.admin-main {
  flex: 1;
  padding: 28px;
}

.admin-topbar {
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

.admin-topbar h1 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.topbar-actions {
  display: flex;
  gap: 10px;
  align-items: center;
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
  .admin-shell {
    flex-direction: column;
  }

  .admin-sidebar {
    width: 100%;
  }

  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
