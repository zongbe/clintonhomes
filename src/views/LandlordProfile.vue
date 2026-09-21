<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isSignedIn = computed(() => {
  return localStorage.getItem('ch_user_authenticated') === 'true' || localStorage.getItem('ch_admin_authenticated') === 'true'
})

function goBack() {
  if (window.history.length > 1) {
    router.back()
    return
  }

  router.push('/buy')
}

const landlords = {
  'clinton-homes': {
    name: 'Olanrewaju Gideon',
    tagline: 'Premium homes and trusted property management across Lagos.',
    rating: 4.9,
    reviews: 128,
    totalProperties: 24,
    rentedOut: 18,
    activeListings: 6,
    whatsapp: '+234 801 234 5678',
    whatsappLink: 'https://wa.me/2348012345678',
    email: 'gideon11@gmail.com',
    instagram: '@ola24',
    address: '12 Bode Thomas, Surulere, Lagos, Nigeria',
    about: 'Clinton Homes helps landlords and tenants find quality homes with transparent processes, strong communication, and dependable support from viewing to move-in.',
  },
  'clinton-homes-victoria-island': {
    name: 'Aisha Okafor',
    tagline: 'Luxury waterfront living and premium residence management in Lagos.',
    rating: 4.9,
    reviews: 112,
    totalProperties: 20,
    rentedOut: 15,
    activeListings: 5,
    whatsapp: '+234 806 456 1098',
    whatsappLink: 'https://wa.me/2348064561098',
    email: 'aisha.okafor@gmail.com',
    instagram: '@aishasuites',
    address: 'Victoria Island, Lagos, Nigeria',
    about: 'Aisha manages a premium portfolio focused on elegant homes, smooth tenant experiences, and clear guidance for buyers and landlords alike.',
  },
  'clinton-homes-wuse': {
    name: 'Musa Bello',
    tagline: 'Modern homes and strategic urban listings for Abuja buyers.',
    rating: 4.8,
    reviews: 89,
    totalProperties: 17,
    rentedOut: 12,
    activeListings: 4,
    whatsapp: '+234 803 222 9988',
    whatsappLink: 'https://wa.me/2348032229988',
    email: 'musa.bello@gmail.com',
    instagram: '@musabello',
    address: 'Wuse, Abuja, Nigeria',
    about: 'Musa brings a practical, client-focused approach to city homes, helping buyers navigate listings with confidence and ease.',
  },
  'clinton-homes-abeokuta': {
    name: 'Tosin Adeyemi',
    tagline: 'Comfortable family homes and well-managed properties in Ogun state.',
    rating: 4.7,
    reviews: 74,
    totalProperties: 14,
    rentedOut: 10,
    activeListings: 3,
    whatsapp: '+234 812 768 2211',
    whatsappLink: 'https://wa.me/2348127682211',
    email: 'tosin.adeyemi@gmail.com',
    instagram: '@tosinhomes',
    address: 'Abeokuta, Ogun, Nigeria',
    about: 'Tosin focuses on spacious family homes and smooth landlord-tenant relationships with a strong emphasis on transparency and care.',
  },
  'clinton-homes-gwarinpa': {
    name: 'Ifeoma Okafor',
    tagline: 'Thoughtful urban homes designed around family life and everyday ease.',
    rating: 4.8,
    reviews: 82,
    totalProperties: 15,
    rentedOut: 11,
    activeListings: 4,
    whatsapp: '+234 812 445 6739',
    whatsappLink: 'https://wa.me/2348124456739',
    email: 'ifeoma.okafor@gmail.com',
    instagram: '@ifeomahomes',
    address: 'Gwarinpa, Abuja, Nigeria',
    about: 'Ifeoma manages homes with warmth and attention to detail, supporting families and investors with reliable property guidance.',
  },
  'clinton-homes-ikeja': {
    name: 'Daniel Nwachukwu',
    tagline: 'Refined homes and flexible living spaces in central Lagos.',
    rating: 4.9,
    reviews: 101,
    totalProperties: 19,
    rentedOut: 14,
    activeListings: 5,
    whatsapp: '+234 808 731 4672',
    whatsappLink: 'https://wa.me/2348087314672',
    email: 'daniel.nwachukwu@gmail.com',
    instagram: '@danielnwachukwu',
    address: 'Ikeja, Lagos, Nigeria',
    about: 'Daniel specialises in practical urban living, helping clients discover homes that balance comfort, convenience, and long-term value.',
  },
  'clinton-homes-festac': {
    name: 'Kehinde Ajayi',
    tagline: 'Bright, accessible family homes in Lagos for modern everyday living.',
    rating: 4.7,
    reviews: 68,
    totalProperties: 13,
    rentedOut: 9,
    activeListings: 4,
    whatsapp: '+234 815 611 9034',
    whatsappLink: 'https://wa.me/2348156119034',
    email: 'kehinde.ajayi@gmail.com',
    instagram: '@kehindeajayi',
    address: 'Festac, Lagos, Nigeria',
    about: 'Kehinde helps families and professionals find well-located, comfortable homes with a process that is clear and supportive from start to finish.',
  },
  'clinton-homes-lekki': {
    name: 'Hammed Yahyah',
    tagline: 'Luxury residences and family homes in Lagos prime locations.',
    rating: 4.8,
    reviews: 96,
    totalProperties: 18,
    rentedOut: 14,
    activeListings: 4,
    whatsapp: '+234 803 456 7890',
    whatsappLink: 'https://wa.me/2348034567890',
    email: 'hamyah1@gmail.com',
    instagram: '@yahyah12',
    address: 'Lekki Phase 1, Lagos, Nigeria',
    about: 'Our Lekki portfolio focuses on modern homes for families and professionals seeking secure, elegant spaces in a growing part of the city.',
  },
  'clinton-homes-ikoyi': {
    name: 'Gabriel CHris',
    tagline: 'Curated listings for refined urban living and premium rentals.',
    rating: 5.0,
    reviews: 84,
    totalProperties: 12,
    rentedOut: 9,
    activeListings: 3,
    whatsapp: '+234 809 876 5432',
    whatsappLink: 'https://wa.me/2348098765432',
    email: 'chris@gmail.com',
    instagram: '@chrisgab56',
    address: 'Ikoyi, Lagos, Nigeria',
    about: 'We manage a premium collection of homes built for convenience, luxury, and confidence for both landlords and tenants.',
  },
  'clinton-homes-yaba': {
    name: 'Chukuemeka Promisess',
    tagline: 'Accessible, modern homes in fast-growing Lagos communities.',
    rating: 4.7,
    reviews: 71,
    totalProperties: 16,
    rentedOut: 11,
    activeListings: 5,
    whatsapp: '+234 815 112 3344',
    whatsappLink: 'https://wa.me/2348151123344',
    email: 'promiseemeks@gmail.com',
    instagram: '@promise667',
    address: 'Yaba, Lagos, Nigeria',
    about: 'Our Yaba portfolio balances practical urban living with quality homes and responsive support for landlords and tenants alike.',
  },
}

