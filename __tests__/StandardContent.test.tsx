import {
  StandardContent,
  PageContentProps
} from '../src/components/standard-content/StandardContent'
import renderer from 'react-test-renderer'

const props: PageContentProps = {
  paragraphs: [
    {
      type: 'title',
      text: 'More Payments & Shopping Icons'
    },
    {
      type: 'text',
      text:
        'Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer or engineer works. To design is to discover relationships and to make arrangements and rearrangements among these ingredients.'
    },
    { type: 'space' },

    {
      type: 'title',
      text: 'More Payments & Shopping Icons'
    },
    {
      type: 'text',
      text:
        'Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer or engineer works. To design is to discover relationships and to make arrangements and rearrangements among these ingredients.'
    }
  ]
}

it('StandardContent renders correctly', () => {
  const tree = renderer.create(<StandardContent {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
