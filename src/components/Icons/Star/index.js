import React from 'react';
import Image from 'next/image';

const StarRating = ({ count }) => {
  const starArray = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {starArray.map((starIndex) => (
        <Image
          key={starIndex}
          src="/images/star.svg"
          alt="star"
          width={20}
          height={20}
          priority
        />
      ))}
    </>
  );
};

export  { StarRating };
