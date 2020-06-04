import { HeroImage, HeroImageProps } from '../src/components/hero/HeroImage'
import renderer from 'react-test-renderer'

const props: HeroImageProps = {
  heading: `FREE 3 DAY TRIAL <br /> It's gym time`,
  description: `Come and check us out.<br />We know you’ll like what you see!`,
  imgSrc: `/example/home-hero.png`,
  joinBtnText: 'TRY NOW!',
}

it('renders correctly', () => {
  const tree = renderer.create(<HeroImage {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
