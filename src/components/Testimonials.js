import React from 'react';
import '../css/Testimonials.css';
import test1 from '../assets/Mario and Adrian A.jpg'
import test2 from '../assets/Mario and Adrian b.jpg'
import test3 from '../assets/restaurant chef B.jpg'
const Testimonials = () => {
  const testimonials = [
    { name: "Testimonial One", location: "Chicago, USA" ,image:test1},
    { name: "Testimonial Two", location: "Miami, USA" ,image:test3},
    { name: "Testimonial Three", location: "los, USA" ,image:test2},
  ];

  return (
    <section className="testimonials" id='testimonials'>
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((item, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="image-placeholder"> <img src={item.image} style={{height:100}}></img></div>
            <p style={{color:'black'}}>{item.name}</p>
            <p style={{color:'black'}}>{item.location}</p>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
