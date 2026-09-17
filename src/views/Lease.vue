<script setup>
import { ref } from 'vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

const submitted = ref(false)

function submitLeaseRequest() {
  submitted.value = true
}
</script>

<template>
  <div class="lease-page">
    <Nav />
    <main>
      <section class="lease-workspace" id="lease-form">
        <aside class="form-intro">
          <p class="eyebrow">Start your enquiry</p>
          <h2>Let’s define the right lease.</h2>
          <p class="intro-text">The more we know about your plans, the more useful your shortlist will be.</p>
          <ol class="process-list">
            <li><span>01</span><div><strong>Set your requirements</strong><small>Home type, location, budget, and timing.</small></div></li>
            <li><span>02</span><div><strong>Review suitable options</strong><small>We connect you with homes and terms worth considering.</small></div></li>
            <li><span>03</span><div><strong>Move forward clearly</strong><small>Arrange viewings and make your next decision with confidence.</small></div></li>
          </ol>
          <div class="aside-note"><span>◆</span><p>Your details are handled privately and only used for your lease search.</p></div>
        </aside>

        <form class="listing-form" @submit.prevent="submitLeaseRequest">
          <div v-if="submitted" class="success-message" role="status">
            <span class="success-icon">✓</span>
            <strong>Your lease enquiry is on the way.</strong>
            <span>Our team will contact you with suitable homes and lease options shortly.</span>
            <button type="button" class="edit-button" @click="submitted = false">Edit enquiry</button>
          </div>

          <template v-else>
            <div class="form-header">
              <div><span class="form-kicker">Lease profile</span><h3>Tell us what you need</h3></div>
              <span class="required-note">All fields marked required</span>
            </div>

            <div class="form-section">
              <div class="section-label"><span>01</span><p>Property and terms</p></div>
              <div class="field-grid">
                <label>Property type<select required>
                  <option value="" disabled selected>Select a property type</option>
                  <option>Apartment</option><option>Townhouse</option><option>Duplex</option><option>Studio</option><option>Office</option>
                </select></label>
                <label>Lease duration<select required>
                  <option value="" disabled selected>Choose lease term</option>
                  <option>6 months</option><option>1 year</option><option>2 years</option><option>Flexible</option>
                </select></label>
                <label class="wide-field">Preferred location<input required type="text" placeholder="Lekki, Ikeja, Surulere..." /></label>
                <label>Monthly budget<input required type="text" inputmode="decimal" placeholder="₦ Enter your budget" /></label>
                <label>Preferred move-in date<input required type="date" /></label>
              </div>
            </div>

            <div class="form-section">
              <div class="section-label"><span>02</span><p>Your details</p></div>
              <div class="field-grid">
                <label>Your name<input required type="text" placeholder="Full name" /></label>
                <label>Phone number<input required type="tel" placeholder="080 0000 0000" /></label>
                <label class="wide-field">Email address<input required type="email" placeholder="you@example.com" /></label>
              </div>
            </div>

            <div class="form-section last-section">
              <div class="section-label"><span>03</span><p>Your ideal fit</p></div>
              <label class="wide-field description-field">What would make this home right for you?<textarea rows="4" placeholder="Mention preferred amenities, size, neighbourhood, or any special requirements."></textarea></label>
            </div>

            <button class="submit-button" type="submit"><span>Request lease options</span><b aria-hidden="true">↗</b></button>
          </template>
        </form>
      </section>

      <section class="lease-close">
        <p class="eyebrow">A considered next chapter</p>
        <h2>Good leases begin with good questions.</h2>
        <router-link to="/help">Visit our help centre <span aria-hidden="true">↗</span></router-link>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap');

