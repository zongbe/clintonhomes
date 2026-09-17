<script setup>
import { ref } from 'vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

const submitted = ref(false)

function submitRentalRequest() {
  submitted.value = true
}
</script>

<template>
  <div class="rent-page">
    <Nav />

    <main>
      
      <section class="search-section" id="rent-form">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Your rental brief</p>
            <h2>What are you looking for?</h2>
          </div>
          <p class="heading-note">A few details help us narrow the search to homes that fit your everyday life.</p>
        </div>

        <form class="search-form" @submit.prevent="submitRentalRequest">
          <div v-if="submitted" class="success-state" role="status">
            <span class="success-mark">✓</span>
            <div>
              <h3>Your rental brief is with us.</h3>
              <p>We will send suitable matches and next steps shortly.</p>
            </div>
            <button type="button" class="reset-button" @click="submitted = false">Edit brief</button>
          </div>

          <template v-else>
            <div class="form-topline">
              <span>Search preferences</span>
              <small>Required fields are marked by the form</small>
            </div>

            <div class="form-grid">
              <label class="field field-wide">
                <span>Where do you want to live?</span>
                <input required type="text" placeholder="Area, city, or landmark" />
              </label>
              <label class="field">
                <span>Property type</span>
                <select required>
                  <option value="" disabled selected>Select a type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Studio</option>
                  <option>Townhouse</option>
                  <option>Commercial space</option>
                </select>
              </label>
              <label class="field">
                <span>Bedrooms</span>
                <select required>
                  <option value="" disabled selected>Any bedroom count</option>
                  <option>Studio</option>
                  <option>1 bedroom</option>
                  <option>2 bedrooms</option>
                  <option>3 bedrooms</option>
                  <option>4+ bedrooms</option>
                </select>
              </label>
              <label class="field">
                <span>Monthly budget</span>
                <input required type="text" inputmode="decimal" placeholder="₦ Enter your budget" />
              </label>
              <label class="field">
                <span>Move-in date</span>
                <input required type="date" />
              </label>
            </div>

            <div class="form-divider"></div>
            <div class="form-topline contact-heading">
              <span>How should we reach you?</span>
              <small>We keep your details private</small>
            </div>
            <div class="form-grid contact-grid">
              <label class="field">
                <span>Your name</span>
                <input required type="text" placeholder="Full name" />
              </label>
              <label class="field">
                <span>Phone number</span>
                <input required type="tel" placeholder="080 0000 0000" />
              </label>
              <label class="field field-wide">
                <span>Email address</span>
                <input required type="email" placeholder="you@example.com" />
              </label>
              <label class="field field-wide">
                <span>What would make it feel right?</span>
                <textarea rows="3" placeholder="Amenities, neighbourhood feel, accessibility needs, or anything else to keep in mind."></textarea>
              </label>
            </div>

            <div class="form-actions">
              <p>We match your brief with verified homes and trusted contacts.</p>
              <button class="submit-button" type="submit">Find my rental matches <span aria-hidden="true">↗</span></button>
            </div>
          </template>
        </form>
      </section>

      <section class="rental-promise">
        <div class="promise-heading">
          <p class="eyebrow">The Clinton Homes difference</p>
          <h2>More confidence at every step.</h2>
        </div>
        <div class="promise-grid">
          <article>
            <span class="promise-number">01</span>
            <h3>Useful matches</h3>
            <p>Your budget and priorities guide the shortlist, so you spend less time scrolling past the wrong homes.</p>
          </article>
          <article>
            <span class="promise-number">02</span>
            <h3>Clear next steps</h3>
            <p>Move from enquiry to viewing with the information you need to make a confident decision.</p>
          </article>
          <article>
            <span class="promise-number">03</span>
            <h3>A human response</h3>
            <p>Our team stays close to the details and helps you navigate the search without the guesswork.</p>
          </article>
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
  background: #f5f7f4;
  color: #20323a;
  font-family: 'DM Sans', sans-serif;
}

.rent-page {
  min-height: 100vh;
  background: #f5f7f4;
}

.rent-intro,
.search-section,
.rental-promise {
  width: min(1180px, 90%);
  margin: 0 auto;
}

.rent-intro {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(28px, 6vw, 90px);
  align-items: center;
  padding: 58px 0 84px;
}

.intro-copy {
  padding: 18px 0;
}

.eyebrow {
  margin: 0 0 17px;
  color: #39706a;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
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
  max-width: 520px;
  color: #20323a;
  font-size: clamp(3rem, 6vw, 5.7rem);
  line-height: 0.94;
  letter-spacing: -0.055em;
}

.intro-text {
  max-width: 430px;
  margin: 25px 0 31px;
  color: #617177;
  font-size: 1.02rem;
  line-height: 1.75;
}

.intro-meta {
  display: grid;
  gap: 11px;
  color: #395058;
  font-size: 0.8rem;
  font-weight: 600;
}

