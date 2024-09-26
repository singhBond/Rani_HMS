"use client"
import Title from '@/components/Title';
import React, { useState } from 'react';

// Array of image data
const images = [
  {
    id: 1,
    src: '/path/to/image1.jpg',
    alt: 'Image ',
  },
  {
    id: 2,
    src: '/path/to/image2.jpg',
    alt: 'Image ',
  },
  {
    id: 3,
    src: '/path/to/image3.jpg',
    alt: 'Image ',
  },
  {
    id: 4,
    src: '/path/to/image3.jpg',
    alt: 'Image ',
  },
  {
    id: 5,
    src: '/path/to/image3.jpg',
    alt: 'Image ',
  },
  {
    id: 6,
    src: '/path/to/image3.jpg',
    alt: 'Image ',
  },
  {
    id: 7,
    src: '/path/to/image3.jpg',
    alt: 'Image ',
  },
  {
    id: 8,
    src: '/path/to/image3.jpg',
    alt: 'Image ',
  },

  // Add more images as needed
];

const page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="section p-6">
      {/* Page Title */}
      <div className="text-center mb-8">
      <h1 className="grid text-center text-xl text-sky-700  border-b-4 rounded-b-md border-sky-200">
        Awards
      </h1>
        
      </div>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-48 rounded shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openImageModal(image.src)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Viewing Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeImageModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeImageModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
