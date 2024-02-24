import React from 'react';
import './index.css';
import ParallaxImage1 from './Components/Assets1/parallax1.jpg';
import ParallaxImage2 from './Components/Assets1/parallax2.jpg';
import ParallaxImage3 from './Components/Assets1/Parallax3.jpg';

function App() {
  return (
    <div className="parallax-container">
      <section className="parallax" style={{ backgroundImage: `url(${ParallaxImage1})` }}>
        <div className="parallax-content">
          <h1>Welcome to Parallax Website</h1>
          <p className='lady'>This is the first section of the parallax website of a young lady adventurer in rugged terrains.</p>
        </div>
      </section>
      <section className="content">
        <h2 className='ab'>About Us</h2>
        <p className='tumi'>Welcome to our Parallax website where we display arrays of pictures depicting adventures with the added advantage of photography.</p>
      </section>
      <section className="parallax" style={{ backgroundImage: `url(${ParallaxImage2})` }}>
        <div className="parallax-content">
          <h2 className='tila'>Photography Services</h2>
          <p className='tope'>We provide photography services at a pocket-friendly price and we hope you patronize us.</p>
        </div>
      </section>
      <section className="parallax" style={{ backgroundImage: `url(${ParallaxImage3})` }}>
        <div className="parallax-content">
          <h2 className='tilo'>Tourism</h2>
          <p className='tile'>We organize tours for individuals, groups, or associations, and even the top elites to have firsthand experience of the destinations they've only heard about.</p>
        </div>
      </section>
      <section className="content">
        <h2 className='tike'>Contact Us</h2>
        <p className='tilu'>We are pleased to have you onboard with us for our services, and we assure you that a trial will convince you.</p>
        <p className='tika'>Kmoral17TV (Home of Documentaries)</p>
      </section>
    </div>
  );
}

export default App;
