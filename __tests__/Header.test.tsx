import { Header, HeaderProps } from '../src/components/header/Header'
import renderer from 'react-test-renderer'

const props: HeaderProps = {
  CTATitle: 'Find your plus fitness location',
  Titles: ['24/7 open gym - ', 'no lock in contracts'],
  buttonLabel: 'Search',
  buttonAction: '#',
  searchInputProps: {
    placeholder: 'Type your suburb or post code',
  },
}

it('renders correctly', () => {
  const tree = renderer.create(<Header {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