.intro-meta span {
  display: flex;
  align-items: center;
  gap: 10px;
}

.intro-meta b {
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border: 1px solid #a8c2bc;
  border-radius: 50%;
  color: #39706a;
  font-size: 0.65rem;
}

.intro-image {
  position: relative;
  min-height: 525px;
  overflow: hidden;
  border-radius: 18px 18px 110px 18px;
  background: #d9e5e0;
  box-shadow: 0 25px 50px rgba(33, 52, 57, 0.13);
}

.intro-image img {
  width: 100%;
  height: 100%;
  min-height: 525px;
  display: block;
  object-fit: cover;
}

.image-label {
  position: absolute;
  right: 22px;
  bottom: 22px;
  left: 22px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9px;
  background: rgba(22, 44, 45, 0.78);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.label-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d9a85e;
}

.search-section {
  padding: 42px 0 100px;
  border-top: 1px solid #dce5e1;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
  margin-bottom: 30px;
}

.section-heading h2,
.promise-heading h2 {
  font-size: clamp(2.25rem, 4vw, 3.75rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.heading-note {
  max-width: 320px;
  margin: 0 0 3px;
  color: #718087;
  font-size: 0.86rem;
  line-height: 1.65;
}

.search-form {
  min-height: 500px;
  padding: clamp(24px, 4vw, 44px);
  border: 1px solid #d8e3df;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 18px 38px rgba(35, 57, 59, 0.07);
}

.form-topline {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 19px;
}

.form-topline span {
  color: #20323a;
  font-size: 1.1rem;
  font-weight: 700;
}

.form-topline small {
  color: #8a999b;
  font-size: 0.72rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
  color: #334d53;
  font-size: 0.76rem;
  font-weight: 700;
}

.field-wide {
  grid-column: 1 / -1;
}

input,
select,
textarea {
  width: 100%;
  padding: 14px 15px;
  border: 1px solid #d6e1de;
  border-radius: 8px;
  outline: none;
  background: #f8faf9;
  color: #20323a;
  font: inherit;
  font-weight: 400;
  transition: border-color 0.2s ease, background 0.2s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #39706a;
  background: #fff;
}

textarea {
  resize: vertical;
}

.form-divider {
  height: 1px;
  margin: 32px 0 27px;
  background: #e5ece9;
}

.contact-heading {
  margin-bottom: 19px;
}

.contact-grid {
  grid-template-columns: 1fr 1fr;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
}

.form-actions p {
  max-width: 280px;
  margin: 0;
  color: #829093;
  font-size: 0.72rem;
  line-height: 1.5;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  min-width: 220px;
  padding: 15px 17px;
  border: 0;
  border-radius: 8px;
  background: #2d625e;
  color: white;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.submit-button:hover {
  background: #214d4a;
  transform: translateY(-2px);
}

.submit-button span {
  font-size: 1.25rem;
}

.success-state {
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 410px;
}

.success-mark {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #dceee5;
  color: #2d625e;
  font-size: 1.4rem;
  font-weight: 700;
}

.success-state h3 {
  font-size: 2rem;
}

.success-state p {
  margin: 8px 0 0;
  color: #718087;
}

.reset-button {
  margin-left: auto;
  padding: 10px 13px;
  border: 1px solid #d6e1de;
  border-radius: 7px;
  background: white;
  color: #39706a;
  font: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}

.rental-promise {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 65px;
  padding: 4px 0 105px;
}

.promise-heading h2 {
  max-width: 350px;
}

.promise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.promise-grid article {
  padding-top: 17px;
  border-top: 2px solid #9dbab2;
}

.promise-number {
  color: #39706a;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.promise-grid h3 {
  margin-top: 30px;
  font-size: 1.35rem;
}

.promise-grid p {
  margin: 11px 0 0;
  color: #718087;
  font-size: 0.8rem;
  line-height: 1.65;
}

@media (max-width: 850px) {
  .rent-intro,
  .rental-promise {
    grid-template-columns: 1fr;
  }

  .rent-intro {
    padding-top: 38px;
  }

  .intro-image,
  .intro-image img {
    min-height: 390px;
  }

  .promise-grid {
    gap: 16px;
  }
}

@media (max-width: 560px) {
  .rent-intro,
  .search-section,
  .rental-promise {
    width: 88%;
  }

  .rent-intro {
    padding-bottom: 58px;
  }

  .section-heading,
  .form-actions,
  .success-state {
    display: grid;
  }

  .section-heading {
    gap: 14px;
  }

  .form-grid,
  .contact-grid,
  .promise-grid {
    grid-template-columns: 1fr;
  }

  .field-wide {
    grid-column: auto;
  }

  .form-actions {
    gap: 16px;
  }

  .submit-button {
    width: 100%;
  }

  .success-state {
    align-content: center;
    justify-items: start;
  }

  .reset-button {
    margin-left: 0;
  }
}
</style>
