import {
  Pagination,
  PaginationProps
} from '../src/components/pagination/Pagination'
import { action } from '@storybook/addon-actions'

const props: PaginationProps = {
  itemsCountPerPage: 5,
  totalItemsCount: 1000,
  onChange: () => action('clicked')
}
export const PaginationStory = () => (
  <div className='container bg-silver p-8'>
    <Pagination {...props} />
  </div>
)
export default {
  title: 'Pagination',
  component: PaginationStory
}
