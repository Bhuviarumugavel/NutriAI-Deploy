import React, { useState } from 'react';

const CTA = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="cta" className="cta">
      <h2>Start Your Health Journey Today</h2>
      <button className="cta-button" onClick={() => setCount(count + 1)}>
        Download Now
      </button>
      <p>{count} people downloaded today!</p>
    </section>
  );
};

export default CTA;
