import { Footer, FooterProps } from '../src/components/footer/Footer'
import renderer from 'react-test-renderer'
import { IconEnums } from '../src/components/base'

const props: FooterProps = {
  logo: '../src/static/imgs/logo_white.png',
  copyright: 'Copyright © 2017 Plus Fitness. All rights reserved.',
  links: [
    { label: 'Terms and Conditions', url: '#' },
    { label: 'Advertise with us', url: '#' },
    { label: 'Privacy Policy', url: '#' },
    { label: 'Login', url: '#' }
  ],
  social: {
    label: 'Follow Us',
    socialLinks: [
      { icon: IconEnums['facebook-c'], url: '#' },
      {
        icon: IconEnums['instagram-c'],
        url: '#'
      },
      { icon: IconEnums['youtube-c'], url: '#' }
    ]
  }
}

it('renders correctly', () => {
  const tree = renderer.create(<Footer {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
