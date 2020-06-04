import { action } from '@storybook/addon-actions'
import { Newsletter } from '../src/components/newsletter/Newsletter'

const props = {
  newsletterTitle: `STAY INFORMED`,
  newsletterMsg: `Register for regular updates, blogs and Plus Fitness news`,
  subBtnText: `SUBSCRIBE TO THE NEWSLETTER`,
  onSubBtnClick: action('Click subscribe button'),
}

export const newsletter = () => <Newsletter {...props} />

export default {
  title: 'Newsletter',
  component: newsletter,
}
