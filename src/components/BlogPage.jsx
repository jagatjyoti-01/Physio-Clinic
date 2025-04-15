import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 md:px-20 py-10">
      {/* Blog Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Healing Through Movement</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover how physiotherapy empowers recovery, restores strength, and brings you back to life — one step at a time.
        </p>
      </header>

      {/* Blog Image */}
      <div className="mb-10">
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7eea9b1600?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Physiotherapy session"
          className="rounded-xl shadow-lg w-full object-cover max-h-[450px]"
        />
      </div>

      {/* Blog Content */}
      <article className="text-gray-800 max-w-3xl mx-auto leading-8 text-justify">
        <p className="mb-6">
          Physiotherapy is more than just rehabilitation—it's a science-backed approach to improving quality of life through
          movement and function. Whether you're recovering from surgery, managing chronic pain, or simply trying to prevent
          future injuries, a physiotherapist can design a customized plan that fits your body and goals.
        </p>
        <p className="mb-6">
          At <span className="text-primary font-semibold">FriendsPhysio</span>, we combine manual therapy, exercise
          prescription, and modern techniques to help you restore mobility, reduce pain, and feel better overall. Our
          compassionate team is committed to supporting your recovery journey every step of the way.
        </p>
        <p className="mb-6">
          Regular physiotherapy sessions can improve posture, balance, strength, and endurance. It’s not just for athletes or
          injuries—it's a lifestyle practice for anyone who values holistic health and long-term well-being.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mb-6">
          "Motion is lotion for the body. Every step towards movement is a step towards healing."
        </blockquote>
        <p className="mb-6">
          We believe that healing doesn’t happen in isolation. That’s why our clinic fosters a friendly and motivating
          environment where you're not just a patient, but part of the FriendsPhysio family.
        </p>
      </article>

      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-primary mb-2">Ready to begin your healing journey?</h2>
        <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
