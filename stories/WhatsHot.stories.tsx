import { WhatsHot, WhatsHotProps } from '../src/components/whats-hot/WhatsHot'
import { IconEnums } from '../src/components/base'

const props: WhatsHotProps = {
  title: `What's hot`,
  blocksRow: [
    {
      blocks: [
        {
          type: 'article',
          block: {
            title: 'In fitness by Jasmine Green',
            content: `3 reason to add strength training`,
            action: { label: 'Read article', url: '#' },
            imgURL: '/example/Social-card-article-bg.png'
          }
        },
        {
          type: 'article',
          block: {
            title: 'In fitness by Jasmine Green',
            content: `3 reason to add strength training`,
            action: { label: 'Read article', url: '#' },
            imgURL: '/example/Social-card-article-bg.png'
          }
        },
        {
          type: 'social-icons',
          block: {
            title: 'Follow Us',
            socials: [
              { icon: IconEnums['facebook-c'], url: '#' },
              { icon: IconEnums['twitter-c'], url: '#' },
              { icon: IconEnums['instagram-c'], url: '#' }
            ]
          }
        }
      ]
    }
  ],
  action: {
    label: 'Access to the blog',
    url: '#'
  }
}
export const WhatsHotStory = () => <WhatsHot {...props} />
export default {
  title: `What's hot`,
  component: WhatsHotStory
}
