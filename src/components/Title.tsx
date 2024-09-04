import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="text-center mt-8 mb-8">
      <h2 className="text-sky-700 text-2xl sm:text-3xl md:text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default Title;
