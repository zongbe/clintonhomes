<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import lekkiCover from '@/assets/images/properties/lekki-duplex-cover.webp'
import chevronCover from '@/assets/images/properties/chevron-apartment-cover.webp'
import ikoyiCover from '@/assets/images/properties/ikoyi-apartment-cover.webp'
import yabaCover from '@/assets/images/properties/yaba-apartment-cover.webp'
import losAngelesHome from '@/assets/images/sell.jpg'
import newYorkHome from '@/assets/images/rent.jpg'
import austinHome from '@/assets/images/buy.jpg'
import atlantaHome from '@/assets/images/co-living.jpg'
import miamiHome from '@/assets/images/lease.jpg'
import seattleHome from '@/assets/images/night.jpg'

const router = useRouter()
const route = useRoute()

const properties = [
	{
		image: lekkiCover,
		slug: 'lekki-duplex',
		price: '₦85,000,000',
		title: 'Contemporary family duplex',
		location: 'Lekki Phase 1, Lagos',
		details: '4 Beds  ·  3 Baths  ·  320 sqm',
		tag: 'Featured',
		categories: ['house', 'large', 'parking'],
	},
	{
		image: chevronCover,
		slug: 'chevron-apartment',
		price: '₦62,500,000',
		title: 'Warm family residence',
		location: 'Chevron, Lagos',
		details: '3 Beds  ·  3 Baths  ·  245 sqm',
		tag: 'Verified',
		categories: ['house', 'large'],
	},
	{
		image: ikoyiCover,
		slug: 'ikoyi-apartment',
		price: '₦110,000,000',
		title: 'The nightfall terrace home',
		location: 'Ikoyi, Lagos',
		details: '5 Beds  ·  5 Baths  ·  410 sqm',
		tag: 'New listing',
		categories: ['apartment', 'large', 'parking'],
	},
	{
		image: yabaCover,
		slug: 'yaba-apartment',
		price: '₦48,000,000',
		title: 'Quiet modern townhouse',
		location: 'Yaba, Lagos',
		details: '3 Beds  ·  2 Baths  ·  190 sqm',
		tag: 'Verified',
		categories: ['apartment', 'large'],
	},
	{
		image: losAngelesHome,
		slug: 'sunset-blvd-home',
		price: '₦895,000,000',
		title: 'Sunset garden residence',
		location: 'Ikoyi, Lagos',
		details: '5 Beds  ·  4 Baths  ·  3,250 sq ft',
		tag: 'Featured',
		categories: ['house', 'large', 'parking'],
	},
	{
		image: newYorkHome,
		slug: 'park-avenue-home',
		price: '₦1,250,000,000',
		title: 'Park Avenue city apartment',
		location: 'Wuse, Abuja',
		details: '4 Beds  ·  3 Baths  ·  2,850 sq ft',
		tag: 'New listing',
		categories: ['apartment', 'large'],
	},
	{
		image: austinHome,
		slug: 'congress-avenue-home',
		price: '₦735,000,000',
		title: 'Congress Avenue modern home',
		location: 'Lekki Phase 1, Lagos',
		details: '6 Beds  ·  5 Baths  ·  3,500 sq ft',
		tag: 'Verified',
		categories: ['house', 'parking'],
	},
	{
		image: atlantaHome,
		slug: 'peachtree-street-home',
		price: '₦680,000,000',
		title: 'Peachtree street townhouse',
		location: 'Gwarinpa, Abuja',
		details: '3 Beds  ·  3 Baths  ·  1,900 sq ft',
		tag: 'Verified',
		categories: ['house', 'large'],
	},
	{
		image: miamiHome,
		slug: 'lincoln-road-home',
		price: '₦925,000,000',
		title: 'Lincoln Road coastal retreat',
		location: 'Ikeja, Lagos',
		details: '4 Beds  ·  4 Baths  ·  2,400 sq ft',
		tag: 'Featured',
		categories: ['apartment', 'parking'],
	},
	{
		image: seattleHome,
		slug: 'third-avenue-home',
		price: '₦820,000,000',
		title: 'Third Avenue light-filled home',
		location: 'Victoria Island, Lagos',
		details: '5 Beds  ·  4 Baths  ·  2,900 sq ft',
		tag: 'New listing',
		categories: ['apartment', 'parking'],
	},
]

