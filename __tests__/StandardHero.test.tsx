import {
  StandardHero,
  StandardHeroProps
} from '../src/components/standard-hero/StandardHero'
import renderer from 'react-test-renderer'

const props: StandardHeroProps = {
  imgURL: '/example/home-hero.png',
  title: 'Promotion'
}

it('StandardHero renders correctly', () => {
  const tree = renderer.create(<StandardHero {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