:global(*) { box-sizing: border-box; }
:global(body) { margin: 0; background: #f4f1eb; color: #1b2a41; font-family: 'DM Sans', sans-serif; }

.lease-page { min-height: 100vh; background: linear-gradient(180deg, #fbf9f5 0%, #f4f1eb 70%, #efeae1 100%); }
.lease-hero, .lease-values, .lease-workspace, .lease-close { width: min(1180px, 90%); margin: 0 auto; }

.lease-hero { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(34px, 7vw, 105px); align-items: center; padding: 56px 0 60px; }
.hero-copy { padding: 20px 0; }
.eyebrow { margin: 0 0 18px; color: #9b642c; font-size: 0.69rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }
h1, h2, h3 { margin: 0; font-family: 'Fraunces', Georgia, serif; font-weight: 600; }
h1 { max-width: 540px; font-size: clamp(3.05rem, 5.6vw, 5.6rem); line-height: 0.92; letter-spacing: -0.06em; }
.hero-text { max-width: 440px; margin: 25px 0 31px; color: #69706b; font-size: 1rem; line-height: 1.75; }
.hero-link, .lease-close a { color: #8d5a27; font-size: 0.82rem; font-weight: 700; text-decoration: none; }
.hero-link span, .lease-close a span { margin-left: 8px; font-size: 1.05rem; }
.hero-link:hover, .lease-close a:hover { text-decoration: underline; }

.hero-media { position: relative; min-height: 570px; overflow: hidden; border-radius: 9px 9px 110px 9px; background: #ddd4c8; box-shadow: 0 24px 50px rgba(67, 52, 34, 0.15); }
.hero-media img { width: 100%; height: 100%; min-height: 570px; display: block; object-fit: cover; }
.hero-caption { position: absolute; right: 22px; bottom: 22px; left: 22px; display: grid; gap: 6px; padding: 20px; border: 1px solid rgba(255,255,255,0.22); border-radius: 8px; background: rgba(40, 31, 24, 0.78); color: #fff; }
.caption-kicker { color: #e1c096; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; }
.hero-caption strong { font-family: 'Fraunces', Georgia, serif; font-size: 1.35rem; font-weight: 600; }
.hero-caption > span:last-child { color: #e9ded0; font-size: 0.72rem; }

.lease-values { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #ddd5c8; border-bottom: 1px solid #ddd5c8; }
.lease-values div { display: flex; align-items: center; gap: 15px; padding: 22px 15px; border-right: 1px solid #ddd5c8; }
.lease-values div:last-child { border-right: 0; }
.lease-values strong { color: #9b642c; font-size: 0.68rem; letter-spacing: 0.13em; }
.lease-values span { color: #49534f; font-size: 0.79rem; font-weight: 600; }

.lease-workspace { display: grid; grid-template-columns: 0.72fr 1.28fr; gap: clamp(34px, 7vw, 90px); padding: 86px 0 100px; }
.form-intro { padding-top: 10px; }
.form-intro h2 { max-width: 365px; font-size: clamp(2.3rem, 3.6vw, 3.7rem); line-height: 0.98; letter-spacing: -0.055em; }
.intro-text { max-width: 340px; margin: 19px 0 30px; color: #69706b; font-size: 0.88rem; line-height: 1.7; }
.process-list { display: grid; gap: 17px; list-style: none; margin: 0; padding: 0; }
.process-list li { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-top: 1px solid #ddd5c8; }
.process-list li:last-child { border-bottom: 1px solid #ddd5c8; }
.process-list li > span, .section-label span { color: #9b642c; font-size: 0.68rem; font-weight: 800; letter-spacing: 0.13em; }
.process-list div { display: grid; gap: 4px; }
.process-list strong { color: #2e3a3b; font-size: 0.86rem; }
.process-list small { color: #7c827b; font-size: 0.77rem; line-height: 1.5; }
.aside-note { display: flex; gap: 10px; margin-top: 28px; color: #8d5a27; }
.aside-note p { max-width: 245px; margin: 0; color: #7c827b; font-size: 0.72rem; line-height: 1.5; }
.aside-note span { font-size: 0.7rem; }

.listing-form { padding: clamp(25px, 4vw, 42px); border: 1px solid #e0d8cd; border-radius: 9px; background: #fffdfa; box-shadow: 0 18px 44px rgba(68, 53, 36, 0.08); }
.form-header { display: flex; justify-content: space-between; align-items: end; gap: 20px; padding-bottom: 23px; border-bottom: 1px solid #e3dbd0; }
.form-kicker { display: block; margin-bottom: 7px; color: #9b642c; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
.form-header h3 { font-size: 1.9rem; letter-spacing: -0.04em; }
.required-note { color: #9a9a8e; font-size: 0.68rem; }
.form-section { padding: 28px 0 0; }
.section-label { display: flex; align-items: center; gap: 13px; margin-bottom: 18px; }
.section-label p { margin: 0; color: #384848; font-size: 0.82rem; font-weight: 700; }
.field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.field-grid label, .description-field { display: grid; gap: 7px; color: #43504d; font-size: 0.73rem; font-weight: 700; }
.wide-field { grid-column: 1 / -1; }
input, select, textarea { width: 100%; padding: 13px 14px; border: 1px solid #dedfd8; border-radius: 5px; outline: none; background: #fbfaf6; color: #1b2a41; font: inherit; font-weight: 400; transition: border-color 0.2s ease, background 0.2s ease; }
input:focus, select:focus, textarea:focus { border-color: #9b642c; background: #fff; }
textarea { resize: vertical; }
.last-section { padding-bottom: 2px; }
.submit-button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-top: 28px; padding: 16px 18px; border: 0; border-radius: 5px; background: #263b46; color: #fff; font: inherit; font-size: 0.82rem; font-weight: 700; cursor: pointer; transition: background 0.2s ease, transform 0.2s ease; }
.submit-button:hover { background: #172b35; transform: translateY(-2px); }
.submit-button b { font-size: 1.2rem; font-weight: 400; }

.success-message { display: grid; justify-items: center; gap: 12px; min-height: 510px; place-content: center; text-align: center; }
.success-icon { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: #e8eee5; color: #4a7047; font-size: 1.4rem; font-weight: 700; }
.success-message strong { font-family: 'Fraunces', Georgia, serif; font-size: 2rem; font-weight: 600; }
.success-message > span:not(.success-icon) { max-width: 300px; color: #737c76; font-size: 0.82rem; line-height: 1.55; }
.edit-button { margin-top: 8px; padding: 10px 15px; border: 1px solid #dedfd8; border-radius: 5px; background: transparent; color: #8d5a27; font: inherit; font-size: 0.75rem; font-weight: 700; cursor: pointer; }

.lease-close { padding: 6px 0 105px; text-align: center; }
.lease-close h2 { margin-bottom: 18px; font-size: clamp(2.2rem, 4vw, 4rem); letter-spacing: -0.055em; }

@media (max-width: 850px) {
  .lease-hero, .lease-workspace { grid-template-columns: 1fr; }
  .lease-hero { padding-top: 38px; }
  .hero-media, .hero-media img { min-height: 400px; }
  .lease-workspace { gap: 48px; }
}

@media (max-width: 560px) {
  .lease-hero, .lease-values, .lease-workspace, .lease-close { width: 88%; }
  .lease-hero { padding-bottom: 54px; }
  .hero-media, .hero-media img { min-height: 350px; }
  .lease-values { grid-template-columns: 1fr; }
  .lease-values div { border-right: 0; border-bottom: 1px solid #ddd5c8; }
  .lease-values div:last-child { border-bottom: 0; }
  .form-header, .field-grid { display: grid; grid-template-columns: 1fr; }
  .required-note { margin-top: 4px; }
  .wide-field { grid-column: auto; }
  .listing-form { padding: 23px 17px; }
  .hero-caption { right: 12px; bottom: 12px; left: 12px; }
}
</style>
