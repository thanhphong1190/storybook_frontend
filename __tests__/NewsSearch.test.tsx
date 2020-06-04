import { NewsSearchForm, NewsSearchFormProps } from '../src/components/search'
import renderer from 'react-test-renderer'

const props: NewsSearchFormProps = {
  searchButtonText: 'Search',
  searchPlaceHolder: 'Search Placeholder',
  displaySearch: true,
  onSearchClose: () => {},
  onSearchClick: () => {}
}
it('renders correctly', () => {
  const tree = renderer.create(<NewsSearchForm {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
