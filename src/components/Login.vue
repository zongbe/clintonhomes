<script setup>
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const signInForm = ref({
	email: '',
	password: '',
})

const createAccountForm = ref({
	name: '',
	email: '',
	password: '',
})

const resetEmail = ref('')
const resetSent = ref(false)

function handleSignInSubmit() {
	if (!signInForm.value.email || !signInForm.value.password) return
	router.push('/')
}

function handleCreateAccountSubmit() {
	if (!createAccountForm.value.name || !createAccountForm.value.email || !createAccountForm.value.password) return
	router.push('/')
}

function handleResetSubmit() {
	if (!resetEmail.value.trim()) return
	resetSent.value = true
}

function returnToSignIn() {
	resetSent.value = false
	resetEmail.value = ''
	document.getElementById('mode-signin')?.click()
}
</script>

<template>
	<div class="login-page">
	<main class="auth-page">
		<section class="auth-showcase" aria-label="Clinton Homes welcome">
			<router-link to="/" class="brand">
				<img src="@/assets/images/logo6.png" alt="Clinton Homes" />
			</router-link>
			<div class="showcase-copy">
				<p class="eyebrow">A better way home</p>
				<h1>Find your place in the world.</h1>
				<p>Move with confidence, whether you are buying, selling, renting, or building what comes next.</p>
			</div>
			<div class="showcase-footer">
				<span class="footer-line"></span>
				<span>Trusted property connections, made personal.</span>
			</div>
		</section>

		<section class="auth-panel">
			<div class="auth-content">
				<router-link to="/" class="mobile-brand">Clinton Homes</router-link>
				<input class="mode-control" id="mode-signin" type="radio" name="auth-mode" checked />
				<input class="mode-control" id="mode-create" type="radio" name="auth-mode" />
				<input class="mode-control" id="mode-reset" type="radio" name="auth-mode" />
				<div class="mode-tabs" role="tablist" aria-label="Account access">
					<label for="mode-signin" role="tab">Sign in</label>
					<label for="mode-create" role="tab">Create account</label>
				</div>

				<div id="sign-in" class="auth-view">
					<div class="heading">
						<p class="eyebrow">Welcome back</p>
						<h2>Sign in to Clinton Homes</h2>
						<p class="subheading">Your next move starts here.</p>
					</div>

					<form class="auth-form" @submit.prevent="handleSignInSubmit">
						<label>
							Email address
							<input v-model="signInForm.email" type="email" name="email" autocomplete="email" placeholder="you@example.com" required />
						</label>

						<label>
							Password
							<input v-model="signInForm.password" type="password" name="password" autocomplete="current-password" placeholder="Enter your password" required />
						</label>

						<button class="submit-button" type="submit">Sign in <span aria-hidden="true">&#8594;</span></button>
					</form>
					<label class="text-button" for="mode-reset">Forgot password?</label>
				</div>

				<div id="create-account" class="auth-view secondary-view">
					<div class="heading">
						<p class="eyebrow">Join our community</p>
						<h2>Create your account</h2>
						<p class="subheading">Tell us a little about yourself to get started.</p>
					</div>

					<form class="auth-form" @submit.prevent="handleCreateAccountSubmit">
						<label>
							Full name
							<input v-model="createAccountForm.name" type="text" name="name" autocomplete="name" placeholder="e.g. Jordan Clinton" required />
						</label>
						<label>
							Email address
							<input v-model="createAccountForm.email" type="email" name="email" autocomplete="email" placeholder="you@example.com" required />
						</label>
						<label>
							Password
							<input v-model="createAccountForm.password" type="password" name="password" autocomplete="new-password" placeholder="Create a password" required />
						</label>

						<div class="role-section">
						<div class="role-heading">
							<span>How will you use Clinton Homes?</span>
							<span class="optional">Choose one</span>
						</div>
						<div class="role-grid">
							<label class="role-option"><input type="radio" name="role" value="Buyer" checked /> <span>Buyer</span></label>
							<label class="role-option"><input type="radio" name="role" value="Seller" /> <span>Seller</span></label>
							<label class="role-option"><input type="radio" name="role" value="Renter" /> <span>Renter</span></label>
							<label class="role-option"><input type="radio" name="role" value="Landlord" /> <span>Landlord</span></label>
							<label class="role-option"><input type="radio" name="role" value="Roommate" /> <span>Roommate</span></label>
						</div>
					</div>

						<button class="submit-button" type="submit">Create account <span aria-hidden="true">&#8594;</span></button>
					</form>
				</div>

				<div id="forgot-password" class="auth-view secondary-view">
					<div v-if="!resetSent" class="heading">
						<p class="eyebrow">Account recovery</p>
						<h2>Reset your password</h2>
						<p class="subheading">Enter your email and we will send you a secure reset link.</p>
					</div>
					<div v-else class="heading success-state">
						<p class="eyebrow">Email sent</p>
						<h2>Reset link sent</h2>
					</div>

					<form v-if="!resetSent" class="auth-form" @submit.prevent="handleResetSubmit">
						<label>
							Email address
							<input v-model="resetEmail" type="email" name="reset-email" autocomplete="email" placeholder="you@example.com" required />
						</label>
						<button class="submit-button" type="submit">Send reset link <span aria-hidden="true">&#8594;</span></button>
					</form>

					<div v-else class="success-actions">
						<p class="success-message">Your email reset link has been sent.</p>
						<button type="button" class="submit-button" @click="returnToSignIn">Back to sign in <span aria-hidden="true">&#8594;</span></button>
					</div>
				</div>

				<p class="terms">By continuing, you agree to our <a href="#">Terms of service</a> and <a href="#">Privacy policy</a>.</p>
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
	background: #f7f4ec;
	color: #1b2a41;
	font-family: 'DM Sans', sans-serif;
}

