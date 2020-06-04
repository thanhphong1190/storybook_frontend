import {
  OrangeBanner,
  OrangeBannerProps
} from '../src/components/orange-banner/OrangeBanner'

const props: OrangeBannerProps = {
  bgImageURL: '/example/OrangeBanner-bg.png',
  imageURL: '/example/OrangeBanner-PHONES.png',
  title: 'Connect to your fitness goals with the',
  bigTitle: 'Plus fitness app',
  text:
    'The Plus Fitness app provides class schedules, social media platforms, fitness goals, and in-club challenges. Our app will also allow you to link many of the popular fitness tracking devices and fitness apps on the market.',
  action: {
    label: 'Find our more',
    url: '#'
  }
}
export const OrangeBannerStory = () => <OrangeBanner {...props} />
export default {
  title: 'Orange Banner',
  component: OrangeBannerStory
}
