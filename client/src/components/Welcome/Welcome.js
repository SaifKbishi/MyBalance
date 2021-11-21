import React from 'react';
import Section from './Section';
import Footer from './Footer';
import budgetSmart from '../../files/budgetSmart.png';
import WMT from '../../files/WMT.png';

const Welcome = () => {
  return (
    <>
      <Section class_Name={'title_image section'}
      tilte={'Badget Smart, Badgt Better. Take Control of Your Money'} description={'Stop living paycheck-to-paycheck, get out of debt, and save more money'} 
        imageSrc={budgetSmart}
        imageAlt={'Badget Smart, Badgt Better. Take Control of Your Money'}
        />
      <Section class_Name={'image_title section'}
      tilte={'Use MyBalance with any device'} description={'What if your bills rolled in and instead of piling up, you just paid them? No. What if you didn’t even realize it was payday because you had money in the bank and weren’t desperate for that check to arrive? Forget everything you think you know about budgeting and prepare to experience total control.'} 
        imageSrc={WMT}
        imageAlt={'Use MyBalance with any device'}
        />
      <Section class_Name={'title_image1 section'}
      tilte={'Gain Total Control of Your Money'} description={'Stop living paycheck-to-paycheck, get out of debt, and save more money'} 
        imageSrc={'https://cdn4.buysellads.net/uu/1/100164/1634746493-UTM_Content_D2.png'}
        imageAlt={'Gain Total Control of Your Money'}
        />
      <Section class_Name={'image_title1 section'}
      tilte={'Gain Total Control of Your Money'} description={'Stop living paycheck-to-paycheck, get out of debt, and save more money'} 
        imageSrc={'https://cdn4.buysellads.net/uu/1/100164/1634746493-UTM_Content_D2.png'}
        imageAlt={'Gain Total Control of Your Money'}
        />
      
      <Footer class_Name={'footer section'}/>
    </>
  );
};

export default Welcome;