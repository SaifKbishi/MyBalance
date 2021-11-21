import React from 'react';
import './Section.css'

const Section = ({tilte, description, imageSrc, imageAlt, class_Name}) => {
  return (
    <div className={class_Name} >
      <div className='titleDesc'>
        <h1>{tilte}</h1>
        <p>{description}</p>
      </div>
      <div className=''>
        <img src={imageSrc} alt={imageAlt}/>
      </div>
    </div>
  );
};

export default Section;