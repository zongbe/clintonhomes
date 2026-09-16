<script setup>

</script>

<template>
	<section id="reviews" class="reviews" aria-labelledby="reviews-title">
		<div class="reviews__header">
			<div>
				<span class="eyebrow">Loved by our clients</span>
				<h2 id="reviews-title">Good homes start with good people.</h2>
			</div>
			<div class="trust-score" aria-label="Rated 4.9 out of 5 by over 120 clients">
				<strong>4.9</strong>
				<span class="stars" aria-hidden="true">★★★★★</span>
				<small>From 120+ happy clients</small>
			</div>
		</div>

		<div class="reviews__grid">
			<article class="review-card">
				<div class="review-card__top">
					<span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
					<span class="quote-mark" aria-hidden="true">&ldquo;</span>
				</div>
				<blockquote>Clinton Homes made the entire process feel simple. We found a place we love and never felt rushed into a decision.</blockquote>
				<footer class="review-card__author">
					<span class="avatar" aria-hidden="true">AO</span>
					<span>
						<strong>Amara Okafor</strong>
						<small>Home buyer</small>
					</span>
				</footer>
			</article>

			<article class="review-card">
				<div class="review-card__top">
					<span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
					<span class="quote-mark" aria-hidden="true">&ldquo;</span>
				</div>
				<blockquote>The listing was exactly as described, and the team was there whenever we had a question. That level of care is rare.</blockquote>
				<footer class="review-card__author">
					<span class="avatar" aria-hidden="true">DW</span>
					<span>
						<strong>David Williams</strong>
						<small>Long-term tenant</small>
					</span>
				</footer>
			</article>

			<article class="review-card">
				<div class="review-card__top">
					<span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
					<span class="quote-mark" aria-hidden="true">&ldquo;</span>
				</div>
				<blockquote>From valuation to closing, everything was clear and professional. I would trust Clinton Homes with my next property too.</blockquote>
				<footer class="review-card__author">
					<span class="avatar" aria-hidden="true">FB</span>
					<span>
						<strong>Fatima Bello</strong>
						<small>Property owner</small>
					</span>
				</footer>
			</article>
		</div>
	</section>
</template>

<style scoped>
.reviews {
	--navy: #1B2A41;
	--orange: #C1652F;
	--paper: #f7f4ec;
	--line: #ded8c9;

	background: var(--paper);
	color: var(--navy);
	padding: 76px 24px 84px;
	font-family: 'IBM Plex Sans', 'Segoe UI', sans-serif;
}

.reviews__header,
.reviews__grid {
	max-width: 1200px;
	margin: 0 auto;
}

.reviews__header {
	display: flex;
	align-items: end;
	justify-content: space-between;
	gap: 32px;
	margin-bottom: 38px;
}

.eyebrow {
	display: block;
	color: var(--orange);
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.14em;
	margin-bottom: 13px;
	text-transform: uppercase;
}

h2 {
	font-family: 'Fraunces', Georgia, serif;
	font-size: clamp(1.8rem, 3.5vw, 2.7rem);
	font-weight: 600;
	line-height: 1.15;
	margin: 0;
	max-width: 520px;
}

.trust-score {
	border-left: 1px solid var(--line);
	display: grid;
	gap: 3px;
	min-width: 190px;
	padding-left: 24px;
}

.trust-score strong {
	font-family: 'Fraunces', Georgia, serif;
	font-size: 2.2rem;
	line-height: 1;
}

.stars {
	color: var(--orange);
	letter-spacing: 0.12em;
}

small {
	color: #657080;
	font-size: 0.78rem;
}

.reviews__grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 18px;
}

.review-card {
	background: #fff;
	border: 1px solid var(--line);
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	min-height: 285px;
	padding: 28px;
	transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.review-card:hover {
	border-color: var(--orange);
	box-shadow: 0 14px 30px rgba(27, 42, 65, 0.1);
	transform: translateY(-4px);
}

.review-card__top {
	align-items: start;
	display: flex;
	justify-content: space-between;
}

.quote-mark {
	color: var(--orange);
	font-family: Georgia, serif;
	font-size: 3.8rem;
	line-height: 0.5;
}

blockquote {
	flex: 1;
	font-family: 'Fraunces', Georgia, serif;
	font-size: 1.12rem;
	line-height: 1.55;
	margin: 20px 0 26px;
}

.review-card__author {
	align-items: center;
	display: flex;
	gap: 12px;
}

.avatar {
	align-items: center;
	background: var(--navy);
	border-radius: 50%;
	color: #fff;
	display: flex;
	font-size: 0.75rem;
	font-weight: 700;
	height: 38px;
	justify-content: center;
	width: 38px;
}

.review-card__author span:last-child {
	display: grid;
	gap: 2px;
}

@media (max-width: 760px) {
	.reviews__header {
		align-items: start;
		flex-direction: column;
	}

	.trust-score {
		border-left: 0;
		border-top: 1px solid var(--line);
		padding: 16px 0 0;
	}

	.reviews__grid {
		grid-template-columns: 1fr;
	}
}
</style>
