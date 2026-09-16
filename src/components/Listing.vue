<script setup>
</script>

<template>
  <section class="listing-types">
    <div class="listing-types__intro">
      <span class="eyebrow">Every listing is verified</span>
      <h2>However you want to live, Clinton Homes has a door for it.</h2>
    </div>

    <div class="listing-types__grid">
      <!-- Buy -->
      <article class="card">
        <span class="stamp" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="icon icon--buy" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <circle cx="18" cy="18" r="7" stroke="currentColor" stroke-width="2.2"/>
            <path d="M23 23 L38 38" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M32 32 L36 28" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M35 35 L39 31" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>Buy</h3>
        <p>Outright sale and pre-sale homes, checked and cleared before they're ever listed.</p>
        <router-link class="cta" to="/buy">Browse homes for sale</router-link>
      </article>

      <!-- Lease -->
      <article class="card">
        <span class="stamp" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="icon icon--lease" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <rect x="13" y="10" width="18" height="28" rx="2" stroke="currentColor" stroke-width="2.2"/>
            <path d="M18 17h8M18 23h8M18 29h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>Lease</h3>
        <p>Annual and long-term rentals, with the terms laid out plainly before you tour.</p>
        <router-link class="cta" to="/lease">Browse homes for lease</router-link>
      </article>

      <!-- Sell -->
<article class="card">
  <span class="stamp" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  <div class="icon icon--sell" aria-hidden="true">
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M10 24 24 12l14 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 22v14h20V22" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 36v-7h4v7" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
      <circle cx="33" cy="16" r="6" fill="#f7f4ec" stroke="currentColor" stroke-width="2"/>
      <path d="M31 16h4M33 14v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  </div>
  <h3>Sell</h3>
  <p>List your property with a valuation, verified buyers only, and no guesswork on pricing.</p>
  <router-link class="cta" to="/sell">Start your listing</router-link>
</article>

      <!-- Co-living -->
      <article class="card">
        <span class="stamp" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5 9.5 17 19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="icon icon--coliving" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <circle cx="18" cy="16" r="4.5" stroke="currentColor" stroke-width="2.2"/>
            <path d="M11 32c0-5 3-8.5 7-8.5s7 3.5 7 8.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="31" cy="16" r="4.5" stroke="currentColor" stroke-width="2.2"/>
            <path d="M24 32c0-5 3-8.5 7-8.5s7 3.5 7 8.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>Co-living</h3>
        <p>"Room shares and flatmate matches, where house rules are negotiated collectively by all mates."</p>
        <router-link class="cta" to="/coliving">Browse co-living homes</router-link>
      </article>
    </div>
  </section>
</template>



<style scoped>
.listing-types {
  --ink: #1B2A41;
  --paper: #f7f4ec;
  --card: #ffffff;
  --sage: #e4ebe0;
  --gold: #b9812f;
  --line: #d9d3c2;

  background: var(--paper);
  color: var(--ink);
  padding: 72px 24px;
  font-family: 'IBM Plex Sans', 'Segoe UI', sans-serif;
}

.listing-types__intro {
  max-width: 640px;
  margin: 0 auto 44px;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 600;
  margin-bottom: 14px;
}

.listing-types__intro h2 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  line-height: 1.25;
  margin: 0;
}

.listing-types__grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  position: relative;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 30px 24px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.stamp {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid var(--gold);
  color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
}
.stamp svg { width: 15px; height: 15px; }

.icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: var(--sage);
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.icon svg { width: 30px; height: 30px; }

.card h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0 0 8px;
}

.card p {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #4b5147;
  margin: 0 0 20px;
  flex-grow: 1;
}

.cta {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--ink);
  text-decoration: none;
  border: 1px solid var(--ink);
  border-radius: 999px;
  padding: 10px 18px;
}

.cta:hover,
.cta:focus-visible {
  background: var(--ink);
  color: var(--paper);
}

.cta:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}

@media (max-width: 980px) {
  .listing-types__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .listing-types__grid {
    grid-template-columns: 1fr;
  }
}
</style>