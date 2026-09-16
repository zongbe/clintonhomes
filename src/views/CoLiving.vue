<script setup>
import { ref } from 'vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

const submitted = ref(false)

function submitCoLivingRequest() {
  submitted.value = true
}
</script>

<template>
  <div class="coliving-page">
    <Nav />

    <main>
      <section class="coliving-hero">
        <div class="coliving-hero__copy">
          <p class="eyebrow">Live together, better</p>
          <h1>Find your ideal room share or co-living space.</h1>
          <p class="hero-text">
            Discover flexible shared homes with people who match your lifestyle, routine, and budget. We make it easier to find a home that feels good from the start.
          </p>
          <div class="hero-notes" aria-label="Co-living benefits">
            <span>Verified homes</span>
            <span>Shared lifestyle matching</span>
          </div>
        </div>

        <div class="coliving-hero__image">
          <img src="@/assets/images/Co-living-cover-image.webp" alt="Shared room living arrangement" />
          <div class="image-caption"><strong>More connection, less compromise.</strong><span>Clinton Homes co-living</span></div>
        </div>
      </section>

      <section class="coliving-workspace" id="coliving-form">
        <div class="form-intro">
          <p class="eyebrow">Start your co-living search</p>
          <h2>Tell us the kind of home and household you want.</h2>
          <p>We help you match with shared homes and compatible housemates based on budget, location, lifestyle, and comfort.</p>

          <ol class="process-list">
            <li><span>01</span><div><strong>Choose your setup</strong><small>Private room, shared apartment, or house share.</small></div></li>
            <li><span>02</span><div><strong>Set your preferences</strong><small>Budget, move-in date, and living style.</small></div></li>
            <li><span>03</span><div><strong>Meet compatible matches</strong><small>We connect you with suitable co-living opportunities.</small></div></li>
          </ol>
        </div>

        <form class="listing-form" @submit.prevent="submitCoLivingRequest">
          <div v-if="submitted" class="success-message" role="status">
            <strong>Your co-living request has been received.</strong>
            <span>We’ll share suitable room-share and co-living options with you shortly.</span>
          </div>

          <template v-else>
            <div class="form-section-heading"><span>01</span><div><h3>Living preferences</h3><p>Tell us about your ideal setup.</p></div></div>
            <div class="field-grid">
              <label>Home type<select required>
                <option value="" disabled selected>Select a setup</option>
                <option>Private room</option>
                <option>Shared apartment</option>
                <option>House share</option>
                <option>Student room</option>
              </select></label>
              <label>Preferred budget<select required>
                <option value="" disabled selected>Choose budget</option>
                <option>₦50k - ₦100k</option>
                <option>₦100k - ₦200k</option>
                <option>₦200k - ₦400k</option>
                <option>₦400k+</option>
              </select></label>
              <label class="wide-field">Preferred location<input required type="text" placeholder="Lekki, Yaba, Surulere..." /></label>
              <label>Move-in date<input required type="date" /></label>
              <label>Household style<select>
                <option value="" selected>Choose your vibe</option>
                <option>Quiet and focused</option>
                <option>Social and active</option>
                <option>Mixed lifestyle</option>
              </select></label>
            </div>

            <div class="form-section-heading"><span>02</span><div><h3>About you</h3><p>Who should we contact?</p></div></div>
            <div class="field-grid">
              <label>Your name<input required type="text" placeholder="Full name" /></label>
              <label>Phone number<input required type="tel" placeholder="080 0000 0000" /></label>
              <label class="wide-field">Email address<input required type="email" placeholder="you@example.com" /></label>
            </div>

            <div class="form-section-heading"><span>03</span><div><h3>Ideal match</h3><p>Tell us more about your lifestyle.</p></div></div>
            <label class="wide-field description-field">What kind of housemate or home are you looking for?<textarea rows="4" placeholder="Share your routine, preferred environment, and what matters most in a shared living arrangement."></textarea></label>

            <button class="submit-button" type="submit">Find my co-living options <span aria-hidden="true">→</span></button>
            <p class="privacy-note">Your details are private and used only to match you with suitable co-living spaces.</p>
          </template>
        </form>
      </section>

      <section class="coliving-footer-note">
        <p class="eyebrow">A home that fits your rhythm</p>
        <h2>Shared living should feel easy, not stressful.</h2>
        <router-link to="/help">Have a question? Visit our help centre <span aria-hidden="true">↗</span></router-link>
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
  background: #f5f2ed;
  color: #1b2a41;
  font-family: 'DM Sans', sans-serif;
}

.coliving-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #faf7f1 0%, #f4efe9 100%);
}

.coliving-hero,
.coliving-workspace,
.coliving-footer-note {
  width: min(1180px, 90%);
  margin: 0 auto;
}

.coliving-hero {
  display: grid;
  grid-template-columns: 0.96fr 1.04fr;
  gap: clamp(24px, 4vw, 52px);
  align-items: center;
  padding: 56px 0 72px;
}

.coliving-hero__copy {
  padding: 10px 0;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 18px;
  color: #7d5b4f;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
}

h1 {
  max-width: 540px;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.94;
  letter-spacing: -0.04em;
}

.hero-text {
  max-width: 460px;
  margin: 22px 0 28px;
  color: #5a5850;
  font-size: 1.04rem;
  line-height: 1.75;
}

.hero-notes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  color: #1b2a41;
  font-size: 0.8rem;
  font-weight: 700;
}

