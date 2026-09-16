<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

const benefits = [
  'Reach serious buyers in Lagos',
  'Premium property showcases',
  'Verified listings support',
  'Dedicated guidance from local specialists'
]

const pricing = [
  {
    name: 'Starter',
    price: '₦45,000',
    details: ['Basic listing', 'Up to 5 photos', 'Standard placement']
  },
  {
    name: 'Premium',
    price: '₦70,000',
    details: ['Featured listing', 'Priority placement', 'Agent assistance']
  },
  {
    name: 'Signature',
    price: '₦150,000',
    details: ['Top listing exposure', 'Enhanced promotion', 'Marketing support']
  }
]
</script>

<template>
  <div class="advertise-page">
    <Nav />

    <header class="advertise-hero">
      <div class="hero-copy">
        <p class="eyebrow">Growth opportunities</p>
        <h1>Advertise your property with Clinton Homes</h1>
        <p class="hero-text">
          List your space with a trusted real-estate partner and connect with buyers and renters who are ready to act.
        </p>

        <div class="hero-actions">
          <a href="#advertise-form" class="primary-button">List your property</a>
          <router-link to="/buy" class="secondary-button explore-button">Explore homes</router-link>
        </div>
      </div>

      <div class="hero-panel">
        <div class="stat-block">
          <strong>500+</strong>
          <span>Homes listed</span>
        </div>
        <div class="stat-block">
          <strong>24/7</strong>
          <span>Support access</span>
        </div>
        <div class="stat-block">
          <strong>98%</strong>
          <span>Client satisfaction</span>
        </div>
      </div>
    </header>

    <main class="advertise-content">
      <section class="feature-grid">
        <article class="info-card" v-for="benefit in benefits" :key="benefit">
          <p class="card-label">Why list with us</p>
          <h2>
            {{
              benefit === 'Reach serious buyers in Lagos' ? 'Serious buyers' :
              benefit === 'Premium property showcases' ? 'Premium showcases' :
              benefit === 'Verified listings support' ? 'Verified listings' :
              benefit === 'Dedicated guidance from local specialists' ? 'Dedicated guidance' :
              'Greater visibility'
            }}
          </h2>
          <p>{{ benefit }}</p>
        </article>
      </section>

      <section class="two-column-layout">
        <div class="panel">
          <p class="eyebrow">What to expect</p>
          <h2>An easy way to advertise successfully</h2>

          <div class="faq-list">
            <div class="faq-item">
              <h3>How do I start?</h3>
              <p>Share your property details and photos, and our team will guide you through the listing flow.</p>
            </div>
            <div class="faq-item">
              <h3>How long does approval take?</h3>
              <p>Most listings go live within 24 to 48 hours after we receive the final details and images.</p>
            </div>
            <div class="faq-item">
              <h3>Can I advertise without an agent?</h3>
              <p>Absolutely. Owners can submit their property directly and still gain premium exposure.</p>
            </div>
          </div>
        </div>

        <div class="panel contact-panel">
          <p class="eyebrow">Start advertising today</p>
          <h2>Submit your property</h2>

          <form class="inline-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Subject
              <input type="text" placeholder="Property listing enquiry" />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Share your property details and preferred listing package." />
            </label>
            <button type="submit" class="primary-button full-width">Request listing</button>
          </form>
        </div>
      </section>

      <section class="pricing-section" id="advertise-form">
        <div class="section-heading">
          <p class="eyebrow">Flexible packages</p>
          <h2>Choose the right listing package</h2>
        </div>

        <div class="pricing-grid">
          <article class="pricing-card" v-for="plan in pricing" :key="plan.name">
            <p class="plan-name">{{ plan.name }}</p>
            <h3>{{ plan.price }}</h3>
            <ul>
              <li v-for="detail in plan.details" :key="detail">{{ detail }}</li>
            </ul>
            <button type="button" class="secondary-button choose-plan-button">Choose plan</button>
          </article>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap');

:global(*) { box-sizing: border-box; }
:global(body) {
  margin: 0;
  background: #f7f4ec;
  color: #1b2a41;
  font-family: 'DM Sans', sans-serif;
}

.advertise-page {
  background: #f7f4ec;
}