const searchLocation = ref('')
const selectedType = ref('Any type')
const selectedBudget = ref('Any budget')
const activeCategory = ref('all')

watch(
	() => route.query.location,
	(location) => {
		searchLocation.value = typeof location === 'string' ? location : ''
	},
	{ immediate: true },
)

function getPriceValue(priceText) {
	return Number(priceText.replace(/[^0-9]/g, ''))
}

const filteredProperties = computed(() => {
	const keyword = searchLocation.value.trim().toLowerCase()

	return properties.filter((property) => {
		const matchesKeyword = !keyword ||
			property.title.toLowerCase().includes(keyword) ||
			property.location.toLowerCase().includes(keyword)

		const matchesType = selectedType.value === 'Any type' ||
			(selectedType.value === 'House' && property.categories.includes('house')) ||
			(selectedType.value === 'Apartment' && property.categories.includes('apartment')) ||
			(selectedType.value === 'Duplex' && property.title.toLowerCase().includes('duplex'))

		const priceValue = getPriceValue(property.price)
		const matchesBudget = selectedBudget.value === 'Any budget' ||
			(selectedBudget.value === 'Under ₦50m' && priceValue < 50000000) ||
			(selectedBudget.value === '₦50m - ₦100m' && priceValue >= 50000000 && priceValue <= 100000000) ||
			(selectedBudget.value === 'Over ₦100m' && priceValue > 100000000)

		const matchesCategory = activeCategory.value === 'all' || property.categories.includes(activeCategory.value)

		return matchesKeyword && matchesType && matchesBudget && matchesCategory
	})
})

function openPropertyDetails(slug) {
	router.push(`/properties/${slug}`)
}
</script>

<template>
	<div class="buy-page">
		<Nav />

		<header class="buy-hero">
			<div class="hero-inner">
				<p class="eyebrow">Find your next address</p>
				<h1>Homes worth coming home to.</h1>
				<p class="hero-intro">Explore carefully selected properties and take the next step with confidence.</p>

				<form class="search-bar" @submit.prevent>
					<label class="search-location">
						<span>Location</span>
						<input v-model="searchLocation" type="search" name="location" placeholder="City, neighbourhood, or landmark" />
					</label>
					<label>
						<span>Property type</span>
						<select v-model="selectedType" name="type">
							<option>Any type</option>
							<option>House</option>
							<option>Apartment</option>
							<option>Duplex</option>
						</select>
					</label>
					<label>
						<span>Budget</span>
						<select v-model="selectedBudget" name="budget">
							<option>Any budget</option>
							<option>Under ₦50m</option>
							<option>₦50m - ₦100m</option>
							<option>Over ₦100m</option>
						</select>
					</label>
					<button class="search-button" type="submit">Search <span aria-hidden="true">→</span></button>
				</form>
			</div>
		</header>

		<main id="properties" class="property-content">
			<div class="content-heading">
				<div>
					<p class="eyebrow">Available now</p>
					<h2>Properties you may love</h2>
				</div>
				<label class="sort-control">
					<span>Sort by</span>
					<select name="sort">
						<option>Recommended</option>
						<option>Newest listings</option>
						<option>Price: low to high</option>
						<option>Price: high to low</option>
					</select>
				</label>
			</div>

			<input v-model="activeCategory" class="filter-control" id="filter-all" type="radio" name="property-filter" value="all" checked />
			<input v-model="activeCategory" class="filter-control" id="filter-houses" type="radio" name="property-filter" value="house" />
			<input v-model="activeCategory" class="filter-control" id="filter-apartments" type="radio" name="property-filter" value="apartment" />
			<input v-model="activeCategory" class="filter-control" id="filter-large" type="radio" name="property-filter" value="large" />
			<input v-model="activeCategory" class="filter-control" id="filter-parking" type="radio" name="property-filter" value="parking" />

			<div class="filter-row" aria-label="Property filters">
				<label class="filter-button" for="filter-all">All homes</label>
				<label class="filter-button" for="filter-houses">Houses</label>
				<label class="filter-button" for="filter-apartments">Apartments</label>
				<label class="filter-button" for="filter-large">3+ bedrooms</label>
				<label class="filter-button" for="filter-parking">Parking</label>
			</div>

			<div v-if="filteredProperties.length === 0" class="no-results">
				<p>No homes match your current search.</p>
			</div>

			<div v-else class="listing-grid">
				<article v-for="property in filteredProperties" :key="property.title" class="property-card" :class="property.categories">
					<div class="property-image" @click="openPropertyDetails(property.slug)" role="button" tabindex="0" @keydown.enter.prevent="openPropertyDetails(property.slug)" @keydown.space.prevent="openPropertyDetails(property.slug)">
						<img :src="property.image" :alt="property.title" />
						<span class="property-tag">{{ property.tag }}</span>
						<button class="favorite-button" type="button" aria-label="Save property">♡</button>
					</div>
					<div class="property-info">
						<p class="property-price">{{ property.price }}</p>
						<h3>{{ property.title }}</h3>
						<p class="property-location">{{ property.location }}</p>
						<p class="property-details">{{ property.details }}</p>
						<router-link class="details-link" :to="`/properties/${property.slug}`">View property <span aria-hidden="true">→</span></router-link>
					</div>
				</article>
			</div>
		</main>

		<section class="trust-band">
			<div>
				<p class="eyebrow">A more confident move</p>
				<h2>Every home should feel like the right decision.</h2>
			</div>
			<p>Browse verified homes, compare what matters, and connect directly when you are ready.</p>
		</section>

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

