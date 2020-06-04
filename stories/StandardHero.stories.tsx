import {
  StandardHero,
  StandardHeroProps
} from '../src/components/standard-hero/StandardHero'

const props: StandardHeroProps = {
  imgURL: '/example/home-hero.png',
  title: 'Promotion'
}
export const StandardHeroStory = () => <StandardHero {...props} />
export default {
  title: 'Standard Hero',
  component: StandardHeroStory
}
