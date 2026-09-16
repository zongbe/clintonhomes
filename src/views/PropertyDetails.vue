<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import coverImage from '@/assets/images/properties/lekki-duplex-cover.webp'
import livingRoomImage from '@/assets/images/properties/lekki-duplex-living-room.webp'
import kitchenImage from '@/assets/images/properties/lekki-duplex-kitchen.webp'
import bedroomImage from '@/assets/images/properties/lekki-duplex-bedroom.webp'
import bathroomImage from '@/assets/images/properties/lekki-duplex-bathroom.webp'
import backyardImage from '@/assets/images/properties/lekki-duplex-backyard.webp'
import chevronCoverImage from '@/assets/images/properties/chevron-apartment-cover.webp'
import chevronBedroomImage from '@/assets/images/properties/chevron-apartment-bedroom.webp'
import chevronBathroomImage from '@/assets/images/properties/chevron-apartment-bathroom.webp'
import chevronLivingRoomImage from '@/assets/images/properties/chevron-apartment-livingroom.webp'
import chevronKitchenImage from '@/assets/images/properties/chevron-apartment-kitchen.webp'
import ikoyiCoverImage from '@/assets/images/properties/ikoyi-apartment-cover.webp'
import ikoyiLivingRoomImage from '@/assets/images/properties/ikoyi-apartment-livingroom.webp'
import ikoyiKitchenImage from '@/assets/images/properties/ikoyi-apartment-kitchen.webp'
import ikoyiBedroomImage from '@/assets/images/properties/ikoyi-apartment-bedroom.webp'
import ikoyiBathroomImage from '@/assets/images/properties/ikoyi-apartment-bathroom.webp'
import ikoyiCoffeeRoomImage from '@/assets/images/properties/ikoyi-apartment-coffeeroom.webp'
import yabaCoverImage from '@/assets/images/properties/yaba-apartment-cover.webp'
import yabaLivingRoomImage from '@/assets/images/properties/yaba-apartment-livingroom.webp'
import yabaKitchenImage from '@/assets/images/properties/yaba-apartment-kitchen.webp'
import yabaBedroomImage from '@/assets/images/properties/yaba-apartment-bedroom.webp'
import yabaBathroomImage from '@/assets/images/properties/yaba-apartment-bathroom.webp'
import yabaCoffeeRoomImage from '@/assets/images/properties/yaba-apartment-coffee-room.webp'

const route = useRoute()

