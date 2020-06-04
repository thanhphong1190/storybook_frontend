import {
  Navigation,
  NavigationProps
} from '../src/components/navigation/Navigation'
import renderer from 'react-test-renderer'
const props: NavigationProps = {
  logo: '../src/static/imgs/logo.png',
  mobileLogo: '../src/static/imgs/logo_white.png',
  links: [
    {
      url: '#',
      label: 'Find a Gym'
    },
    {
      url: '#',
      label: 'Memberships'
    },
    {
      url: '#',
      label: 'Our Classes'
    },
    {
      url: '#',
      label: 'Own a Gym'
    },
    {
      url: '#',
      label: 'Careers'
    },
    {
      url: '#',
      label: 'Plus Performance'
    }
  ],
  mobileHeaderProps: {
    CTATitle: 'Find your plus fitness location',
    Titles: ['24/7 open gym -', 'no lock in contracts'],
    buttonLabel: 'Search',
    buttonAction: '#',
    searchInputProps: {
      placeholder: 'Type your suburb or post code'
    }
  },
  buttonLabel: 'Join now'
}

it('renders correctly', () => {
  const tree = renderer.create(<Navigation {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
