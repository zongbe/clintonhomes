<script setup>
import { ref, reactive, computed, h } from "vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

const steps = [
  { key: "type", label: "Purpose & type" },
  { key: "photos", label: "Photos & media" },
  { key: "details", label: "Details" },
  { key: "location", label: "Location" },
  { key: "amenities", label: "Amenities" },
  { key: "verify", label: "Verification" },
  { key: "preview", label: "Preview & submit" },
];

const purposes = ["Sale", "Pre-sale", "Lease", "Short-let", "Co-living / Roommate"];
const categories = ["Duplex", "Bungalow", "Flat / Apartment", "Terrace", "Land", "Commercial"];
const amenities = [
  "24/7 power backup", "Borehole / water treatment", "Estate security", "Swimming pool",
  "Gym", "Fitted kitchen", "Air conditioning", "Parking space", "Furnished", "CCTV",
  "Serviced estate", "Elevator",
];

const step = ref(0);
const fileInput = ref(null);
const photos = ref([]);

const data = reactive({
  purpose: "", category: "", title: "", description: "", price: "",
  negotiable: false, bedrooms: "", bathrooms: "", size: "", parking: "",
  address: "", city: "", state: "", landmark: "",
  amenities: [], titleDoc: "", ownerConfirm: false, contactMethod: "In-app messaging",
});

function toggleAmenity(a) {
  const idx = data.amenities.indexOf(a);
  if (idx === -1) data.amenities.push(a);
  else data.amenities.splice(idx, 1);
}

function handleFiles(fileList) {
  const remaining = 10 - photos.value.length;
  const list = Array.from(fileList).slice(0, remaining);
  list.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      photos.value.push({ id: Math.random().toString(36).slice(2), url: e.target.result, name: file.name });
    };
    reader.readAsDataURL(file);
  });
}

function removePhoto(id) {
  photos.value = photos.value.filter((p) => p.id !== id);
}

function setCover(id) {
  const found = photos.value.find((p) => p.id === id);
  photos.value = [found, ...photos.value.filter((p) => p.id !== id)];
}

function next() {
  step.value = Math.min(step.value + 1, steps.length - 1);
}
function back() {
  step.value = Math.max(step.value - 1, 0);
}

const addressLine = computed(() =>
  [data.address, data.city, data.state].filter(Boolean).join(", ")
);

const formattedPrice = computed(() => {
  const n = Number(String(data.price).replace(/[^0-9]/g, ""));
  if (!n) return "";
  return "\u20A6" + n.toLocaleString();
});

// Small inline functional component for labeled form fields
const Field = (props, { slots }) =>
  h("label", { class: "lw-field" }, [
    h("span", { class: "lw-field-label" }, props.label),
    slots.default ? slots.default() : null,
    props.hint ? h("span", { class: "lw-field-hint" }, props.hint) : null,
  ]);
Field.props = ["label", "hint"];

defineExpose({ data, photos });
</script>