.buy-page {
	background: #f7f4ec;
}

.buy-hero {
	padding: 92px 6% 110px;
	background: #1b2a41;
	color: #fffaf0;
}

.hero-inner,
.property-content {
	width: min(1180px, 100%);
	margin: 0 auto;
}

.eyebrow {
	margin: 0 0 14px;
	color: #c1652f;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.14em;
	text-transform: uppercase;
}

.buy-hero .eyebrow {
	color: #f0b58c;
}

h1,
h2,
h3 {
	margin: 0;
	font-family: 'Fraunces', serif;
	font-weight: 500;
}

h1 {
	max-width: 650px;
	font-size: clamp(3rem, 7vw, 6.2rem);
	line-height: 0.96;
}

.hero-intro {
	max-width: 510px;
	margin: 25px 0 0;
	color: #d8e0e6;
	font-size: 1.05rem;
	line-height: 1.7;
}

.search-bar {
		display: grid;
	grid-template-columns: 1.7fr 1fr 1fr auto;
	gap: 1px;
	margin-top: 50px;
	padding: 8px;
	border-radius: 6px;
	background: #fffdf8;
}

.search-bar label {
	display: grid;
	gap: 7px;
	padding: 10px 16px;
	color: #69737d;
	font-size: 0.7rem;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
}

.search-bar input,
.search-bar select,
.sort-control select {
	width: 100%;
	border: 0;
	outline: 0;
	background: transparent;
	color: #1b2a41;
	font: 500 0.9rem 'DM Sans', sans-serif;
}

.search-bar input::placeholder {
	color: #899198;
}

.search-button {
	min-width: 130px;
	border: 0;
	border-radius: 4px;
	background: #c1652f;
	color: white;
	font: 700 0.9rem 'DM Sans', sans-serif;
	cursor: pointer;
}

.search-button span,
.details-link span {
	margin-left: 7px;
	font-size: 1.1rem;
}

.property-content {
	padding: 85px 0 100px;
}

.content-heading {
	display: flex;
	align-items: end;
	justify-content: space-between;
	gap: 24px;
}

h2 {
	font-size: clamp(2rem, 4vw, 3.4rem);
	line-height: 1.05;
}

.sort-control {
	display: grid;
	gap: 7px;
	min-width: 180px;
	color: #69737d;
	font-size: 0.72rem;
	font-weight: 700;
	text-transform: uppercase;
}

.sort-control select {
	padding: 10px 0;
	border-bottom: 1px solid #b8b7b0;
}

.filter-row {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin: 40px 0 28px;
}

.filter-control {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}

.filter-button {
	display: inline-block;
	padding: 10px 16px;
	border: 1px solid #d4d2ca;
	border-radius: 999px;
	background: transparent;
	color: #56616c;
	font: 500 0.8rem 'DM Sans', sans-serif;
	cursor: pointer;
}

