import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="text-center mt-6 mb-6">
      <h2 className="text-sky-700 text-xl sm:text-2xl md:text-3xl font-sans font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default Title;
