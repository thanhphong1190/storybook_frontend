import {
  HeardWhat,
  HeardWhatProps
} from '../src/components/heard-what/HeardWhat'

const props: HeardWhatProps = {
  title: 'Hear what our franchisees have to say'
}
export const HeardWhatStory = () => <HeardWhat {...props} />
export default {
  title: 'Heard what',
  component: HeardWhatStory
}
