import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';


// Import all images
import logo1 from './imgs/logo2.png';
import mainImage from './imgs/main.png';
import cat1 from './imgs/cat1.png';
import cat2 from './imgs/cat2.png';
import cat3 from './imgs/cat3.png';
import cat4 from './imgs/cat4.png';
import cat5 from './imgs/cat5.png';
import cat6 from './imgs/cat6.png';
import D1 from './imgs/D1.png';
import D2 from './imgs/D2.png';
import D3 from './imgs/D3.png';
import D4 from './imgs/D4.png';
import logo from './imgs/logo.png';
import Product from './Product';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope, 
  faUser, 
  faHeart, 
  faShippingFast, 
  faShoppingCart,
  faTruck,
  faUndo,
  faHeadset,
  faCreditCard,
  faPaperPlane,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

// ========== COMPONENTS ========== //

// Header Component (converted from Navbar)
function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/">
          <img src={logo1} alt="Logo" style={{ height: 'auto', width: '250px', cursor: 'pointer' }} />
        </Link>
        <div className="header-search-container">
  <input 
    type="search" 
    name="search" 
    className="search-field" 
    placeholder="Enter your product name..."
    style={{ 
      width: '400px',
      paddingRight: '80px', // Make space for the icon on right
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'%234CAF50\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\'/%3E%3C/svg%3E")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'calc(100% - 40px) center', // Position near right edge
      backgroundSize: '16px'
    }} 
  />
  <button className="search-btn">
    <ion-icon name="search-outline"></ion-icon>
  </button>
</div>
        
        <div className="icon-container">
          <Link to="/login" className="icon-wrapper">
            <FontAwesomeIcon
              icon={faUser}
              className="login-icon"
              data-tooltip="Sign in/Sign up"
            />
            <span className="icon-label">Sign in/Sign up</span>
          </Link>

          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faHeart} className="fvt-icon" data-tooltip="Wishlist" />
            <span className="icon-label">Wishlist</span>
          </div>

          <Link to="/track-order" className="icon-wrapper">
            <FontAwesomeIcon icon={faShippingFast} className="track-icon" data-tooltip="Track Order" />
            <span className="icon-label">Track Order</span>
          </Link>

          <Link to="/cart" className="icon-wrapper">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" data-tooltip="Cart" />
            <span className="icon-label">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

// Home Component
function Home() {
  return (
    <main>
      <img className="main-image" src={mainImage} alt="Main Image" />
      <Categories />
      <HotDeals />
      <Features />
    </main>
  );
}

function Categories() {
  return (
    <section className="categories">
      <h2>CATEGORIES</h2>
      <div className="categories-grid">
        <Link to="/product/agil-herbicide" className="category-item">
          <img src={cat3} alt="AGIL HERBICIDE" />
          <h3>AGIL HERBICIDE</h3>
        </Link>
        <Link to="/product/growth-promoter" className="category-item">
          <img src={cat2} alt="Growth" />
          <h3>Growth<br />Promoters</h3>
        </Link>
        <Link to="/product/special-fertilizers" className="category-item">
          <img src={cat1} alt="Special" />
          <h3>Special<br />Fertilizers</h3>
        </Link>
        <Link to="/product/animal-husbandry" className="category-item">
          <img src={cat6} alt="Animal Husbandry" />
          <h3>Animal<br />Husbandry</h3>
        </Link>
        <Link to="/product/machinery-tools" className="category-item">
          <img src={cat4} alt="Machinery and Tools" />
          <h3>Machinery and<br />Tools</h3>
        </Link>
        <Link to="/product/flower-seeds" className="category-item">
          <img src={cat5} alt="Flower Seeds" />
          <h3>Flower Seeds</h3>
        </Link>
      </div>
    </section>
  );
}
// HotDeals Component
function HotDeals() {
  return (
    <section className="hot-deals">
      <h2>Today's Hot Deal</h2>
      <div className="hot-deals-grid">
        <div className="deal-item">
          <img src={D1} alt="Agriculture Products" />
          <h3>Agriculture Products</h3>
        </div>
        <div className="deal-item">
          <img src={D2} alt="Organic Products" />
          <h3>Organic Products</h3>
        </div>
        <div className="deal-item">
          <img src={D3} alt="Seeds Products" />
          <h3>Seeds Products</h3>
        </div>
        <div className="deal-item">
          <img src={D4} alt="Dairy Products" />
          <h3>Dairy Products</h3>
        </div>
      </div>
    </section>
  );
}

