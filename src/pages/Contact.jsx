import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center my-12 px-4">
        <h1 className="text-4xl font-bold text-center mt-20 text-gray-800 animate-fade-in">
          Contact Uss
        </h1>
        <p className="text-lg text-center mt-5 text-gray-600 animate-slide-in">
          Feel free to reach out to us for any queries or information.
        </p>

        {/* Contact Information */}
        <div className="mt-10 w-full max-w-[800px] text-center space-y-6">
          <div className="flex items-center justify-center space-x-4 animate-slide-in">
            <FaPhone className="text-xl text-blue-500" />
            <span className="text-lg text-gray-700">+91 12345 67890</span>
          </div>
          <div className="flex items-center justify-center space-x-4 animate-slide-in delay-150">
            <FaEnvelope className="text-xl text-red-500" />
            <span className="text-lg text-gray-700">contact@bkjnkjnkn.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4 animate-slide-in delay-300">
            <FaMapMarkerAlt className="text-xl text-green-500" />
            <span className="text-lg text-gray-700">
              Physotherapy Hospital, Bhubaneswar, Odisha, Indiaa
            </span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex items-center justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:text-blue-800 animate-bounce"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-400 hover:text-blue-600 animate-bounce delay-150"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-pink-500 hover:text-pink-700 animate-bounce delay-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-700 hover:text-blue-900 animate-bounce delay-450"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Google Map */}
        <div className="mt-10 w-full max-w-[1200px]">
          <iframe
            title="Google Map Location - Physotherapy Hospital Bhubaneswar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7640464405677!2d85.79602367499422!3d20.274299785905037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ac3947a70f%3A0x6a30b8c2e0b4473b!2sSUM%20Hospital%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1673529385123!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg animate-fade-in"
          ></iframe>
        </div>
      </div>
      <Footer />
   

    </div>
  );
};

export default Contact;
