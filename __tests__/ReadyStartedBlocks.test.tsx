import renderer from 'react-test-renderer'
import {
  ReadyStartedBlocks,
  ReadyStartedBlocksProps
} from '../src/components/ready-started-blocks/ReadyStartedBlocks'

const props: ReadyStartedBlocksProps = {
  blocks: [
    {
      text: 'Download<br/>E-brochure',
      imgURL: '/example/Ready-started-blocks/icon-brochure.png',
      color: 'blue-dark',
      link: '#'
    },
    {
      text: 'Find a<br/> Franchise',
      imgURL: '/example/Ready-started-blocks/icon-find.png',
      color: 'blue',
      link: '#'
    },
    {
      text: 'Enquire Now',
      imgURL: '/example/Ready-started-blocks/icon-enquire.png',
      color: 'orange',
      link: '#'
    }
  ]
}

it('ReadyStartedBlocks renders correctly', () => {
  const tree = renderer.create(<ReadyStartedBlocks {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