// Features Component
function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faTruck} />
            <h3>Free Shipping</h3>
            <p>Enjoy the convenience of having your purchases delivered to your doorstep at no extra cost.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUndo} />
            <h3>Easy Refund</h3>
            <p>Experience peace of mind with our hassle-free refund policy.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHeadset} />
            <h3>Online Support</h3>
            <p>Access round-the-clock assistance from our dedicated online support team.</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCreditCard} />
            <h3>Flexible Payment</h3>
            <p>Benefit from a variety of payment options tailored to suit your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <div className="logo">
          <Link to="/">
            <img src={logo1} alt="FERSEED Logo" />
            </Link>
          </div>
          <p>
            Our business model focuses on creating an efficient e-commerce platform that directly connects farmers with producers.
          </p>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="/about.html" target="_blank" rel="noopener noreferrer">About</a></li>
            <li><a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="return-policy.html" target="_blank" rel="noopener noreferrer">Return & Refund Policy</a></li>
            <li><a href="/shipping-policy.html" target="_blank" rel="noopener noreferrer">Shipping & Delivery Policy</a></li>
            <li><a href="/careers.html" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><a href="/contact.html" target="_blank" rel="noopener noreferrer">Contact</a></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Contact:</h3>
          <p><FontAwesomeIcon icon={faPhone} /> +91 8748933028</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@ferseed.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Reva Nest, Bengaluru</p>
          <input type="email" placeholder="Your Email Address" />
          <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>

        <div className="footer-section feedback">
          <h3>Customer Feedback:</h3>
          <input type="text" placeholder="Name:" />
          <input type="email" placeholder="Email Address:" />
          <textarea placeholder="Write a Message:"></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
    </footer>
  );
}

// Copyright Component
function Copyright() {
  return (
    <div className="copyright">
      <p>Copyright © 2025 FERSEED Private Limited. Developed By: Sahazad</p>
    </div>
  );
}

// ========== PAGE COMPONENTS ========== //

function Login() {
  return (
    <div className="login-container">
      <h2>Sign In</h2>

      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+910000000000" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <button type="button" className="otp-btn">Send OTP</button>
        </div>

        <div className="form-group">
          <Link to="/forgot-password" className="forgot-password">Forgot your password?</Link>
        </div>

        <button type="submit" className="signin-btn">Sign In</button>
      </form>

      <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>

      <p className="divider">OR</p>

      <div className="social-login">
        <button className="google-btn">
          <img src="https://www.google.com/favicon.ico" alt="Google Logo" />
          Continue With Google
        </button>
      </div>
    </div>
  );
}

function SignUp() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <button type="submit" className="signup-btn">Create Account</button>
      </form>
      <p className="login-link">Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
  );
}

function TrackOrder() {
  return (
    <div className="track-order-page">
      <h2>Track Order Page</h2>
      <div className="track-order-form">
        <input type="text" placeholder="Enter your order ID" />
        <button>Track Order</button>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        <p>Your cart is currently empty</p>
      </div>
      <div className="cart-actions">
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

function Equipments() {
  return (
    <div className="equipments-page">
      <h2>Agricultural Equipments</h2>
      <div className="equipment-grid">
        <div className="equipment-item">
          <h3>Tractors</h3>
        </div>
        <div className="equipment-item">
          <h3>Plows</h3>
        </div>
        <div className="equipment-item">
          <h3>Harvesters</h3>
        </div>
      </div>
    </div>
  );
}

function Brands() {
  return (
    <div className="brands-page">
      <h2>Our Brands</h2>
      <div className="brands-grid">
        <div className="brand-item">
          <h3>Brand 1</h3>
        </div>
        <div className="brand-item">
          <h3>Brand 2</h3>
        </div>
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className="service-page">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Consultation</h3>
        </div>
        <div className="service-item">
          <h3>Delivery</h3>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>FERSEED is an agricultural e-commerce platform connecting farmers with producers.</p>
    </div>
  );
}

// Layout Component (for shared header/footer)
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
}

// Main App Component with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<div>Privacy Policy Page</div>} />
          <Route path="/return-policy" element={<div>Return Policy Page</div>} />
          <Route path="/shipping-policy" element={<div>Shipping Policy Page</div>} />
          <Route path="/careers" element={<div>Careers Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
          <Route path="/product/:productId" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;