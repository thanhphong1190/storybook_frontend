import { Banner, BannerProps } from '../src/components/banner/Banner'
import renderer from 'react-test-renderer'

const props: BannerProps = {
  imageURL: '/example/banner-bg-example.png',
  title: 'Promotion',
  content: 'Free week of fitness',
  action: {
    label: 'Enquire now',
    url: '#'
  }
}
it('renders correctly', () => {
  const tree = renderer.create(<Banner {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