.auth-page {
	min-height: 100vh;
	display: grid;
	grid-template-columns: minmax(340px, 0.92fr) minmax(480px, 1.08fr);
	background: #f7f4ec;
}

.auth-showcase {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 42px clamp(36px, 7vw, 110px);
	overflow: hidden;
	color: #fffaf0;
	background-image: linear-gradient(145deg, rgba(27, 42, 65, 0.9), rgba(36, 59, 87, 0.72)), url('@/assets/images/family.jpg');
	background-position: center;
	background-size: cover;
}

.auth-showcase::after {
	content: '';
	position: absolute;
	width: 420px;
	height: 420px;
	right: -190px;
	bottom: -150px;
	border: 1px solid rgba(255, 250, 240, 0.22);
	border-radius: 50%;
	box-shadow: 0 0 0 36px rgba(255, 250, 240, 0.04), 0 0 0 72px rgba(255, 250, 240, 0.035);
}

.brand {
	display: inline-flex;
	align-self: flex-start;
	/* padding: 16px 20px;
	border: 1px solid rgba(255, 255, 255, 0.8); */
	border-radius: 48px;
	/* background: #fffdf8; */
	box-shadow: 0 14px 30px rgba(10, 22, 38, 0.28);
}

.brand img {
	width: min(250px, 100%);
	height: auto;
	display: block;
}

.showcase-copy {
	max-width: 430px;
	margin: auto 0;
	animation: reveal 0.7s ease both;
}

.eyebrow {
	margin: 0 0 15px;
	color: #c1652f;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.14em;
	text-transform: uppercase;
}

.auth-showcase .eyebrow {
	color: #f0b58c;
}

h1,
h2 {
	margin: 0;
	font-family: 'Fraunces', serif;
	font-weight: 500;
	letter-spacing: 0;
}

h1 {
	max-width: 410px;
	font-size: clamp(3rem, 5vw, 5.2rem);
	line-height: 0.98;
}

.showcase-copy > p:last-child {
	max-width: 360px;
	margin: 25px 0 0;
	color: #d8e0e6;
	font-size: 1.05rem;
	line-height: 1.7;
}

.showcase-footer {
	display: flex;
	align-items: center;
	gap: 13px;
	color: #cbd5dc;
	font-size: 0.78rem;
}

.footer-line {
	width: 38px;
	height: 1px;
	background: #c1652f;
}

.auth-panel {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px 8%;
}

.auth-content {
	width: min(100%, 480px);
	animation: reveal 0.7s 0.1s ease both;
}

.mobile-brand {
	display: none;
	color: #1b2a41;
	font-family: 'Fraunces', serif;
	font-size: 1.5rem;
	text-decoration: none;
}

.mode-tabs {
	display: flex;
	gap: 25px;
	margin-bottom: 58px;
	border-bottom: 1px solid #d9d6ce;
}

.mode-control {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}

.mode-tabs label {
	position: relative;
	padding: 0 0 14px;
	color: #7b8187;
	font: 600 0.92rem 'DM Sans', sans-serif;
	cursor: pointer;
}

.mode-control:checked + .mode-control + .mode-control + .mode-tabs label[for='mode-signin'],
.mode-control:checked + .mode-control + .mode-tabs label[for='mode-create'] {
	color: #1b2a41;
}

