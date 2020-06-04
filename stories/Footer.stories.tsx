import React from 'react'
import { Footer } from '../src/components'
import { FooterProps } from '../src/components/footer/Footer'
import { IconEnums } from '../src/components/base'

const props: FooterProps = {
  logo: '/example/logo_white.png',
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
      { icon: IconEnums['facebook-filled'], url: '#' },
      {
        icon: IconEnums['instagram-filled'],
        url: '#'
      },
      { icon: IconEnums['youtube-filled'], url: '#' }
    ]
  }
}
export const FooterCP = () => <Footer {...props} />
export default {
  title: 'Footer',
  component: FooterCP
}
