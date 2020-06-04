import {
  LocationTab,
  LocationTabProps
} from '../src/components/tabs/LocationTab'
import renderer from 'react-test-renderer'

const props: LocationTabProps = {
  tabItems: [
    { label: 'ACT', url: '#' },
    { label: 'NSW', url: '#' },
    { label: 'QLD', url: '#' },
    { label: 'SA', url: '#' },
    { label: 'VIC', url: '#' },
    { label: 'WA', url: '#' }
  ]
}
it('renders correctly', () => {
  const tree = renderer.create(<LocationTab {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
