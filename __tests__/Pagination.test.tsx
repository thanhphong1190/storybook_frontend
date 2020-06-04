import renderer from 'react-test-renderer'
import {
  Pagination,
  PaginationProps
} from '../src/components/pagination/Pagination'

const props: PaginationProps = {
  itemsCountPerPage: 5,
  totalItemsCount: 1000,
  onChange: () => {}
}

it('Pagination renders correctly', () => {
  const tree = renderer.create(<Pagination {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
