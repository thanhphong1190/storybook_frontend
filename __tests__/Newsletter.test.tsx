import { Newsletter, NewsletterProps } from '../src/components/newsletter/Newsletter'
import renderer from 'react-test-renderer'

const props: NewsletterProps = {
  newsletterTitle: `STAY INFORMED`,
  newsletterMsg: `Register for regular updates, blogs and Plus Fitness news.`,
  subBtnText: `SUBSCRIBE TO THE NEWSLETTER`,
}

it('renders correctly', () => {
  const tree = renderer.create(<Newsletter {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