<template>
  <Nav />
  <div class="lw-wrap">
    <div class="lw-header">
      <h1 class="lw-page-title">List your property</h1>
    </div>

    <div class="lw-layout">
        <!-- Step lw-rail -->
        <div class="lw-rail">
          <div
            v-for="(s, i) in steps"
            :key="s.key"
            class="lw-rail-item"
            :class="{ 'lw-active': i === step }"
            @click="step = i"
          >
            <div
              class="lw-rail-dot"
              :class="{ 'lw-active': i === step, 'lw-done': i < step }"
            >
              <span v-if="i < step">&#10003;</span>
              <span v-else>{{ i + 1 }}</span>
            </div>
            <span class="lw-rail-label" :class="{ 'lw-active': i === step }">{{ s.label }}</span>
          </div>
        </div>

        <!-- Main lw-panel -->
        <div class="lw-panel">
          <!-- Step 0: Purpose & type -->
          <div v-if="step === 0" class="lw-type-step">
            <h2 class="lw-section-title">What are you listing?</h2>
            <Field label="Listing purpose">
              <div class="lw-chip-row">
                <button
                  v-for="p in purposes"
                  :key="p"
                  class="lw-chip"
                  :class="{ 'lw-active': data.purpose === p }"
                  @click="data.purpose = p"
                >{{ p }}</button>
              </div>
            </Field>
            <Field label="Property category">
              <div class="lw-chip-row">
                <button
                  v-for="c in categories"
                  :key="c"
                  class="lw-chip"
                  :class="{ 'lw-active': data.category === c }"
                  @click="data.category = c"
                >{{ c }}</button>
              </div>
            </Field>
          </div>

          <!-- Step 1: Photos -->
          <div v-if="step === 1">
            <h2 class="lw-section-title">Add photos</h2>
            <p class="lw-hint-text">
              Upload at least 5 clear photos. Good lighting, no watermarks. The first photo is your
              cover image &mdash; use the star to make another photo the cover.
            </p>
            <div
              class="lw-dropzone"
              @click="fileInput.click()"
              @dragover.prevent
              @drop.prevent="handleFiles($event.dataTransfer.files)"
            >
              <div class="lw-upload-icon">&#8613;</div>
              <div class="lw-dropzone-title">Click to upload or drag photos here</div>
              <div class="lw-dropzone-sub">JPG or PNG, up to 10 photos</div>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                multiple
                hidden
                @change="handleFiles($event.target.files)"
              />
            </div>
            <div v-if="photos.length" class="lw-photo-grid">
              <div v-for="(p, i) in photos" :key="p.id" class="lw-photo-cell">
                <img :src="p.url" :alt="p.name" />
                <div v-if="i === 0" class="lw-cover-badge">Cover</div>
                <div class="lw-photo-actions">
                  <button v-if="i !== 0" title="Make cover photo" @click="setCover(p.id)">&#9733;</button>
                  <button title="Remove" @click="removePhoto(p.id)">&#10005;</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Details -->
          <div v-if="step === 2">
            <h2 class="lw-section-title">Property details</h2>
            <Field label="Listing title">
              <input
                class="lw-input"
                placeholder="e.g. 4-bedroom duplex with BQ, Lekki Phase 1"
                v-model="data.title"
              />
            </Field>
            <Field label="Description">
              <lw-textarea
                class="lw-input lw-textarea"
                placeholder="Describe the property's condition, unique features and neighbourhood"
                v-model="data.description"
              />
            </Field>
            <div class="lw-grid-2">
              <Field label="Price">
                <input class="lw-input" placeholder="e.g. 85,000,000" v-model="data.price" />
              </Field>
              <Field label="Negotiable?">
                <label class="lw-checkbox-row" style="padding-top:8px">
                  <input type="checkbox" v-model="data.negotiable" />
                  <span>Price is negotiable</span>
                </label>
              </Field>
              <Field label="Bedrooms">
                <input class="lw-input" type="number" v-model="data.bedrooms" />
              </Field>
              <Field label="Bathrooms">
                <input class="lw-input" type="number" v-model="data.bathrooms" />
              </Field>
              <Field label="Size (sqm)">
                <input class="lw-input" v-model="data.size" />
              </Field>
              <Field label="Parking spaces">
                <input class="lw-input" type="number" v-model="data.parking" />
              </Field>
            </div>
          </div>

          <!-- Step 3: Location -->
          <div v-if="step === 3">
            <h2 class="lw-section-title">Location</h2>
            <Field label="Street address">
              <input class="lw-input" v-model="data.address" />
            </Field>
            <div class="lw-grid-2">
              <Field label="City / Area">
                <input class="lw-input" v-model="data.city" />
              </Field>
              <Field label="State">
                <input class="lw-input" v-model="data.state" />
              </Field>
            </div>
            <Field label="Nearby landmark" hint="Helps buyers get their bearings, e.g. 'Behind Shoprite'">
              <input class="lw-input" v-model="data.landmark" />
            </Field>
            <div class="lw-map-placeholder">&#128205; Map pin drop goes here</div>
          </div>

          <!-- Step 4: Amenities -->
          <div v-if="step === 4">
            <h2 class="lw-section-title">Amenities</h2>
            <div class="lw-grid-2">
              <label v-for="a in amenities" :key="a" class="lw-checkbox-row">
                <input type="checkbox" :checked="data.amenities.includes(a)" @change="toggleAmenity(a)" />
                <span>{{ a }}</span>
              </label>
            </div>
          </div>

          <!-- Step 5: Verification -->
          <div v-if="step === 5">
            <h2 class="lw-section-title">Verification and contact</h2>
            <Field
              label="Title document"
              hint="C of O, Deed of Assignment, Governor's Consent, etc. — reviewed by our team before the listing goes live"
            >
              <div class="lw-doc-upload" @click="data.titleDoc = 'title-document.pdf'">
                {{ data.titleDoc ? `Uploaded: ${data.titleDoc}` : 'Click to upload a document' }}
              </div>
            </Field>
            <Field label="Preferred contact method">
              <select class="lw-input" v-model="data.contactMethod">
                <option>In-app messaging</option>
                <option>Phone call</option>
                <option>Both</option>
              </select>
            </Field>
            <label class="lw-checkbox-row" style="margin-top:8px">
              <input type="checkbox" v-model="data.ownerConfirm" />
              <span>I confirm I am the owner or an authorised agent for this property</span>
            </label>
          </div>

          <!-- Step 6: Preview -->
          <div v-if="step === 6">
            <h2 class="lw-section-title">Preview</h2>
            <p class="lw-hint-text">
              This is how buyers will see your listing. Submit when you're ready &mdash; it'll be
              reviewed before going live.
            </p>
            <div class="lw-preview-card">
              <div class="lw-preview-cover">
                <img v-if="photos[0]" :src="photos[0].url" alt="cover" />
                <div v-else class="lw-preview-cover-empty">No photos uploaded yet</div>
                <div v-if="data.purpose" class="lw-purpose-badge">For {{ data.purpose }}</div>
              </div>
              <div class="lw-preview-body">
                <div class="lw-preview-title">{{ data.title || 'Untitled listing' }}</div>
                <div class="lw-preview-address">{{ addressLine || 'Address not set' }}</div>
                <div class="lw-preview-price">
                  {{ formattedPrice || 'Price not set' }}
                  <span v-if="data.negotiable" class="lw-negotiable-tag"> (negotiable)</span>
                </div>
                <div class="lw-preview-stats">
                  <span v-if="data.bedrooms">{{ data.bedrooms }} bed</span>
                  <span v-if="data.bathrooms">{{ data.bathrooms }} bath</span>
                  <span v-if="data.size">{{ data.size }} sqm</span>
                  <span v-if="data.parking">{{ data.parking }} parking</span>
                </div>
                <div v-if="data.amenities.length" class="lw-amenity-tags">
                  <span v-for="a in data.amenities" :key="a" class="lw-amenity-tag">{{ a }}</span>
                </div>
              </div>
            </div>
            <button class="lw-btn-primary" @click="$emit('submit', { ...data, photos })">Submit for review</button>
            <button class="lw-btn-secondary" @click="$emit('save-draft', { ...data, photos })">Save as draft</button>
          </div>

          <!-- Nav -->
          <div class="lw-nav-row">
            <button class="lw-btn-back" :disabled="step === 0" @click="back">&larr; Back</button>
            <button v-if="step < steps.length - 1" class="lw-btn-continue" @click="next">
              Continue &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  <Footer />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Inter:wght@400;500;600&display=swap");

