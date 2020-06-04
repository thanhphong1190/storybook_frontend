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
export const ReadyStartedBlocksStory = () => <ReadyStartedBlocks {...props} />
export default {
  title: 'Ready Started Blocks',
  component: ReadyStartedBlocksStory
}
