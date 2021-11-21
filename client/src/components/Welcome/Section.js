import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css'

const Section = ({tilte, description, imageSrc, imageAlt, class_Name, linkTo, linkToLable}) => {
  return (
    <div className={class_Name} >
      <div className='inSection'>
        <h1>{tilte}</h1>
        <p>{description}</p>
        <Link to={linkTo} className={'sectionLogin'}>{linkToLable}</Link>
      </div>
      <div className='inSection'>
        <img src={imageSrc} alt={imageAlt} className='inSectionImage'/>
      </div>
    </div>
  );
};

export default Section;