.lw-wrap {
  font-family: "Inter", sans-serif;
  max-width: 1080px;
  margin: 0 auto;
}
.lw-header {
  margin-bottom: 28px;
}
.lw-page-title {
  font-family: "Zilla Slab", serif;
  font-size: 30px;
  font-weight: 600;
  color: #2a2620;
  margin: 4px 0 0;
}
.lw-layout {
  display: flex;
  gap: 28px;
}

/* Step lw-rail */
.lw-rail {
  width: 210px;
  flex-shrink: 0;
}
.lw-rail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 4px;
}
.lw-rail-item.lw-active {
  background: #22314e;
}
.lw-rail-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e3dccb;
  color: #8a8478;
  font-size: 12px;
  font-weight: 600;
}
.lw-rail-dot.lw-active {
  background: #a6432b;
  color: #fbf8f2;
}
.lw-rail-dot.lw-done {
  background: #4c6b4f;
  color: #fbf8f2;
}
.lw-rail-label {
  font-size: 13px;
  font-weight: 500;
  color: #5b5648;
}
.lw-rail-label.lw-active {
  color: #fbf8f2;
}

/* Main lw-panel */
.lw-panel {
  flex: 1;
  background: #fbf8f2;
  border-radius: 10px;
  padding: 32px;
  border: 1px solid #e3dccb;
}
.lw-section-title {
  font-family: "Zilla Slab", serif;
  font-size: 20px;
  margin-bottom: 20px;
  color: #2a2620;
}
.lw-hint-text {
  font-size: 13px;
  color: #8a8478;
  margin-bottom: 16px;
}

/* Fields */
.lw-field {
  display: block;
  margin-bottom: 20px;
}
.lw-field-label {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #2a2620;
  display: block;
  margin-bottom: 6px;
}
.lw-field-hint {
  display: block;
  font-size: 12px;
  color: #8a8478;
  margin-top: 4px;
}

