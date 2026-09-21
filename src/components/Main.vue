<script setup>
import { useRouter } from 'vue-router'
import sellImage from '@/assets/images/sell.webp'
import rentImage from '@/assets/images/rent.webp'
import buyImage from '@/assets/images/buy.webp'
import coLivingImage from '@/assets/images/co-living.webp'
import leaseImage from '@/assets/images/lease.webp'
import nightImage from '@/assets/images/night.webp'

const router = useRouter()

const featuredProperties = [
  {
    slug: 'sunset-blvd-home',
    image: sellImage,
    price: '₦ 895,000,000',
    details: '5 beds   4 baths   3,250 sq ft',
    location: 'Victoria Island, Lagos',
  },
  {
    slug: 'park-avenue-home',
    image: rentImage,
    price: '₦ 1,250,000,000',
    details: '4 beds   3 baths   2,850 sq ft',
    location: 'Wuse, Abuja',
  },
  {
    slug: 'congress-avenue-home',
    image: buyImage,
    price: '₦ 735,000,000',
    details: '6 beds   5 baths   3,500 sq ft',
    location: 'Abeokuta, Ogun',
  },
  {
    slug: 'peachtree-street-home',
    image: coLivingImage,
    price: '₦ 680,000,000',
    details: '3 beds   3 baths   1,900 sq ft',
    location: 'Gwarinpa, Abuja',
  },
  {
    slug: 'lincoln-road-home',
    image: leaseImage,
    price: '₦ 925,000,000',
    details: '4 beds   4 baths   2,400 sq ft',
    location: 'Ikeja, Lagos',
  },
  {
    slug: 'third-avenue-home',
    image: nightImage,
    price: '₦ 820,000,000',
    details: '5 beds   4 baths   2,900 sq ft',
    location: 'Festac, Lagos',
  },
]

function openProperty(slug) {
  router.push(`/properties/${slug}`)
}
</script>

<template>
    <section class="main">
        <div class="main_content">
            <h1>A Home for Every Chapter</h1>
            <p>From a few nights to forever — One place to find it. </p>
        </div>
    </section>

    <div class="home_cards">
      <div v-for="property in featuredProperties" :key="property.slug" class="listing_card">
        <div class="home_image">
          <img :src="property.image" :alt="property.location" height="456" width="456" />
          <div class="image-overlay"></div>
        </div>
        <div class="listing">
          <span>Listed By Clinton Homes</span>
        </div>
        <div class="listing-card_info">
          <p class="listing-card_price">{{ property.price }}</p>
          <p class="listing-card_details">{{ property.details }}</p>
          <p class="listing-card_address">{{ property.location }}</p>
        </div>
        <div class="card-footer">
          <button class="view-btn" type="button" @click="openProperty(property.slug)">View Property</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
/* Color Variables */
:root {
  --primary-color: #2c3e50;
  --accent-color: #3498db;
  --text-primary: #1B2A41;
  --text-secondary: #666;
  --bg-light: #f7f4ec;
  --border-color: #e0e0e0;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.main {
  text-align: center;
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #f7f4ec 0%, #ffffff 100%);
  margin-top: 3rem;
}
.main_content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.main_content p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.home_cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.listing_card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.listing_card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.home_image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: #f0f0f0;
}

.home_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.listing_card:hover .home_image img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;
}

.listing_card:hover .image-overlay {
  background: rgba(0, 0, 0, 0.15);
}

.listing {
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, #f7f4ec 0%, #ffffff 100%);
  border-bottom: 1px solid var(--border-color);
}

.listing span {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.listing-card_info {
  flex: 1;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.listing-card_price {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
}

.listing-card_details {
  font-size: 1.4rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.listing-card_address {
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
}

.card-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--border-color);
  background: #fafafa;
}

.view-btn {
  width: 100%;
  padding: 0.875rem 1rem;
  background: linear-gradient(135deg, #C1652F 0%, #C1652F 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(27, 42, 65, 0.3);
}

.view-btn:hover {
  background: linear-gradient(135deg, #1B2A41 0%, #0f1620 100%);
  box-shadow: 0 4px 12px rgba(27, 42, 65, 0.4);
  transform: translateY(-2px);
}

.view-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main_content h1 {
    font-size: 2rem;
  }

  .home_cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  .home_image {
    height: 240px;
  }

  .listing-card_price {
    font-size: 1.5rem;
  }
}
</style>