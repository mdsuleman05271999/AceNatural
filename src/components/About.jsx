import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gold-700 mb-4">About Ace Natural Stones</h1>
        <p className="text-lg sm:text-xl text-black text-center mb-8">Welcome to Ace Natural Stones, your premier source for high-quality Tandur natural stones. With a passion for providing exceptional products and services, we aim to help our customers bring their dream projects to life.</p>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Our Story</h2>
        <p className="text-lg sm:text-xl text-black mb-6">Ace Natural Stones was founded on the principles of quality, reliability, and customer satisfaction. Our team of experts has years of experience in the natural stone industry, and we're dedicated to delivering top-notch products and personalized support to our clients.</p>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Our Mission</h2>
        <p className="text-lg sm:text-xl text-black mb-6">Our mission is to provide superior Tandur natural stones that exceed our customers' expectations. We strive to build long-lasting relationships with our clients, suppliers, and partners, and to continuously improve our products and services to meet the evolving needs of the industry.</p>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Our Values</h2>
        <ul className="text-lg sm:text-xl text-black list-disc list-inside mb-6">
          <li>Quality: We're committed to providing the finest Tandur natural stones, carefully selected and processed to meet the highest standards.</li>
          <li>Reliability: We promise to deliver on our commitments, ensuring timely and efficient service.</li>
          <li>Customer Satisfaction: Our goal is to exceed our customers' expectations, providing personalized support and guidance throughout their journey with us.</li>
        </ul>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-gold-700 mb-4">Get in Touch</h2>
        <p className="text-lg sm:text-xl text-black">Thank you for considering Ace Natural Stones. We look forward to helping you achieve your vision. Contact us today to learn more about our products and services!</p>
      </div>
    </div>
  );
}

export default About;