.advertise-hero {
  width: min(1180px, 90%);
  margin: 0 auto;
  padding: 72px 0 60px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 36px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 14px;
  color: #c1652f;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1, h2, h3 {
  margin: 0;
  font-family: 'Fraunces', serif;
  font-weight: 500;
}

h1 {
  font-size: clamp(2.6rem, 6vw, 5.2rem);
  line-height: 0.98;
  max-width: 680px;
}

.hero-text {
  max-width: 620px;
  margin: 22px 0 0;
  color: #586572;
  font-size: 1.06rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0.9rem 1.3rem;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.primary-button {
  background: #c1652f;
  color: white;
  box-shadow: 0 12px 20px rgba(193, 101, 47, 0.2);
}

.secondary-button {
  background: transparent;
  color: #1b2a41;
  border: 1px solid rgba(27, 42, 65, 0.2);
}

.primary-button:hover,
.secondary-button:hover,
.explore-button:hover,
.explore-button:focus-visible {
  transform: translateY(-1px);
}

.explore-button:hover,
.explore-button:focus-visible {
  background: #c1652f;
  border-color: #c1652f;
  color: white;
  box-shadow: 0 12px 22px rgba(193, 101, 47, 0.18);
}

.hero-panel {
  background: linear-gradient(135deg, #1b2a41, #2d425a);
  color: white;
  border-radius: 20px;
  padding: 28px;
  display: grid;
  gap: 16px;
}

.stat-block {
  display: grid;
  gap: 6px;
  padding: 18px 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
}

.stat-block strong {
  font-size: 2rem;
  font-family: 'Fraunces', serif;
  color: #f0b58c;
}

.stat-block span {
  color: #d8e0e6;
}

.advertise-content {
  width: min(1180px, 90%);
  margin: 0 auto;
  padding-bottom: 80px;
}

.feature-grid,
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.info-card,
.pricing-card,
.panel {
  background: white;
  border: 1px solid #e5e0d8;
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 10px 26px rgba(22, 34, 48, 0.04);
}

.info-card {
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.info-card:hover,
.info-card:focus-within {
  transform: translateY(-4px);
  border-color: #c1652f;
  box-shadow: 0 18px 30px rgba(193, 101, 47, 0.12);
}

.card-label,
.plan-name {
  margin: 0 0 12px;
  color: #c1652f;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.info-card h2 {
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  margin-bottom: 12px;
}

.info-card p,
.faq-item p,
.pricing-card li {
  color: #586572;
  line-height: 1.8;
}

.two-column-layout {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
}

.panel h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 22px;
}

.faq-list {
  display: grid;
  gap: 18px;
}

.faq-item {
  padding-bottom: 18px;
  border-bottom: 1px solid #ece6dd;
}

.faq-item h3 {
  margin-bottom: 8px;
  font-size: 1.2rem;
}

.contact-panel {
  background: #1b2a41;
  color: #fffaf0;
}

.contact-panel .eyebrow {
  color: #f0b58c;
}

.inline-form {
  display: grid;
  gap: 16px;
}

.inline-form label {
  display: grid;
  gap: 7px;
  color: #d8e0e6;
  font-size: 0.8rem;
  font-weight: 700;
}

.inline-form input,
.inline-form textarea {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: white;
  padding: 0.9rem 0.95rem;
  font: inherit;
  resize: vertical;
}

.inline-form input::placeholder,
.inline-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.65);
}

.full-width {
  width: 100%;
  border: 0;
  cursor: pointer;
}

.pricing-section {
  margin-top: 52px;
}

.section-heading {
  margin-bottom: 22px;
}

.pricing-card {
  display: grid;
  gap: 14px;
}

.choose-plan-button {
  cursor: pointer;
  transition: all 0.25s ease;
}

.choose-plan-button:hover,
.choose-plan-button:focus-visible {
  background: #c1652f;
  border-color: #c1652f;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(193, 101, 47, 0.2);
}

.choose-plan-button:active {
  background: #a95522;
  border-color: #a95522;
  transform: translateY(0);
}

.pricing-card h3 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #1b2a41;
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.pricing-card li::before {
  content: '✓';
  color: #c1652f;
  margin-right: 8px;
  font-weight: 700;
}

@media (max-width: 900px) {
  .advertise-hero,
  .two-column-layout,
  .feature-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .advertise-hero {
    padding-top: 42px;
  }
}
</style>
