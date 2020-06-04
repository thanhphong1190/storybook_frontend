import { Banner, BannerProps } from '../src/components/banner/Banner'

const props: BannerProps = {
  imageURL: '/example/banner-bg-example.png',
  title: 'Promotion',
  content: 'Free week of fitness',
  action: {
    label: 'Enquire now',
    url: '#'
  }
}
export const BannerStory = () => <Banner {...props} />
export default {
  title: 'Banner',
  component: BannerStory
}