.hero-notes span {
  display: inline-flex;
  align-items: center;
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(125, 91, 79, 0.14);
}

.hero-notes span::before {
  content: '✓';
  margin-right: 7px;
  color: #7d5b4f;
}

.coliving-hero__image {
  position: relative;
  min-height: 540px;
  overflow: hidden;
  border-radius: 28px 28px 28px 92px;
  box-shadow: 0 26px 58px rgba(98, 74, 56, 0.14);
  background: #e9dfd6;
}

.coliving-hero__image img {
  width: 100%;
  height: 100%;
  min-height: 540px;
  display: block;
  object-fit: cover;
}

.image-caption {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  display: grid;
  gap: 5px;
  padding: 18px 20px;
  background: rgba(38, 26, 20, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
  border-radius: 14px;
}

.image-caption strong {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.14rem;
  font-weight: 600;
}

.image-caption span {
  color: rgba(244, 236, 230, 0.9);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.coliving-workspace {
  display: grid;
  grid-template-columns: 0.74fr 1.26fr;
  gap: 52px;
  padding: 20px 0 72px;
  border-top: 1px solid rgba(125, 91, 79, 0.12);
}

.form-intro {
  padding-top: 12px;
}

.form-intro h2 {
  max-width: 360px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.form-intro > p:not(.eyebrow) {
  max-width: 340px;
  margin: 18px 0 28px;
  color: #5a5850;
  line-height: 1.7;
}

.process-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 18px;
}

.process-list li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 13px 14px;
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(125, 91, 79, 0.12);
  border-radius: 16px;
}

.process-list li > span,
.form-section-heading > span {
  color: #7d5b4f;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.process-list div {
  display: grid;
  gap: 4px;
}

.process-list small {
  color: #5a5850;
  line-height: 1.5;
}

.listing-form {
  padding: 30px 28px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(125, 91, 79, 0.12);
  border-radius: 22px;
  box-shadow: 0 18px 40px rgba(88, 73, 62, 0.08);
}

.form-section-heading {
  display: flex;
  gap: 16px;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(125, 91, 79, 0.12);
}

.form-section-heading:not(:first-child) {
  margin-top: 34px;
}

.form-section-heading div {
  display: grid;
  gap: 5px;
}

.form-section-heading h3 {
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.form-section-heading p {
  margin: 0;
  color: #5a5850;
  font-size: 0.82rem;
}

.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field-grid label,
.description-field {
  display: grid;
  gap: 7px;
  color: #1b2a41;
  font-size: 0.75rem;
  font-weight: 700;
}

.wide-field {
  grid-column: 1 / -1;
}

input,
select,
textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid rgba(125, 91, 79, 0.18);
  border-radius: 12px;
  background: #fffdfb;
  color: #1b2a41;
  font: inherit;
  font-weight: 400;
}

textarea {
  resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid rgba(125, 91, 79, 0.14);
  border-color: #7d5b4f;
}

.upload-box {
  min-height: 120px;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 8px;
  margin-bottom: 18px;
  border: 1px dashed rgba(125, 91, 79, 0.4);
  border-radius: 12px;
  background: linear-gradient(180deg, #fffdfb, #f1eae3);
  color: #1b2a41;
  text-align: center;
  cursor: pointer;
}

.upload-box input {
  position: absolute;
  opacity: 0;
  width: 1px;
}

.upload-icon {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #7d5b4f;
  border-radius: 50%;
  color: #7d5b4f;
  font-size: 1.3rem;
}

.upload-box small {
  color: #5a5850;
  font-weight: 400;
}

.submit-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  padding: 15px 18px;
  border: 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #7d5b4f, #5f433c);
  color: white;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 16px 28px rgba(125, 91, 79, 0.26);
}

.submit-button:hover {
  background: linear-gradient(135deg, #6d4d43, #523b36);
}

.submit-button span {
  font-size: 1.4rem;
}

.privacy-note {
  margin: 12px 0 0;
  color: #81776d;
  font-size: 0.72rem;
  text-align: center;
}

.success-message {
  display: grid;
  gap: 10px;
  min-height: 430px;
  place-content: center;
  text-align: center;
}

.success-message strong {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
}

.success-message span {
  color: #5a5850;
}

.coliving-footer-note {
  padding: 16px 0 88px;
  text-align: center;
}

.coliving-footer-note h2 {
  margin-bottom: 16px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.04em;
}

.coliving-footer-note a {
  color: #7d5b4f;
  font-weight: 700;
  text-decoration: none;
}

.coliving-footer-note a:hover {
  text-decoration: underline;
}

@media (max-width: 850px) {
  .coliving-hero,
  .coliving-workspace {
    grid-template-columns: 1fr;
  }

  .coliving-hero {
    padding-top: 36px;
  }

  .coliving-hero__image,
  .coliving-hero__image img {
    min-height: 360px;
  }

  .coliving-workspace {
    gap: 42px;
  }
}

@media (max-width: 520px) {
  .coliving-hero,
  .coliving-workspace,
  .coliving-footer-note {
    width: 88%;
  }

  .listing-form {
    padding: 20px 16px;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }

  .wide-field {
    grid-column: auto;
  }

  .submit-button {
    text-align: left;
    gap: 15px;
  }

  .image-caption {
    left: 12px;
    right: 12px;
    bottom: 12px;
  }
}
</style>
