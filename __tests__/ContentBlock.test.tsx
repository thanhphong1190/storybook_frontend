import {
  ContentBlock,
  ContentBlocksProps
} from '../src/components/blocks/ContentBlock'
import renderer from 'react-test-renderer'

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
  secondaryBtnText: 'ENQUIRE NOW'
}

it('renders correctly', () => {
  const tree = renderer.create(<ContentBlock {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
