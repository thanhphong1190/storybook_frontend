import {
  Hero,
  HeroProps,
  HeroImage,
  HeroImageProps
} from '../src/components/hero'
import { action } from '@storybook/addon-actions'

const homeProps: HeroProps = {
  bgColor: 'orange',
  bgImgURL: '/example/home-hero.png',
  contentPosition: 'left',
  overlay: true,
  contentWidth: '1/2',
  texts: [
    {
      color: 'white',
      text: `FREE 3 DAY TRIAL`,
      fontWeight: 'bold',
      size: '6xl',
      textCase: 'upper'
    },
    {
      color: 'white',
      text: `IT'S GYM TIME`,
      fontWeight: 'bold',
      size: '6xl',
      textCase: 'upper'
    },
    {
      color: 'silver',
      text: `FREE 3 DAY TRIAL IT'S GYM TIME`,
      fontWeight: 'bold',
      spaceBottom: 2,
      spaceTop: 2
    }
  ],
  buttons: [
    {
      action: '#',
      color: 'orange',
      label: 'TRY NOW!'
    }
  ]
}

const props: HeroProps = {
  bgColor: 'orange',
  bgImgURL: '/example/membership-hero.png',
  contentPosition: 'center',
  overlay: true,
  contentWidth: 'full',
  texts: [
    {
      color: 'white',
      text: 'JOIN THE PLUS FITNESS FAMILY',
      fontWeight: 'bold',
      size: '6xl'
    }
  ],
  buttons: [
    {
      action: '#',
      color: 'blue',
      label: 'ENQUIRE NOW'
    },
    {
      action: '#',
      color: 'orange',
      label: 'JOIN US'
    }
  ]
}

const newsProps: HeroProps = {
  bgColor: 'orange',
  bgImgURL: '/example/home-hero.png',
  contentPosition: 'left',
  overlay: true,
  contentWidth: '2/3',
  texts: [
    {
      color: 'silver',
      text: `MARCH 21ST, 2018 IN WELLNESS BY JASMINE GREEN`,
      fontWeight: 'semibold',
      size: '2xl',
      textCase: 'upper',
      spaceBottom: 0.5
    },
    {
      color: 'white',
      text: `GETTING FIT: WHAT YOU NEED TO KNOW ABOUT BMI & BODY FAT`,
      fontWeight: 'bold',
      size: '4xl',
      textCase: 'upper'
    },
    {
      color: 'silver',
      text: `If you've been trying to lose weight, get healthier, or just got a checkup from your doctor recently then you've propbaly heard about BMI or Body Mass Index`,
      fontWeight: 'bold',
      spaceTop: 2,
      spaceBottom: 3
    }
  ],
  buttons: [
    {
      action: '#',
      color: 'orange',
      label: 'Read'
    }
  ]
}

const imageProps: HeroImageProps = {
  heading: `FREE 3 DAYS TRIAL <br /> It's gym time`,
  description: `Come and check us out.<br />We know you’ll like what you see!`,
  imgSrc: '/example/home-hero.png',
  joinBtnText: 'TRY NOW!',
  onTryBtnClick: action('Click try button')
}

export const HomeHeroStory = () => <Hero {...homeProps} />
HomeHeroStory.story = {
  name: 'Home Hero'
}

export const MSHeroStory = () => <Hero {...props} />
MSHeroStory.story = {
  name: 'Membership Hero'
}

export const imageHero = () => <HeroImage {...imageProps} />

export const NewsHeroStory = () => <Hero {...newsProps} />
NewsHeroStory.story = {
  name: 'News Hero'
}

export default {
  title: 'Hero',
  component: HomeHeroStory
}