.mode-control:checked + .mode-control + .mode-control + .mode-tabs label[for='mode-signin']::after,
.mode-control:checked + .mode-control + .mode-tabs label[for='mode-create']::after {
	content: '';
	position: absolute;
	bottom: -1px;
	left: 0;
	right: 0;
	height: 3px;
	background: #c1652f;
}

.auth-view {
	display: none;
}

#mode-signin:checked ~ #sign-in,
#mode-create:checked ~ #create-account,
#mode-reset:checked ~ #forgot-password {
	display: block;
}

#mode-create:checked ~ .mode-tabs label[for='mode-signin'],
#mode-reset:checked ~ .mode-tabs label[for='mode-signin'] {
	color: #7b8187;
}

#mode-create:checked ~ .mode-tabs label[for='mode-create'] {
	color: #1b2a41;
}

#mode-create:checked ~ .mode-tabs label[for='mode-create']::after {
	content: '';
	position: absolute;
	bottom: -1px;
	left: 0;
	right: 0;
	height: 3px;
	background: #c1652f;
}

h2 {
	font-size: clamp(2.1rem, 4vw, 3.1rem);
	line-height: 1.08;
}

.subheading {
	margin: 15px 0 0;
	color: #69737d;
	line-height: 1.6;
}

.success-state {
	margin-bottom: 16px;
}

.success-actions {
	margin-top: 28px;
}

.success-message {
	margin: 0 0 18px;
	color: #2f5b46;
	font-weight: 600;
}

.auth-form {
	margin-top: 38px;
}

.auth-form label {
	display: block;
	margin-bottom: 22px;
	color: #37475a;
	font-size: 0.82rem;
	font-weight: 700;
}

input {
	width: 100%;
	margin-top: 9px;
	padding: 14px 15px;
	border: 1px solid #d4d2ca;
	border-radius: 4px;
	outline: none;
	background: #fffdf8;
	color: #1b2a41;
	font: 400 0.95rem 'DM Sans', sans-serif;
	transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
	border-color: #c1652f;
	box-shadow: 0 0 0 3px rgba(193, 101, 47, 0.12);
}

.role-section {
	margin: 28px 0 25px;
}

.role-heading {
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
	color: #37475a;
	font-size: 0.82rem;
	font-weight: 700;
}

.optional {
	color: #899198;
	font-size: 0.73rem;
	font-weight: 500;
}

.role-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 9px;
}

.role-option {
	display: flex !important;
	align-items: center;
	gap: 9px;
	margin: 0 !important;
	padding: 11px 12px;
	border: 1px solid #d4d2ca;
	border-radius: 4px;
	background: #fffdf8;
	color: #56616c !important;
	font-size: 0.78rem !important;
	cursor: pointer;
}

.role-option input {
	width: auto;
	margin: 0;
	accent-color: #c1652f;
}

.submit-button {
	width: 100%;
	padding: 15px;
	border: 0;
	border-radius: 4px;
	background: #c1652f;
	color: white;
	font: 700 0.9rem 'DM Sans', sans-serif;
	cursor: pointer;
	transition: background 0.2s, transform 0.2s;
}

.submit-button:hover {
	background: #a95025;
	transform: translateY(-1px);
}

.submit-button span {
	margin-left: 8px;
	font-size: 1.1rem;
}

.text-button {
	display: block;
	margin: 22px auto 0;
	border: 0;
	background: none;
	color: #c1652f;
	font: 600 0.82rem 'DM Sans', sans-serif;
	cursor: pointer;
}

.terms {
	margin: 48px 0 0;
	color: #899198;
	font-size: 0.72rem;
	line-height: 1.6;
	text-align: center;
}

.terms a {
	color: #56616c;
}

@keyframes reveal {
	from {
		opacity: 0;
		transform: translateY(12px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@media (max-width: 800px) {
	.auth-page {
		display: block;
	}

	.auth-showcase {
		min-height: 285px;
		padding: 27px 25px;
	}

	.brand {
		display: none;
	}

	.showcase-copy {
		margin: 42px 0 0;
	}

	h1 {
		font-size: 2.7rem;
	}

	.showcase-copy > p:last-child,
	.showcase-footer {
		display: none;
	}

	.auth-panel {
		padding: 38px 25px 50px;
	}

	.mobile-brand {
		display: block;
		margin-bottom: 34px;
	}

	.mode-tabs {
		margin-bottom: 40px;
	}
}

@media (max-width: 400px) {
	.role-grid {
		grid-template-columns: 1fr;
	}
}
</style>
