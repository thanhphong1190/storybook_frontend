import { Menu, MenuProps } from '../src/components/menu'
import renderer from 'react-test-renderer'

const props: MenuProps = {
  menuItems: [
    { label: 'All Categories', url: '#' },
    { label: 'Fitness', url: '#' },
    { label: 'Nutrition', url: '#' },
    { label: 'Wellness', url: '#' },
    { label: 'Other 1', url: '#' },
    { label: 'Other 2', url: '#' }
  ]
}
it('renders correctly', () => {
  const tree = renderer.create(<Menu {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
