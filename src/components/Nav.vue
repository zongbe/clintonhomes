<script setup>
</script>

<template>
  <nav class="navbar">
    <ul class="nav_links">
      <li><router-link to="/buy">Buy</router-link></li>
      <li><router-link to="/sell">Sell</router-link></li>
      <li><router-link to="/rent">Rent</router-link></li>
      <li><router-link to="/lease">Lease</router-link></li>
      <li><router-link to="/co-living">Co-Living</router-link></li>
    </ul>

    <router-link to="/" class="navbar_brand" aria-label="Clinton Homes home">
      <img src="@/assets/images/logo6.png" alt="Clinton Homes" class="logo" />
    </router-link>

    <div class="nav_actions">
      <router-link to="/advertise" class="advertise">Advertise</router-link>
      <router-link to="/help" class="help_link">Get Help</router-link>
      <router-link to="/login" class="btn_signup">Sign Up / Login</router-link>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.5rem;
  background: transparent;

  position: relative;
  top: 0;
  z-index: 20;
}

.nav_links {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: clamp(0.35rem, 1.3vw, 1.25rem);
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  font-family: 'Fraunces', serif;
  white-space: nowrap;
}

.nav_links a,
.nav_links li {
  text-decoration: none;
  color: black;
  padding: 7px 14px;
  transition: all 0.2s ease;
}

.nav_links a:hover {
  border-bottom: 2px solid #C1652F;
  transform: scale(1.05);
  color: #C1652F;
}

.nav_links a.router-link-active {
  color: #C1652F;
}

.navbar_brand {
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 75px;
  object-fit: contain;
  cursor: pointer;
  mix-blend-mode: multiply;
}

.nav_actions {
  display: flex;
  gap: clamp(0.35rem, 1.3vw, 1.25rem);
  align-items: center;
  justify-content: flex-end;
  justify-self: end;
  font-size: 1.25rem;
  font-family: 'Fraunces', serif;
  white-space: nowrap;
}

.help_link {
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  white-space: nowrap;
}

.help_link:hover {
  color: #C1652F;
  transform: scale(1.1);
  border-bottom: 2px solid #C1652F;
}

.advertise {
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  white-space: nowrap;
}

.advertise:hover {
  color: #C1652F;
  transform: scale(1.1);
  border-bottom: 2px solid #C1652F;
}

.btn_signup {
  text-decoration: none;
  background: #C1652F;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  white-space: nowrap;
  font-family: 'Fraunces', serif;
  cursor: pointer;
  transition: 0.3s ease;
}

.btn_signup:hover {
  transform: scale(1.1);
}

@media (max-width: 980px) {
  .navbar {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .nav_actions {
    justify-self: center;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
