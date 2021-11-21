import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import Footer from './Footer';
import budgetSmart from '../../files/budgetSmart.png';
import WMT from '../../files/WMT.png';
import budgetMain from '../../files/budgetMain.png';
import yourPocket from '../../files/yourPocket.jpg'
import wiseBudgeter from '../../files/your-next-step.png'

const Welcome = () => {
  return (
    <div style={{paddingBottom: 20, paddingTop:20}}>
      <Section class_Name={'title_image section'}
        tilte={'Badget Smart, Badgt Better. Take Control of Your Money'} 
        description={'Stop living paycheck-to-paycheck, get out of debt, and save more money'} 
        imageSrc={budgetSmart}
        imageAlt={'Badget Smart, Badgt Better. Take Control of Your Money'}
        linkTo={'/login'}
        linkToLable={'Login'}
        />        
      <Section class_Name={'image_title section'}
        tilte={'Use MyBalance on any device'} 
        description={'What if your bills rolled in and instead of piling up, you just paid them? No. What if you didn’t even realize it was payday because you had money in the bank and weren’t desperate for that check to arrive? Forget everything you think you know about budgeting and prepare to experience total control.'} 
        imageSrc={WMT}
        imageAlt={'Use MyBalance with any device'}
        />
      <Section class_Name={'title_image1 section'}
        tilte={'Keep tabs on your spending'} 
        description={'See which expenses eat up too much of the pie. Personalize your reports with custom categories'} 
        imageSrc={budgetMain}
        imageAlt={'Gain Total Control of Your Money'}
        />
      <Section class_Name={'image_title1 section'}
        tilte={"Always know what's in your pocket"} 
        description={'Reported, new budgeters save about $700 in their first two months and more than $6,000 their first year.'} 
        imageSrc={yourPocket}
        imageAlt={'Gain Total Control of Your Money'}
        linkTo={'/Home'}
        linkToLable={'Check It Out'}
        />
      <Section class_Name={'title_image section'}
        tilte={'You can do this! Right now! For free!'}
        description={'Budgeting is not restrictive. You won’t be spending less, you’ll be spending smart. So what do you have to lose? (Other than all that debt and stress, of course...)'} 
        imageSrc={wiseBudgeter}
        imageAlt={'Badget Smart, Badgt Better. Take Control of Your Money'}
        linkTo={'/login'}
        linkToLable={'Start Now'}
        />       
      <Footer class_Name={'footer section'}/>
    </div>
  );
};

export default Welcome;