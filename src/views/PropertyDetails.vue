<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
import victoriaCoverImage from '@/assets/images/properties/victoria-island-apartment-cover.webp'
import victoriaLivingRoomImage from '@/assets/images/properties/victoria-island-apartment-livingroom.webp'
import victoriaKitchenImage from '@/assets/images/properties/victoria-island-apartment-kitchen.webp'
import victoriaBedroomImage from '@/assets/images/properties/victoria-island-apartment-bedroom.webp'
import victoriaBathroomImage from '@/assets/images/properties/victoria-island-apartment-bathroom.webp'
import wuseCoverImage from '@/assets/images/properties/wuse-duplex-cover.webp'
import wuseLivingRoomImage from '@/assets/images/properties/wuse-duplex-livingroom.webp'
import wuseKitchenImage from '@/assets/images/properties/wuse-duplex-kitchen.webp'
import wuseBedroomImage from '@/assets/images/properties/wuse-duplex-bedroom.webp'
import wuseBathroomImage from '@/assets/images/properties/wuse-duplex-bathroom.webp'
import abeokutaCoverImage from '@/assets/images/properties/abeokuta-apartment-cover.webp'
import abeokutaLivingRoomImage from '@/assets/images/properties/abeokuta-apartment-livingroom.webp'
import abeokutaKitchenImage from '@/assets/images/properties/abeokuta-apartment-kitchen.webp'
import abeokutaBedroomImage from '@/assets/images/properties/abeokuta-apartment-bedroom.webp'
import abeokutaBathroomImage from '@/assets/images/properties/abeokuta-apartment-bathroom.webp'
import gwarinpaCoverImage from '@/assets/images/properties/gwarinpa-duplex-cover.webp'
import gwarinpaLivingRoomImage from '@/assets/images/properties/gwarinpa-duplex-livingroom.webp'
import gwarinpaKitchenImage from '@/assets/images/properties/gwarinpa-duplex-kitchen.webp'
import gwarinpaBedroomImage from '@/assets/images/properties/gwarinpa-duplex-bedroom.webp'
import gwarinpaBathroomImage from '@/assets/images/properties/gwarinpa-duplex-bathroom.webp'
import ikejaCoverImage from '@/assets/images/properties/ikeja-apartment-cover.webp'
import ikejaLivingRoomImage from '@/assets/images/properties/ikeja-apartment-livingroom.webp'
import ikejaKitchenImage from '@/assets/images/properties/ikeja-apartment-kitchen.webp'
import ikejaBedroomImage from '@/assets/images/properties/ikeja-apartment-bedroom.webp'
import ikejaBathroomImage from '@/assets/images/properties/ikeja-apartment-bathroom.webp'
import festacCoverImage from '@/assets/images/properties/festac-apartment-cover.webp'
import festacLivingRoomImage from '@/assets/images/properties/festac-apartment-livingroom.webp'
import festacKitchenImage from '@/assets/images/properties/festac-apartment-kitchen.webp'
import festacBedroomImage from '@/assets/images/properties/festac-apartment-bedroom.webp'
import festacBathroomImage from '@/assets/images/properties/festac-apartment-bathroom.webp'

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
		landlord: {
			name: 'Hammed Yahyah',
			slug: 'clinton-homes-lekki',
		},
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
		landlord: {
			name: 'Olanrewaju Gideon',
			slug: 'clinton-homes',
		},
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
		landlord: {
			name: 'Gabriel Chris',
			slug: 'clinton-homes-ikoyi',
		},
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
		landlord: {
			name: 'Chukuemeka Promisess',
			slug: 'clinton-homes-yaba',
		},
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
	'sunset-blvd-home': {
		title: 'Sunset garden residence',
		location: 'Victoria Island, Lagos',
		price: '₦895,000,000',
		label: 'Featured home · Victoria Island',
		bedrooms: '5',
		bathrooms: '4',
		size: '3250',
		parking: '3',
		landlord: {
			name: 'Aisha Okafor',
			slug: 'clinton-homes-victoria-island',
		},
		description: 'A refined Victoria Island home designed for elevated family living, with generous rooms, layered textures, and outdoor spaces that invite relaxed entertaining.',
		secondDescription: 'From the expansive lounge to the garden-facing finishings throughout, every detail is chosen to balance sophistication with comfortable everyday life.',
		features: ['Garden-facing living room', 'Chef-ready kitchen and dining', 'Primary suite with private retreat', 'Secure parking and outdoor entertaining'],
		gallery: [
			{ src: victoriaCoverImage, alt: 'Exterior of the Victoria Island residence' },
			{ src: victoriaLivingRoomImage, alt: 'Living room of the Victoria Island residence' },
			{ src: victoriaKitchenImage, alt: 'Kitchen of the Victoria Island residence' },
			{ src: victoriaBedroomImage, alt: 'Bedroom of the Victoria Island residence' },
			{ src: victoriaBathroomImage, alt: 'Bathroom of the Victoria Island residence' },
		],
	},
	'park-avenue-home': {
		title: 'Park Avenue city apartment',
		location: 'Wuse, Abuja',
		price: '₦1,250,000,000',
		label: 'New listing · Wuse',
		bedrooms: '4',
		bathrooms: '3',
		size: '2850',
		parking: '2',
		landlord: {
			name: 'Musa Bello',
			slug: 'clinton-homes-wuse',
		},
		description: 'This Wuse residence brings together urban convenience and polished comfort, offering generous living spaces and a calm, contemporary atmosphere.',
		secondDescription: 'The apartment balances family practicality with elevated finishing, making it ideal for city buyers seeking flexibility and modern convenience.',
		features: ['Open-plan living spaces', 'Elegant fitted kitchen', 'Spacious private bedrooms', 'Quiet access in a central neighbourhood'],
		gallery: [
      { src: wuseCoverImage, alt: 'Exterior of the Wuse residence' },
			{ src: wuseLivingRoomImage, alt: 'Living room of the Wuse residence' },
			{ src: wuseKitchenImage, alt: 'Kitchen of the Wuse residence' },
			{ src: wuseBedroomImage, alt: 'Bedroom of the Wuse residence' },
			{ src: wuseBathroomImage, alt: 'Bathroom of the Wuse residence' },
		],
	},
	'congress-avenue-home': {
		title: 'Congress Avenue modern home',
		location: 'Abeokuta, Ogun',
		price: '₦735,000,000',
		label: 'Verified home · Abeokuta',
		bedrooms: '6',
		bathrooms: '5',
		size: '3500',
		parking: '3',
		landlord: {
			name: 'Tosin Adeyemi',
			slug: 'clinton-homes-abeokuta',
		},
		description: 'Set in a serene Ogun setting, this modern family home offers flexible spaces, functional living zones, and a welcoming sense of light throughout.',
		secondDescription: 'With elegant proportions and thoughtful detailing, it is a spacious option for growing families, remote workers, and confident investors alike.',
		features: ['Large family living area', 'Well-designed kitchen and utility zone', 'Multiple bedrooms and baths', 'Comfortable parking and garden access'],
		gallery: [
      { src: abeokutaCoverImage, alt: 'Exterior of the Abeokuta home' },
			{ src: abeokutaLivingRoomImage, alt: 'Living room of the Abeokuta home' },
			{ src: abeokutaKitchenImage, alt: 'Kitchen of the Abeokuta home' },
			{ src: abeokutaBedroomImage, alt: 'Bedroom of the Abeokuta home' },
			{ src: abeokutaBathroomImage, alt: 'Bathroom of the Abeokuta home' },
		],
	},
	'peachtree-street-home': {
		title: 'Peachtree street townhouse',
		location: 'Gwarinpa, Abuja',
		price: '₦680,000,000',
		label: 'Verified home · Gwarinpa',
		bedrooms: '3',
		bathrooms: '3',
		size: '1900',
		parking: '2',
		landlord: {
			name: 'Ifeoma Okafor',
			slug: 'clinton-homes-gwarinpa',
		},
		description: 'This townhouse in Gwarinpa combines generous daily living with an easy-flow design for city families who value convenience and comfort.',
		secondDescription: 'The home offers a strong mix of practicality and elegance, with comfortable spaces that support both productivity and everyday family life.',
		features: ['Bright open living spaces', 'Functional kitchen and dining', 'Private bedrooms and baths', 'Good access to key Abuja districts'],
		gallery: [
      { src: gwarinpaCoverImage, alt: 'Exterior of the Gwarinpa townhouse' },
			{ src: gwarinpaLivingRoomImage, alt: 'Living room of the Gwarinpa townhouse' },
			{ src: gwarinpaKitchenImage, alt: 'Kitchen of the Gwarinpa townhouse' },
			{ src: gwarinpaBedroomImage, alt: 'Bedroom of the Gwarinpa townhouse' },
			{ src: gwarinpaBathroomImage, alt: 'Bathroom of the Gwarinpa townhouse' },
		],
	},
	'lincoln-road-home': {
		title: 'Lincoln Road coastal retreat',
		location: 'Ikeja, Lagos',
		price: '₦925,000,000',
		label: 'Featured home · Ikeja',
		bedrooms: '4',
		bathrooms: '4',
		size: '2400',
		parking: '2',
		landlord: {
			name: 'Daniel Nwachukwu',
			slug: 'clinton-homes-ikeja',
		},
		description: 'This Ikeja residence brings a relaxed, resort-inspired feel to everyday city living, with spacious interiors and polished, easy-to-live-with finishes.',
		secondDescription: 'Its airy layout and welcoming details create a home that feels both luxurious and highly practical for a modern household.',
		features: ['Spacious lounge and dining', 'Premium kitchen finishings', 'Private bedroom suites', 'Secure parking and urban convenience'],
		gallery: [
      { src: ikejaCoverImage, alt: 'Cover image of the Ikeja residence' },
			{ src: ikejaLivingRoomImage, alt: 'Living room of the Ikeja residence' },
			{ src: ikejaKitchenImage, alt: 'Kitchen of the Ikeja residence' },
			{ src: ikejaBedroomImage, alt: 'Bedroom of the Ikeja residence' },
			{ src: ikejaBathroomImage, alt: 'Bathroom of the Ikeja residence' },
		],
	},
	'third-avenue-home': {
		title: 'Third Avenue light-filled home',
		location: 'Festac, Lagos',
		price: '₦820,000,000',
		label: 'New listing · Festac',
		bedrooms: '5',
		bathrooms: '4',
		size: '2900',
		parking: '2',
		landlord: {
			name: 'Kehinde Ajayi',
			slug: 'clinton-homes-festac',
		},
		description: 'With bright rooms and an easy living flow, this Festac home is designed for contemporary comfort, flexible family routines, and effortless hosting.',
		secondDescription: 'The generous proportions lend themselves beautifully to both daily life and occasional gatherings, while practical touches keep every space easy to enjoy.',
		features: ['Light-filled rooms', 'Well-appointed kitchen', 'Generous bedrooms and baths', 'Thoughtful family-focused layout'],
		gallery: [
			{ src: festacCoverImage, alt: 'Exterior of the Festac home' },
			{ src: festacLivingRoomImage, alt: 'Living room of the Festac home' },
			{ src: festacKitchenImage, alt: 'Kitchen of the Festac home' },
			{ src: festacBedroomImage, alt: 'Bedroom of the Festac home' },
			{ src: festacBathroomImage, alt: 'Bathroom of the Festac home' },
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
				<button class="back-link back-button" type="button" @click="goBack">← Back to properties</button>
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

					<aside class="landlord-card">
						<p class="eyebrow">Property manager</p>
						<h2>{{ property.landlord.name }}</h2>
						<p class="manager-copy">Trusted local support for this listing, with responsive guidance from viewing to closing.</p>

						<div class="landlord-cta">
							<p><strong>Why buyers choose us</strong></p>
							<ul>
								<li>Verified listing details</li>
								<li>Fast viewing coordination</li>
								<li>Clear ownership and location info</li>
							</ul>
						</div>

						<router-link v-if="isSignedIn" class="landlord-link" :to="`/landlord/${property.landlord.slug}`">
							View landlord profile <span aria-hidden="true">→</span>
						</router-link>
						<button v-else class="landlord-link locked" type="button" @click="router.push('/login')">
							Login to view landlord details <span aria-hidden="true">→</span>
						</button>
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

.landlord-cta {
  margin: 18px 0 22px;
  padding: 18px 18px 12px;
  border-radius: 16px;
  background: rgba(193, 101, 47, 0.08);
  border: 1px solid rgba(193, 101, 47, 0.12);
}

.landlord-cta p {
  margin: 0 0 10px;
  color: #f0d5bf;
}

.landlord-cta ul {
  margin: 0;
  padding-left: 18px;
  color: #f4e9dc;
  line-height: 1.8;
  font-size: 0.82rem;
}

.landlord-card {
  align-self: start;
  padding: 30px;
  background: #1b2a41;
  color: #fffaf0;
  box-shadow: 0 12px 28px rgba(27, 42, 65, 0.12);
}

.landlord-card .eyebrow {
  color: #f0b58c;
}

.landlord-card h2 {
  margin-bottom: 15px;
}

.manager-copy {
  color: #d8e0e6;
  font-size: 0.85rem;
  line-height: 1.6;
}

.landlord-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #f0b58c;
  font-weight: 700;
  text-decoration: none;
}

.landlord-link:hover {
  color: #ffd7b8;
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
