import renderer from 'react-test-renderer'
import {
  CustomerReviews,
  CustomerReviewProps
} from '../src/components/customer-reviews/CustomerReviews'

const props: CustomerReviewProps = {
  title: 'Customer Reviews',
  reviews: [
    {
      customerName: 'Minh Song',
      date: '2/09/2018',
      stars: 5,
      review:
        'I signed up to the 12 week challenge as a way to stay on track and focus on my goals. Winning is obviously a factor too but I also wanted another option so I could continue to be motivated. The meal plans and group sessions created by Malcolm (who is honestly the best personal trainer I’ve ever worked with) has helped me learn new exercises, correct my form and know that I can eat without feeling guilty. I have lost 5 kilos from the beginning of the challenge until now.'
    },
    {
      customerName: 'Lisa Cao',
      date: '14/09/2017',
      stars: 4,
      review:
        'I signed up to the 12 week challenge as a way to stay on track and focus on my goals. Winning is obviously a factor too but I also wanted another option so I could continue to be motivated. The meal plans and group sessions created by Malcolm (who is honestly the best personal trainer I’ve ever worked with) has helped me learn new exercises, correct my form and know that I can eat without feeling guilty. I have lost 5 kilos from the beginning of the challenge until now.'
    }
  ]
}
it('CustomerReviews renders correctly', () => {
  const tree = renderer.create(<CustomerReviews {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
