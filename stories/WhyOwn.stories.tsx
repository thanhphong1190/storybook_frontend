import {
  WhyOwn,
  WhyOwnProps
} from '../src/components/why-own/WhyOwn'

const props: WhyOwnProps = {
  imageURL: '/example/Social-card-insta-2.png',
  logoImageURLs: [
    '/example/whyown/bugger-king-logo.png',
    '/example/whyown/google-logo.png',
    '/example/whyown/tiki-logo.png',
    '/example/whyown/grab-logo.png'
  ],
  title: 'Why own the plus fitness gym ?',
  textLeft: 'The Plus Fitness 24/7 Franchise Model offers low staffing in a fast growing and sustainable industry.',
  textRight: 'Plus Fitness is an award winning 24 hour gym franchise network. Plus Fitness offers conveniently located, low cost, high quality fitness facilities to it’s growing membership. As a Franchisor, Plus Fitness is committed to it’s franchisee success and offers high levels of initial and ongoing support. Plus Fitness has sold over 250 Franchises across Australia and New Zealand and continues to grow at a rapid rate. Contact Plus Fitness today to see how you can become a part of it’s ever growing family of franchisees.'
}
export const WhyOwnStory = () => <WhyOwn {...props} />
export default {
  title: 'Why own',
  component: WhyOwnStory
}
