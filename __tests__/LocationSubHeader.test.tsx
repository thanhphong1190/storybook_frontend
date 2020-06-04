import {
  SubHeader,
  SubHeaderProps
} from '../src/components/header'
import renderer from 'react-test-renderer'

const props: SubHeaderProps = {
  subHeaderText: 'GYM IN NSW',
  showDropdown: true,
  showSeparator: true,
}

it('renders correctly', () => {
  const tree = renderer.create(<SubHeader {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
