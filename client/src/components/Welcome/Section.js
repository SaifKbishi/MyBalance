import React from 'react';
import './Section.css'

const Section = ({tilte, description, imageSrc, imageAlt, class_Name}) => {
  return (
    <div className={class_Name} >
      <div className='inSection'>
        <h1>{tilte}</h1>
        <p>{description}</p>
      </div>
      <div className='inSection'>
        <img src={imageSrc} alt={imageAlt} className='inSectionImage'/>
      </div>
    </div>
  );
};

export default Section;