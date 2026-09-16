<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchLocation = ref('')

function searchProperties() {
  const location = searchLocation.value.trim()

  router.push({
    path: '/buy',
    query: location ? { location } : {},
  })
}
</script>

<template>
<section class="hero">
    <div class="hero_content">
        <h1>Finding a Safe Haven for<br>  You and Your Family</h1>
        <p>Verified listings. Trusted homes. Zero stress</p>
    </div>
    <div class="search_center_wrapper">
     <form class="search_bar" @submit.prevent="searchProperties">
       <input v-model="searchLocation" type="search" placeholder="Enter an Address, City, State, or ZIP Code" id="search_input"/>
       <button id="search_button" type="submit" aria-label="Search properties">
            <i class="fas fa-search fa-lg"></i>
        </button>
       </form>
    </div>  

</section>
</template>

<style scoped>
.hero {
  background-image: url('@/assets/images/family.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 45px;
  margin-right: 1rem;
  margin-left: 1rem;
  cursor: pointer;
}

.hero_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
}

h1 {
  color: white;
  font-size: 3.7rem;
  text-align: center;
  font-family: 'Fraunces', serif;
  text-transform: uppercase;
  text-shadow: 0 0 7px black;
  margin-bottom: 0.5rem;
}

p {
  color: white;
  font-size: 2.4rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  text-shadow: 0 0 18px black;
  letter-spacing: 3px;
}

.search_center_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}

.search_bar {
  margin-top: 7px;
  display: flex;
  width: 45%;
  background: white;
  border-radius: 27px;
  overflow: hidden;
}

.search_bar input {
  flex: 1;
  border: none;
  background: white;
  padding: 4px 18px;
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  border-radius: 27px;
  outline: none;
}

.search_bar input::placeholder {
  color: grey;
  font-size: 17px;
}

.search_bar button {
  border: none;
  background: #c1652f;
  padding: 25px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
}

.search_bar button:hover {
  transform: scale(1.1);
}
</style>