.filter-button:hover,
#filter-all:checked ~ .filter-row .filter-button[for='filter-all'],
#filter-houses:checked ~ .filter-row .filter-button[for='filter-houses'],
#filter-apartments:checked ~ .filter-row .filter-button[for='filter-apartments'],
#filter-large:checked ~ .filter-row .filter-button[for='filter-large'],
#filter-parking:checked ~ .filter-row .filter-button[for='filter-parking'] {
	border-color: #1b2a41;
	background: #1b2a41;
	color: #fffaf0;
}

#filter-houses:checked ~ .listing-grid .property-card:not(.house),
#filter-apartments:checked ~ .listing-grid .property-card:not(.apartment),
#filter-large:checked ~ .listing-grid .property-card:not(.large),
#filter-parking:checked ~ .listing-grid .property-card:not(.parking) {
	display: none;
}

.listing-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
}

.no-results {
	margin-top: 28px;
	padding: 26px 20px;
	border: 1px solid #d4d2ca;
	border-radius: 12px;
	background: #fffdf8;
	color: #56616c;
	font-size: 1rem;
}

.property-card {
	min-width: 0;
	background: #fffdf8;
	box-shadow: 0 8px 24px rgba(27, 42, 65, 0.06);
}

.property-image {
	position: relative;
	aspect-ratio: 1 / 0.86;
	overflow: hidden;
	background: #d4d2ca;
	cursor: pointer;
	outline: none;
}

.property-image:focus-visible {
	box-shadow: inset 0 0 0 3px rgba(193, 101, 47, 0.7);
}

.property-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.4s ease;
}

.property-card:hover .property-image img {
	transform: scale(1.04);
}

.property-tag,
.favorite-button {
	position: absolute;
	top: 13px;
}

.property-tag {
	left: 13px;
	padding: 6px 9px;
	background: #fffdf8;
	color: #1b2a41;
	font-size: 0.66rem;
	font-weight: 700;
	text-transform: uppercase;
}

.favorite-button {
	right: 13px;
	width: 32px;
	height: 32px;
	border: 0;
	border-radius: 50%;
	background: #fffdf8;
	color: #1b2a41;
	font-size: 1.25rem;
	line-height: 1;
	cursor: pointer;
}

.property-info {
	padding: 20px 18px 22px;
}

.property-price {
	margin: 0 0 8px;
	color: #c1652f;
	font-size: 1rem;
	font-weight: 700;
}

h3 {
	font-size: 1.25rem;
	line-height: 1.15;
}

.property-location,
.property-details {
	margin: 8px 0 0;
	color: #69737d;
	font-size: 0.78rem;
}

.property-details {
	color: #1b2a41;
	font-weight: 600;
}

.details-link {
	display: inline-block;
	margin-top: 20px;
	color: #1b2a41;
	font-size: 0.8rem;
	font-weight: 700;
	text-decoration: none;
}

.details-link:hover {
	color: #c1652f;
}

.trust-band {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
	padding: 70px max(6%, calc((100% - 1180px) / 2));
	background: #e9e4d8;
}

.trust-band h2 {
	max-width: 570px;
}

.trust-band > p {
	max-width: 310px;
	margin: 0;
	color: #56616c;
	line-height: 1.7;
}

@media (max-width: 1100px) {
	.property-content {
		padding-right: 6%;
		padding-left: 6%;
	}

	.listing-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 800px) {
	.buy-hero {
		padding: 60px 25px 70px;
	}

	.search-bar {
		grid-template-columns: 1fr;
		gap: 8px;
		padding: 12px;
	}

	.search-bar label {
		border-bottom: 1px solid #e4e0d7;
	}

	.search-button {
		min-height: 48px;
	}

	.property-content {
		padding-top: 55px;
		padding-bottom: 65px;
	}

	.content-heading,
	.trust-band {
		align-items: start;
		flex-direction: column;
	}

	.sort-control {
		width: 100%;
	}

	.trust-band {
		padding: 55px 25px;
	}
}

@media (max-width: 500px) {
	.listing-grid {
		grid-template-columns: 1fr;
	}
}
</style>
