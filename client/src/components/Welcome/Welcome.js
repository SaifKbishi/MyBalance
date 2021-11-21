import React from 'react';
import Section from './Section'
import Footer from './Footer'

const Welcome = () => {
  return (
    <>
      <Section class_Name={'title_image section'}
      tilte={'Gain Total Control of Your Money'} description={'Stop living paycheck-to-paycheck, get out of debt, and save more money'} 
        imageSrc={'https://cdn4.buysellads.net/uu/1/100164/1634746493-UTM_Content_D2.png'}
        imageAlt={'Gain Total Control of Your Money'}
        />
      <Section class_Name={'image_title section'}
      tilte={'Gain Total Control of Your Money'} description={'Stop living paycheck-to-paycheck, get out of debt, and save more money'} 
        imageSrc={'https://cdn4.buysellads.net/uu/1/100164/1634746493-UTM_Content_D2.png'}
        imageAlt={'Gain Total Control of Your Money'}
        />
      <Footer class_Name={'footer section'}/>
    </>
  );
};

export default Welcome;