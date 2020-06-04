import { Hero, HeroProps } from '../src/components/hero/Hero'
import renderer from 'react-test-renderer'

const props: HeroProps = {
  bgColor: 'orange',
  bgImgURL: '/example/home-hero.png',
  contentPosition: 'left',
  overlay: true,
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
      color: 'white',
      text: `FREE 3 DAY TRIAL IT'S GYM TIME`,
      fontWeight: 'bold'
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

it('Hero renders correctly', () => {
  const tree = renderer.create(<Hero {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
