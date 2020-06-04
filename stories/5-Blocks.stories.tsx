import { action } from '@storybook/addon-actions'
import {
  ContentBlock,
  ContentBlocksProps
} from '../src/components/blocks/ContentBlock'
import {
  VideoBlock,
  VideoBlocksProps
} from '../src/components/blocks/VideoBlock'
import {
  AuthorBlock,
  AuthorBlockProps
} from '../src/components/blocks/AuthorBlock'
import fionaAvatarImg from '../static/example/Fiona.jpg'

const props: ContentBlocksProps = {
  headerText: `Who are plus fitness`,
  contentPrimayText: `Plus Fitness is an Australian owned franchise offering affordable and flexible gym memberships at over 180 convenient locations across Australia and New Zealand.
  <br /><br />
  By joining one Plus Fitness you can instantly use all of our gyms and with no lock in contracts, 
  24 hour access*, free membership time-hold, great classes, free fitness programs and ongoing support, 
  affordable Personal Training plus our ever popular Functional Training Zones, there is nothing else you could want in a gym!`,
  contentSecondaryText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
  primaryBtnText: 'JOIN NOW',
  secondaryBtnText: 'ENQUIRE NOW',
  onPrimaryBtnClick: action('Click primary button'),
  onSecondaryBtnClick: action('Click secondary button')
}

const videoProps: VideoBlocksProps = {
  leftThumbnailURL: '/example/videos-example.png',
  leftVideoTitle: `BECOME A MEMBER`,
  leftVideoURL: 'https://www.youtube.com/embed/y8Ok76X15Xk',
  leftVideoDesc: `orem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor`,
  rightThumbnailURL: '/example/heroImg-example.jpg',
  rightVideoTitle: 'OWN A GYM',
  rightVideoURL: 'https://www.youtube.com/embed/ucESGeAlUk4',
  rightVideoDesc: `Kathy Cummings<br />Plus fitness franchisee`
}

const authorProps: AuthorBlockProps = {
  avatarURL: fionaAvatarImg,
  authorName: 'Jasmine Green',
  authorBios:
    'Certificate 3 & 4 in fitness -Punch-fit boxing trainer -Bio-print practitioner',
  authorIntro: `Jasmine is a transformation specialist and has over 5 years experience in the fitness industry as a personal trainer.
    My first contact with Plus Fitness 24/7 was as a long time member of their health clubs, which have been around for many years and were well known in the Macarthur region. 
    I have spent my career in business banking and was fortunate enough to have Plus Fitness 24/7 as a client when they made the decision to develop the brand as a franchise. 
    It was very exciting seeing the process and watch the company sell it's first franchise,
    and before I knew it they had sold their 50th and so on. I had a relationship with some of the early franchisees and they had such great things to say about their experiences, 
    I developed a keen interest in the model and contemplated jumping ship many times from business banker to business owner.`
}

export const contentBlock = () => <ContentBlock {...props} />
export const videoBlock = () => <VideoBlock {...videoProps} />
export const authorBlock = () => <AuthorBlock {...authorProps} />

export default {
  title: 'Blocks',
  component: contentBlock
}
