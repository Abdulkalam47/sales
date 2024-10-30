// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 
import shopImage from '../images/Shop.png'; // Import the image

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={shopImage} alt="Shop" className="shop-image" />
        <h1>Welcome to Aman Sales</h1>
      </header>
      <section className="home-about">
      <h2>Products & Services</h2>
<p>
We have partnerships with <strong>Ambuja Cement</strong>, <strong>JK Cement</strong>, <strong>MS Bricks</strong>, and other leading brands to ensure high-quality products and solutions for your construction needs.
</p>

<h3>Cement</h3>
<p>
Our store offers premium cement that guarantees strength and durability. Whether you need OPC or PPC, we provide the best quality for all construction projects.
</p>
<ul>
  <li><strong>Ambuja Cement</strong> – Known for superior strength and quick setting.</li>
  <li><strong>JK Cement</strong> – Ideal for both residential and commercial projects.</li>
</ul>

<h3>Bricks</h3>
<p>
We supply high-quality <strong>MS Bricks</strong> with excellent strength and weather resistance. These bricks are uniform in shape, ensuring seamless masonry work.
</p>

<h3>Waterproof Chemicals</h3>
<p>
Our waterproofing solutions protect your structures from moisture damage. We offer advanced sealants and coatings for roofs, walls, and basements from <strong>Ambuja Chemicals</strong> and <strong>JK Chemicals</strong>.
</p>

<h3>Transportation Services</h3>
<p>
To ensure timely delivery, we provide reliable <strong>transportation services</strong> at competitive rates. Our efficient fleet guarantees that your orders reach the site on time, safely and securely.
</p>
<ul>
  <li>Affordable transportation rates</li>
  <li>Safe handling of all materials</li>
  <li>On-time delivery for all project sizes</li>
</ul>

<h3>Why Choose Us?</h3>
<ul>
  <li><strong>Trusted Partnerships:</strong> We collaborate with top brands to ensure the best products.</li>
  <li><strong>Competitive Pricing:</strong> Get the best rates for high-quality construction materials.</li>
  <li><strong>Complete Solutions:</strong> From materials to transportation, we handle it all.</li>
  <li><strong>Customer Satisfaction:</strong> Dedicated to providing excellent service and support.</li>
</ul>

<h3>Contact Us</h3>
<p>
Whether you need building materials or transportation services, we are here to help. Reach out to us today for a quote or to place your order!
</p>

      
        <h2>About Us</h2>
        <p>
        Aman Sales, owned by the late Mr. Hasham Qureshi, is located in Dalinimada Gam, Ahmedabad 380028. For over 20 years, we have been distributing quality products and are trusted by more than 10,000 customers.
        </p>
        <h2>Address</h2>
        <p>
        Aman Sales mahime residency Danilimada gaam Danilimada <a href='https://maps.app.goo.gl/5Hp3egizxxggDUvs7' alt="Location">Location</a></p>
        
    
      </section>
      
      <section className="home-links">
        <Link to="/order" className="btn">Go to Products</Link>
        <Link to="/cart" className="btn">Go to Cart</Link>
      </section>
    </div>
  );
};

export default Home;
