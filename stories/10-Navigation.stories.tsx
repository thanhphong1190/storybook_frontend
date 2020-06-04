import {
  Navigation,
  NavigationProps
} from '../src/components/navigation/Navigation'

const Props: NavigationProps = {
  logo: '/example/logo.png',
  mobileLogo: '/example/logo_white.png',
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
  isBackground: false,
  buttonLabel: 'Join now'
}
export const NavigationCp = () => <Navigation {...Props} />
NavigationCp.story = {
  name: 'Nav transparent'
}
export const NavigationCpBg = () => (
  <Navigation {...Props} isBackground={true} logo={'/example/logo_white.png'} />
)
NavigationCpBg.story = {
  name: 'Nav with background'
}

export default {
  title: 'Navigation',
  component: NavigationCp
}