const landlord = computed(() => landlords[route.params.slug] || landlords['clinton-homes'])
</script>

<template>
  <div class="landlord-page">
    <Nav />

    <main class="landlord-shell">
      <button class="back-link back-button" type="button" @click="goBack">← Back to properties</button>

      <section class="profile-top">
        <div class="profile-card">
          <div class="avatar">{{ landlord.name.charAt(0) }}</div>
          <div>
            <p class="eyebrow">Landlord profile</p>
            <h1>{{ landlord.name }}</h1>
            <p class="tagline">{{ landlord.tagline }}</p>
          </div>
        </div>

        <div class="rating-card">
          <div class="stars">★★★★★</div>
          <strong>{{ landlord.rating.toFixed(1) }}</strong>
          <span>{{ landlord.reviews }} reviews</span>
        </div>
      </section>

      <section class="stats-grid">
        <article class="stat-box">
          <span>Houses on website</span>
          <strong>{{ landlord.totalProperties }}</strong>
        </article>
        <article class="stat-box">
          <span>Rented out</span>
          <strong>{{ landlord.rentedOut }}</strong>
        </article>
        <article class="stat-box">
          <span>Active listings</span>
          <strong>{{ landlord.activeListings }}</strong>
        </article>
        <article class="stat-box">
          <span>Average rating</span>
          <strong>{{ landlord.rating.toFixed(1) }}/5</strong>
        </article>
      </section>

      <section class="contact-layout">
        <div class="info-card">
          <h2>Contact information</h2>

          <div class="contact-item whatsapp-item">
            <span class="icon whatsapp">WA</span>
            <div>
              <small>WhatsApp</small>
              <a :href="landlord.whatsappLink" target="_blank" rel="noreferrer">{{ landlord.whatsapp }}</a>
            </div>
          </div>

          <div class="contact-item">
            <span class="icon email">@</span>
            <div>
              <small>Email</small>
              <a :href="`mailto:${landlord.email}`">{{ landlord.email }}</a>
            </div>
          </div>

          <div class="contact-item">
            <span class="icon social">in</span>
            <div>
              <small>Instagram</small>
              <p>{{ landlord.instagram }}</p>
            </div>
          </div>

          <div class="contact-item">
            <span class="icon address">⌂</span>
            <div>
              <small>Address</small>
              <p>{{ landlord.address }}</p>
            </div>
          </div>
        </div>

        <div class="info-card">
          <h2>About the landlord</h2>
          <p>{{ landlord.about }}</p>

          <div class="badge-row">
            <span>Trusted</span>
            <span>Verified</span>
            <span>Professional</span>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap');

:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  background: #f7f4ec;
  color: #1b2a41;
  font-family: 'DM Sans', sans-serif;
}

.landlord-page {
  background: #f7f4ec;
}

.landlord-shell {
  width: min(1180px, 88%);
  margin: 0 auto;
  padding: 48px 0 100px;
}

.back-link {
  color: #69737d;
  font-size: 1.35rem;
  text-decoration: none;
}
.back-button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
}
.back-link:hover {
  color: #c1652f;
}

.profile-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 32px;
  gap: 24px;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 22px;
  flex: 1;
}

.avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c1652f, #e0a100);
  color: white;
  font-family: 'Fraunces', serif;
  font-size: 2rem;
  display: grid;
  place-items: center;
  box-shadow: 0 18px 35px rgba(130, 82, 35, 0.18);
}

.eyebrow {
  margin: 0 0 10px;
  color: #c1652f;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: 'Fraunces', serif;
  font-weight: 500;
}

h1 {
  font-size: clamp(2.6rem, 5vw, 4.6rem);
  line-height: 1;
}

.tagline {
  margin: 10px 0 0;
  color: #4a5866;
  font-size: 1.05rem;
}

.rating-card {
  min-width: 170px;
  background: #fffdf9;
  border: 1px solid rgba(193, 101, 47, 0.12);
  border-radius: 18px;
  padding: 18px 20px;
  text-align: center;
  box-shadow: 0 12px 28px rgba(24, 29, 31, 0.04);
}

.stars {
  color: #f5b342;
  letter-spacing: 0.18em;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 6px;
}

.rating-card strong {
  display: block;
  font-size: 2rem;
  font-family: 'Fraunces', serif;
}

.rating-card span {
  color: #5d6670;
  font-size: 0.9rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 32px;
}

.stat-box {
  background: #fffdf9;
  border-radius: 18px;
  padding: 22px 20px;
  border: 1px solid rgba(30, 42, 52, 0.05);
  box-shadow: 0 12px 24px rgba(15, 21, 28, 0.04);
}

.stat-box span {
  display: block;
  color: #5d6670;
  margin-bottom: 12px;
}

.stat-box strong {
  display: block;
  font-family: 'Fraunces', serif;
  font-size: 2.1rem;
  color: #1b2a41;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
}

.info-card {
  background: #fffdf9;
  border-radius: 22px;
  padding: 28px;
  border: 1px solid rgba(30, 42, 52, 0.06);
  box-shadow: 0 14px 28px rgba(15, 21, 28, 0.04);
}

.info-card h2 {
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(27, 42, 65, 0.08);
}

.contact-item:last-child {
  border-bottom: 0;
}

.icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.whatsapp { background: #25d366; }
.email { background: #c1652f; }
.social { background: #dd2a7b; }
.address { background: #2d7ff9; }

.contact-item small {
  display: block;
  color: #677482;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-item a,
.contact-item p {
  margin: 0;
  color: #1b2a41;
  text-decoration: none;
  font-size: 1.02rem;
}

.info-card p {
  color: #4a5866;
  line-height: 1.7;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.badge-row span {
  background: rgba(193, 101, 47, 0.1);
  color: #c1652f;
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 600;
}

@media (max-width: 900px) {
  .profile-top,
  .contact-layout {
    grid-template-columns: 1fr;
    display: grid;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .profile-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
