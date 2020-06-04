import { BlocksTable, BlocksTableProps } from '../src/components/blocks-table'
import renderer from 'react-test-renderer'

const props: BlocksTableProps = {
  blocks: [
    {
      text: 'You enquire about a Plus Fitness 24/7 Franchise'
    },
    {
      text: 'We call you to discuss your completed form'
    },
    {
      text:
        'We provide you with our Budgeting and Projections Tool and full disclosure document'
    },
    {
      text:
        'After your Q&A Session we confirm your chosen territory is both suitable and available'
    },
    {
      text: 'Support in selecting and negotiating on a suitable premises'
    },
    {
      text: 'DA prepared and then submitted to Council'
    },
    {
      text: 'Franchisee Induction Training program'
    },
    {
      text:
        'Building works. At the same time you will also start your Full Presale of Memberships.'
    },
    {
      text:
        'Our team will complete your aesthetic fit out and install your gym equipment'
    },
    {
      text: 'YOUR PLUS FITNESS 24/7 GRAND OPENING!',
      isFull: true
    }
  ]
}

it('BlocksTable renders correctly', () => {
  const tree = renderer.create(<BlocksTable {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
