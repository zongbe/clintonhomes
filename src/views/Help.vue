<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

const helpTopics = [
  {
    title: 'Buying a home',
    text: 'Learn how to compare homes, arrange viewings, and make a confident offer.'
  },
  {
    title: 'Renting with ease',
    text: 'Find clear information about deposits, leasing terms, and move-in timelines.'
  },
  {
    title: 'Selling your home',
    text: 'Understand pricing, marketing, and the steps to move from listing to closing.'
  }
]

const faqs = [
  {
    question: 'How do I book a viewing?',
    answer: 'Choose any property, open the listing page, and send an enquiry. Our team will contact you with viewing details.'
  },
  {
    question: 'Do you help with both buying and renting?',
    answer: 'Yes. We support home buyers, renters, property sellers, and developers seeking visibility.'
  },
  {
    question: 'How long does it take to list a property?',
    answer: 'Most listings go live within 24 to 48 hours after submission and photo approval.'
  },
  {
    question: 'Can I advertise a property without an agent?',
    answer: 'Absolutely. Owners can submit a property directly, and we will guide you through the listing process.'
  }
]
</script>

<template>
  <div class="help-page">
    <Nav />

    <header class="help-hero">
      <div class="hero-copy">
        <p class="eyebrow">Support</p>
        <h1>Need help finding the right home?</h1>
        <p class="hero-text">
          Browse a few answers, reach our team, and get the guidance you need before your next property move.
        </p>

        <div class="hero-actions">
          <a href="#faq" class="primary-button">Browse FAQs</a>
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

    <main class="help-content">
      <section class="feature-grid">
        <article class="info-card" v-for="topic in helpTopics" :key="topic.title">
          <p class="card-label">Guidance</p>
          <h2>{{ topic.title }}</h2>
          <p>{{ topic.text }}</p>
        </article>
      </section>

      <section class="two-column-layout" id="faq">
        <div class="panel">
          <p class="eyebrow">Frequently asked questions</p>
          <h2>Answers to common questions</h2>

          <div class="faq-list">
            <div class="faq-item" v-for="item in faqs" :key="item.question">
              <h3>{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>

        <div class="panel contact-panel">
          <p class="eyebrow">Need direct help?</p>
          <h2>Talk to our team</h2>

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
              <input type="text" placeholder="How can we help?" />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Tell us what you need help with." />
            </label>
            <button type="submit" class="primary-button full-width">Send enquiry</button>
          </form>
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

.help-page {
  background: #f7f4ec;
}

.help-hero {
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

.help-content {
  width: min(1180px, 90%);
  margin: 0 auto;
  padding-bottom: 80px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.info-card,
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

.card-label {
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
.faq-item p {
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

@media (max-width: 900px) {
  .help-hero,
  .two-column-layout,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .help-hero {
    padding-top: 42px;
  }
}
</style>
