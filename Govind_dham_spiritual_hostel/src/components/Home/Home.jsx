import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from '../Image/Image';

function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 1000);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      {/* Header Section */}
      {showHeader && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-full h-20 bg-white shadow-md flex justify-center items-center"
        >
          <h1 className="text-3xl font-bold">Govind Dham Spiritual Hostel</h1>
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Image
          src="/govind-dham-logo.png"
          alt="Govind Dham Logo"
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">
          A Spiritual Oasis for Seekers of Truth
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience the tranquility and peace of Govind Dham Spiritual Hostel, where spirituality meets comfort.
        </p>
        <motion.button
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </motion.button>
      </div>

      {/* Features Section */}
      <div className="h-full w-full flex flex-col justify-center items-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Features</h2>
        <div className="flex flex-wrap justify-center">
          {[
            {
              src: '/meditation-room.jpg',
              alt: 'Meditation Room',
              title: 'Meditation Room',
              description: 'A serene space for introspection and self-reflection.',
            },
            {
              src: '/library.jpg',
              alt: 'Library',
              title: 'Library',
              description: 'A vast collection of spiritual texts and resources.',
            },
            {
              src: '/garden.jpg',
              alt: 'Garden',
              title: 'Garden',
              description: 'A peaceful oasis for relaxation and contemplation.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              <Image
                src={feature.src}
                alt={feature.alt}
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-600 mb-4">
          Experience the transformative power of Govind Dham Spiritual Hostel. Apply now to join our community of seekers.
        </p>
        <motion.button
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Apply Now
        </motion.button>
      </div>
    </div>
  );
}

export default Home;