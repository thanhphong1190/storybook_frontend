import {
  VideoBlock,
  VideoBlocksProps
} from '../src/components/blocks/VideoBlock'
import renderer from 'react-test-renderer'

const props:VideoBlocksProps = {
  leftThumbnailURL: '/example/videos-example.png',
  leftVideoTitle: `BECOME A MEMBER`,
  leftVideoURL: 'https://www.youtube.com/embed/y8Ok76X15Xk',
  leftVideoDesc: `orem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor`,
  rightThumbnailURL:'/example/heroImg-example.jpg',
  rightVideoTitle: 'OWN A GYM',
  rightVideoURL: 'https://www.youtube.com/embed/ucESGeAlUk4',
  rightVideoDesc: `Kathy Cummings<br />Plus fitness franchisee`
}

it('renders correctly', () => {
  const tree = renderer.create(<VideoBlock {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