const properties = {
	'lekki-duplex': {
		title: 'Contemporary family duplex',
		location: 'Lekki Phase 1, Lagos',
		price: '₦85,000,000',
		label: 'Featured home · Verified listing',
		bedrooms: '4',
		bathrooms: '3',
		size: '320',
		parking: '2',
		description: 'Set in the heart of Lekki Phase 1, this contemporary family duplex brings generous proportions, thoughtful finishes, and calm everyday living together in one considered home.',
		secondDescription: 'From the bright open-plan living area to the private backyard, every room has been designed for easy hosting, quiet mornings, and the moments in between.',
		features: ['Open-plan living and dining area', 'Fitted contemporary kitchen', 'Private backyard', 'Gated parking and 24-hour security'],
		gallery: [
			{ src: coverImage, alt: 'Exterior of the Lekki duplex' },
			{ src: livingRoomImage, alt: 'Living room of the Lekki duplex' },
			{ src: kitchenImage, alt: 'Kitchen of the Lekki duplex' },
			{ src: bedroomImage, alt: 'Bedroom of the Lekki duplex' },
			{ src: bathroomImage, alt: 'Bathroom of the Lekki duplex' },
			{ src: backyardImage, alt: 'Backyard of the Lekki duplex' },
		],
	},
	'chevron-apartment': {
		title: 'Warm family residence',
		location: 'Chevron, Lagos',
		price: '₦62,500,000',
		label: 'Verified home · Chevron',
		bedrooms: '3',
		bathrooms: '3',
		size: '245',
		parking: '2',
		description: 'This welcoming Chevron residence combines comfortable proportions with bright, practical spaces for everyday family living.',
		secondDescription: 'Enjoy a calm living room, a functional kitchen, and comfortable bedrooms in a well-connected Lagos neighbourhood.',
		features: ['Bright family living room', 'Modern fitted kitchen', 'Private bedrooms', 'Secure parking and gated access'],
		gallery: [
			{ src: chevronCoverImage, alt: 'Exterior of the Chevron apartment' },
			{ src: chevronLivingRoomImage, alt: 'Living room of the Chevron apartment' },
			{ src: chevronKitchenImage, alt: 'Kitchen of the Chevron apartment' },
			{ src: chevronBedroomImage, alt: 'Bedroom of the Chevron apartment' },
			{ src: chevronBathroomImage, alt: 'Bathroom of the Chevron apartment' },
		],
	},
	'ikoyi-apartment': {
		title: 'The nightfall terrace home',
		location: 'Ikoyi, Lagos',
		price: '₦110,000,000',
		label: 'New listing · Ikoyi',
		bedrooms: '5',
		bathrooms: '5',
		size: '410',
		parking: '3',
		description: 'This refined Ikoyi residence blends generous living spaces with polished finishes and a sense of calm sophistication for elevated urban living.',
		secondDescription: 'From the welcoming lounge to the well-appointed bedrooms and coffee room, every detail is designed to feel both grand and comfortably liveable.',
		features: ['Sunlit living room with terrace feel', 'Chef-inspired kitchen', 'Luxury principal suite', 'Dedicated coffee room and secure parking'],
		gallery: [
			{ src: ikoyiCoverImage, alt: 'Exterior of the Ikoyi apartment' },
			{ src: ikoyiLivingRoomImage, alt: 'Living room of the Ikoyi apartment' },
			{ src: ikoyiKitchenImage, alt: 'Kitchen of the Ikoyi apartment' },
			{ src: ikoyiBedroomImage, alt: 'Bedroom of the Ikoyi apartment' },
			{ src: ikoyiBathroomImage, alt: 'Bathroom of the Ikoyi apartment' },
			{ src: ikoyiCoffeeRoomImage, alt: 'Coffee room of the Ikoyi apartment' },
		],
	},
	'yaba-apartment': {
		title: 'Quiet modern townhouse',
		location: 'Yaba, Lagos',
		price: '₦48,000,000',
		label: 'Verified home · Yaba',
		bedrooms: '3',
		bathrooms: '2',
		size: '190',
		parking: '1',
		description: 'This modern Yaba home offers a smart balance of comfort, practicality, and stylish urban living in a highly connected Lagos neighbourhood.',
		secondDescription: 'With bright interior details and flexible living zones, it is ideal for couples, small families, or anyone seeking a calm, well-located home base.',
		features: ['Modern open-plan living', 'Fitted kitchen and dining space', 'Comfortable bedrooms', 'Convenient access to Yaba amenities'],
		gallery: [
			{ src: yabaCoverImage, alt: 'Exterior of the Yaba apartment' },
			{ src: yabaLivingRoomImage, alt: 'Living room of the Yaba apartment' },
			{ src: yabaKitchenImage, alt: 'Kitchen of the Yaba apartment' },
			{ src: yabaBedroomImage, alt: 'Bedroom of the Yaba apartment' },
			{ src: yabaBathroomImage, alt: 'Bathroom of the Yaba apartment' },
			{ src: yabaCoffeeRoomImage, alt: 'Coffee room of the Yaba apartment' },
		],
	},
}

const property = computed(() => properties[route.params.slug] || properties['lekki-duplex'])
</script>

<template>
	<div class="details-page">
		<Nav />

		<main>
			<div class="details-shell">
				<router-link class="back-link" to="/buy">← Back to properties</router-link>
				<div class="property-heading">
					<div>
						<p class="eyebrow">{{ property.label }}</p>
						<h1>{{ property.title }}</h1>
						<p class="location">{{ property.location }}</p>
					</div>
					<p class="price">{{ property.price }}</p>
				</div>

				<section class="gallery" aria-label="Property gallery">
					<div class="gallery-main">
						<img :src="property.gallery[0].src" :alt="property.gallery[0].alt" />
					</div>
					<div class="gallery-grid">
						<img v-for="image in property.gallery.slice(1)" :key="image.src" :src="image.src" :alt="image.alt" />
					</div>
				</section>

				<div class="details-layout">
					<section class="property-description">
						<div class="facts">
							<div><strong>{{ property.bedrooms }}</strong><span>Bedrooms</span></div>
							<div><strong>{{ property.bathrooms }}</strong><span>Bathrooms</span></div>
							<div><strong>{{ property.size }}</strong><span>Square metres</span></div>
							<div><strong>{{ property.parking }}</strong><span>Parking spaces</span></div>
						</div>
						<p class="eyebrow">About this home</p>
						<h2>Space for the life you are building.</h2>
						<p>{{ property.description }}</p>
						<p>{{ property.secondDescription }}</p>

						<div class="features">
							<h3>Home features</h3>
							<ul>
								<li v-for="feature in property.features" :key="feature">{{ feature }}</li>
							</ul>
						</div>
					</section>

					<aside class="enquiry-card">
						<p class="eyebrow">Interested in this home?</p>
						<h2>Take the next step.</h2>
						<p>Send an enquiry and our team will help you arrange a viewing.</p>
						<form action="#" method="post">
							<label>Name<input type="text" name="name" placeholder="Your name" required /></label>
							<label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
							<label>Message<textarea name="message" rows="4" placeholder="I would like to arrange a viewing."></textarea></label>
							<button class="submit-button" type="submit">Request a viewing <span aria-hidden="true">→</span></button>
						</form>
					</aside>
				</div>
			</div>
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

