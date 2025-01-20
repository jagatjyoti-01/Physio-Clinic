import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col mt-12 items-center justify-center">
        <h1 className="text-4xl font-bold text-center mt-20">
          Contact Us
        </h1>
        <p className="text-lg text-center mt-5">
          This is the Contact Us page
        </p>
        <div className="mt-10 w-full max-w-4xl">
          <iframe
            title="Google Map Location - SUM Hospital Bhubaneswar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7640464405677!2d85.79602367499422!3d20.274299785905037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ac3947a70f%3A0x6a30b8c2e0b4473b!2sSUM%20Hospital%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1673529385123!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
