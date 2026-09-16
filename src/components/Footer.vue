<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Clinton Homes</h3>
        <p>Finding A Safe Haven for You and Your Family. </p>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email: info@clintonhomes.com</p>
        <p>Phone: (234) 814-8813-274</p>
        <p>Address: Lekki Phase 1, Lekki, Lagos 106104</p>
      </div>
      
      <div class="footer-section">
        <h4>Follow Us</h4>
        <ul class="social-links">
          <li><a href="#facebook"><i class="fa-brands fa-facebook"></i>  Facebook </a></li>  
          <li><a href="#twitter"><i class="fa-brands fa-x-twitter"></i>  Twitter</a></li>
          <li><a href="#instagram"><i class="fa-brands fa-instagram"></i>  Instagram </a></li>
          <li><a href="#tiktok"><i class="fa-brands fa-tiktok"></i>  Tiktok</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2026 Clinton Homes. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1B2A41;
  color: #ffffff;
  /* padding: 40px 20px 20px; */
  margin-top: 70px; 
}

.footer-content {
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: repeat(4, 1fr); 
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto 30px;
}

.footer-section h3 {
  font-size: 27px;
  margin-bottom: 10px;
  color: #C1652F;
}

.footer-section h4 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #C1652F;
}

.footer-section p {
  /* margin: 8px 0; */
  line-height: 1.8;
  color: white;
  transition: color 0.3s ease;;
}
.footer-section p:hover {
  color: #C1652F;
}
.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #C1652F;
}

.social-links {
  /* display: flex; */
  gap: 12px;
  line-height:2 ;
}

.social-links li {
  margin-bottom: 0;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 15px;
  padding-bottom: 7px;

}
</style>
