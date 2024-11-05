// src/components/Ratings.jsx
import React from 'react';

const ratings = [
  { name: "John Doe", rating: 5, comment: "Amazing experience!" },
  { name: "Jane Smith", rating: 4, comment: "Very helpful!" },
  { name: "Michael Johnson", rating: 5, comment: "Highly recommend!" },
  { name: "Emily Davis", rating: 4, comment: "Great service!" },
  { name: "Chris Evans", rating: 5, comment: "Loved it!" },
];

const Ratings = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4">
      <div className="flex justify-center space-x-8 overflow-hidden">
        {ratings.map((rating, index) => (
          <div
            key={index}
            className="opacity-0 animate-float transition-opacity duration-500"
            style={{ animationDelay: `${index * 1}s` }}
          >
            <div className="text-lg font-bold">{rating.name}</div>
            <div className="text-yellow-400">{'★'.repeat(rating.rating)}</div>
            <p className="text-sm">{rating.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