.details-page {
  background: #f7f4ec;
}

.details-shell {
  width: min(1180px, 88%);
  margin: 0 auto;
  padding: 55px 0 100px;
}

.back-link {
  color: #69737d;
  font-size: 1.4rem;
  text-decoration: none;
}

.back-link:hover {
  color: #c1652f;
}

.property-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 25px;
  margin: 50px 0 35px;
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
h2,
h3 {
  margin: 0;
  font-family: 'Fraunces', serif;
  font-weight: 500;
}

h1 {
  font-size: clamp(2.7rem, 6vw, 5.2rem);
  line-height: 0.98;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
}

h3 {
  font-size: 1.5rem;
}

.location {
  margin: 16px 0 0;
  color: #69737d;
}

.price {
  margin: 0;
  color: #c1652f;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  white-space: nowrap;
}

.gallery {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 12px;
}

.gallery-main,
.gallery-grid {
  min-height: 0;
  overflow: hidden;
}

.gallery-main {
  aspect-ratio: 1.1 / 1;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.gallery img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery img:hover {
  transform: scale(1.03);
}

.details-layout {
  display: grid;
  grid-template-columns: 1.25fr minmax(300px, 0.75fr);
  gap: 85px;
  margin-top: 85px;
}

.facts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 0 0 35px;
  margin-bottom: 45px;
  border-bottom: 1px solid #d4d2ca;
}

.facts div {
  display: grid;
  gap: 8px;
}

.facts strong {
  color: #c1652f;
  font: 500 2rem 'Fraunces', serif;
}

.facts span {
  color: #69737d;
  font-size: 0.75rem;
}

.property-description > p:not(.eyebrow) {
  max-width: 670px;
  color: #69737d;
  line-height: 1.8;
}

.property-description h2 {
  max-width: 560px;
  margin-bottom: 25px;
}

.features {
  margin-top: 45px;
  padding-top: 30px;
  border-top: 1px solid #d4d2ca;
}

.features h3 {
  margin-bottom: 18px;
}

.features ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px 30px;
  padding: 0;
  list-style: none;
  color: #56616c;
  font-size: 0.87rem;
}

.features li::before {
  content: '✓';
  margin-right: 10px;
  color: #c1652f;
  font-weight: 700;
}

.enquiry-card {
  align-self: start;
  padding: 30px;
  background: #1b2a41;
  color: #fffaf0;
  box-shadow: 0 12px 28px rgba(27, 42, 65, 0.12);
}

.enquiry-card .eyebrow {
  color: #f0b58c;
}

.enquiry-card h2 {
  margin-bottom: 15px;
}

.enquiry-card > p:not(.eyebrow) {
  color: #d8e0e6;
  font-size: 0.85rem;
  line-height: 1.6;
}

.enquiry-card form {
  display: grid;
  gap: 16px;
  margin-top: 25px;
}

.enquiry-card label {
  display: grid;
  gap: 7px;
  color: #d8e0e6;
  font-size: 0.75rem;
  font-weight: 700;
}

.enquiry-card input,
.enquiry-card textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #607084;
  border-radius: 3px;
  outline: 0;
  background: #243b57;
  color: #fffaf0;
  font: 0.85rem 'DM Sans', sans-serif;
  resize: vertical;
}

.enquiry-card input::placeholder,
.enquiry-card textarea::placeholder {
  color: #acb9c4;
}

.enquiry-card input:focus,
.enquiry-card textarea:focus {
  border-color: #f0b58c;
}

.submit-button {
  padding: 14px;
  border: 0;
  border-radius: 3px;
  background: #c1652f;
  color: white;
  font: 700 0.85rem 'DM Sans', sans-serif;
  cursor: pointer;
}

.submit-button span {
  margin-left: 6px;
  font-size: 1.05rem;
}

@media (max-width: 800px) {
  .details-shell {
    width: 90%;
    padding-top: 35px;
  }

  .property-heading {
    align-items: start;
    flex-direction: column;
    margin-top: 35px;
  }

  .gallery {
    grid-template-columns: 1fr;
  }

  .gallery-main {
    aspect-ratio: 1.2 / 1;
  }

  .gallery-grid {
    aspect-ratio: 1.2 / 1;
  }

  .details-layout {
    grid-template-columns: 1fr;
    gap: 50px;
    margin-top: 55px;
  }

  .enquiry-card {
    order: -1;
  }
}

@media (max-width: 500px) {
  .facts {
    grid-template-columns: repeat(2, 1fr);
  }

  .features ul {
    grid-template-columns: 1fr;
  }

  .enquiry-card {
    padding: 24px;
  }
}
</style>
