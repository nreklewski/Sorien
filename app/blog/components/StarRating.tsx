"use client";

import { useState } from "react";

interface StarRatingProps {
  averageScore?: number;
  totalVotes?: number;
}

export default function StarRating({ 
  averageScore = 4.5, 
  totalVotes = 0 
}: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStarClick = (value: number) => {
    if (isSubmitted) {
      return;
    }
    
    // First time rating
    setRating(value);
    setIsSubmitted(true);
    setHoveredRating(0); // Clear hover state
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInFade {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .star-rating-success {
            animation: slideInFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `
      }} />
    <div className="text-center">
      
      {/* Average Rating Display */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl md:text-3xl font-bold text-white">{averageScore.toFixed(1)}</span>
          <span className="text-gray-400 text-lg md:text-xl">/</span>
          <span className="text-gray-400 text-lg md:text-xl">5</span>
        </div>
        {totalVotes > 0 && (
          <p className="text-gray-400 text-xs md:text-sm">
            Na podstawie {totalVotes} {totalVotes === 1 ? 'głosu' : 'głosów'}
          </p>
        )}
      </div>

      <p className="text-gray-400 text-sm md:text-base mb-4">
        Oceń ten artykuł
      </p>
      <div className="flex justify-center items-center gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((star) => {
          const isActive = star <= (hoveredRating || rating);
          return (
            <button
              key={star}
              type="button"
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => !isSubmitted && setHoveredRating(star)}
              onMouseLeave={() => !isSubmitted && setHoveredRating(0)}
              disabled={isSubmitted}
              className={`focus:outline-none transition-transform duration-200 ${
                isSubmitted ? "cursor-not-allowed opacity-60" : "hover:scale-110 cursor-pointer"
              }`}
              aria-label={`Oceń ${star} z 5 gwiazdek`}
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke={isActive ? "#9333ea" : "#6b7280"}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          );
        })}
      </div>
      
      {/* Success message - Green */}
      {isSubmitted && rating > 0 && (
        <div className="star-rating-success bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-2 mb-2">
          <p className="text-green-400 text-sm md:text-base font-medium">
            Dziękujemy za twoją ocenę!
          </p>
        </div>
      )}
    </div>
    </>
  );
}


