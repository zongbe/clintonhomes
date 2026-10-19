<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="about-page">
    <Nav />

    <main class="about-content">
      <section class="about-hero">
        <p class="eyebrow">About Clinton Homes</p>
        <h1>A home for every chapter.</h1>
        <p class="intro">
          Clinton Homes helps people explore places to buy, rent, lease, or share,
          while giving property owners a way to present their listings.
        </p>
        <RouterLink to="/buy" class="primary-link">Explore properties</RouterLink>
      </section>

      <section class="about-details">
        <article class="detail-card">
          <h2>Find your next place</h2>
          <p>
            Browse homes and discover options for different needs, whether you are
            looking to buy, rent, lease, or find a co-living space.
          </p>
        </article>
        <article class="detail-card">
          <h2>Share a property</h2>
          <p>
            Property owners and advertisers can showcase their spaces to people
            searching for their next home.
          </p>
          <RouterLink to="/advertise" class="text-link">Learn about advertising</RouterLink>
        </article>
      </section>

      <section class="contact-callout">
        <div>
          <p class="eyebrow">Here to help</p>
          <h2>Have a question?</h2>
          <p>Visit our Help page to browse answers or send an enquiry to our team.</p>
        </div>
        <RouterLink to="/help#contact" class="primary-link">Contact us</RouterLink>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  background: #f7f4ec;
  color: #1b2a41;
  font-family: 'DM Sans', sans-serif;
}

.about-page {
  min-height: 100vh;
  background: #f7f4ec;
}

.about-content {
  width: min(1120px, 90%);
  margin: 0 auto;
  padding: 72px 0 20px;
}

.about-hero {
  max-width: 760px;
  padding-bottom: 64px;
}

.eyebrow {
  margin: 0 0 14px;
  color: #c1652f;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0;
  font-family: 'Fraunces', serif;
  font-weight: 500;
}

h1 {
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 1;
}

.intro {
  max-width: 680px;
  margin: 22px 0 28px;
  color: #586572;
  font-size: 1.1rem;
  line-height: 1.8;
}

.primary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 18px;
  background: #c1652f;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.primary-link:hover {
  background: #a95025;
  transform: translateY(-1px);
}

.about-details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.detail-card {
  padding: 28px;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  background: #fff;
}

.detail-card h2,
.contact-callout h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.detail-card p,
.contact-callout p:not(.eyebrow) {
  color: #586572;
  line-height: 1.8;
}

.text-link {
  color: #a95025;
  font-weight: 700;
  text-underline-offset: 3px;
}

.contact-callout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  padding: 30px;
  border-radius: 16px;
  background: #1b2a41;
  color: #fff;
}

.contact-callout p:not(.eyebrow) {
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.78);
}

@media (max-width: 700px) {
  .about-content {
    padding-top: 48px;
  }

  .about-details {
    grid-template-columns: 1fr;
  }

  .contact-callout {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px;
  }
}
</style>