.lw-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #dcd5c4;
  border-radius: 6px;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: #2a2620;
  background: #fbf8f2;
  box-sizing: border-box;
}
.lw-textarea {
  min-height: 90px;
  resize: vertical;
}
.lw-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.lw-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.lw-type-step {
  min-height: 52vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.lw-type-step .lw-section-title {
  font-size: 30px;
  margin-bottom: 30px;
}
.lw-type-step .lw-field {
  margin-bottom: 28px;
}
.lw-type-step .lw-field-label {
  font-size: 15px;
  margin-bottom: 12px;
}
.lw-type-step .lw-chip-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.lw-chip {
  min-height: 64px;
  padding: 14px 18px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #dcd5c4;
  background: #fbf8f2;
  color: #5b5648;
  font-weight: 500;
  text-align: left;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}
.lw-chip:hover {
  border-color: #a6432b;
  transform: translateY(-2px);
}
.lw-chip.lw-active {
  border-color: #a6432b;
  background: #f3e3db;
  color: #7a3320;
}

.lw-checkbox-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #5b5648;
}
.lw-checkbox-row lw-input {
  accent-color: #a6432b;
}

/* Photos */
.lw-dropzone {
  border: 2px dashed #dcd5c4;
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  background: #fffdf8;
}
.lw-upload-icon {
  font-size: 22px;
  color: #a6432b;
  margin-bottom: 8px;
}
.lw-dropzone-title {
  font-size: 14px;
  color: #5b5648;
  font-weight: 500;
}
.lw-dropzone-sub {
  font-size: 12px;
  color: #8a8478;
  margin-top: 4px;
}

.lw-photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.lw-photo-cell {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e3dccb;
}
.lw-photo-cell img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  display: block;
}
.lw-cover-badge {
  position: absolute;
  top: 4px;
  left: 4px;
  background: #4c6b4f;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
}
.lw-photo-actions {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  gap: 4px;
}
.lw-photo-actions button {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 4px;
  padding: 3px 6px;
  cursor: pointer;
  font-size: 11px;
  line-height: 1;
}

/* Location */
.lw-map-placeholder {
  height: 140px;
  border-radius: 8px;
  background: #ede6d6;
  border: 1px dashed #dcd5c4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8478;
  font-size: 13px;
}

/* Verification */
.lw-doc-upload {
  border: 1px dashed #dcd5c4;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  font-size: 13px;
  color: #8a8478;
  background: #fffdf8;
  cursor: pointer;
}

/* Preview */
.lw-preview-card {
  border: 1px solid #e3dccb;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}
.lw-preview-cover {
  height: 220px;
  background: #ede6d6;
  position: relative;
}
.lw-preview-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.lw-preview-cover-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #8a8478;
  font-size: 13px;
}
.lw-purpose-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #a6432b;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
}
.lw-preview-body {
  padding: 20px;
}
.lw-preview-title {
  font-family: "Zilla Slab", serif;
  font-size: 20px;
  font-weight: 600;
  color: #2a2620;
}
.lw-preview-address {
  font-size: 13px;
  color: #8a8478;
  margin: 4px 0 10px;
}
.lw-preview-price {
  font-size: 22px;
  font-weight: 600;
  color: #22314e;
  margin-bottom: 12px;
}
.lw-negotiable-tag {
  font-size: 12px;
  color: #8a8478;
  font-weight: 400;
}
.lw-preview-stats {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #5b5648;
  margin-bottom: 14px;
}
.lw-amenity-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.lw-amenity-tag {
  font-size: 11px;
  background: #f1efe8;
  color: #5b5648;
  padding: 3px 8px;
  border-radius: 12px;
}

.lw-btn-primary {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background: #a6432b;
  color: #fbf8f2;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.lw-btn-secondary {
  margin-top: 8px;
  width: 100%;
  padding: 12px;
  background: transparent;
  color: #5b5648;
  border: 1px solid #dcd5c4;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

/* Nav */
.lw-nav-row {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #e3dccb;
}
.lw-btn-back {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 9px 16px;
  border-radius: 6px;
  border: 1px solid #dcd5c4;
  background: transparent;
  color: #5b5648;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
.lw-btn-back:disabled {
  color: #c7c0af;
  cursor: default;
}
.lw-btn-continue {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 9px 18px;
  border-radius: 6px;
  border: none;
  background: #22314e;
  color: #fbf8f2;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 700px) {
  .lw-wrap {
    padding: 0 16px;
  }
  .lw-layout {
    display: block;
  }
  .lw-rail {
    width: auto;
    display: flex;
    overflow-x: auto;
    margin-bottom: 16px;
  }
  .lw-rail-item {
    flex-shrink: 0;
  }
  .lw-rail-label {
    display: none;
  }
  .lw-panel {
    padding: 22px;
  }
  .lw-type-step .lw-chip-row {
    grid-template-columns: 1fr;
  }
  .lw-type-step .lw-section-title {
    font-size: 26px;
  }
}
</style>