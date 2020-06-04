import {
  FranchiseBenefits,
  FranchiseBenefitsProps
} from '../src/components/franchise-benefits'
import renderer from 'react-test-renderer'

const props: FranchiseBenefitsProps = {
  title: 'Benefits Plus',
  franchise: [
    {
      name: 'Nissan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat nibh eu nibh suscipit, at elementum nunc fermentum.',
      imgURL: '/example/franchise/nissan.png',
      action: {
        label: 'View benefit',
        url: '#'
      }
    },
    {
      name: 'Medibank',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat nibh eu nibh suscipit, at elementum nunc fermentum.',
      imgURL: '/example/franchise/medibank.png',
      action: {
        label: 'View benefit',
        url: '#'
      }
    },
    {
      name: 'LTrent',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat nibh eu nibh suscipit, at elementum nunc fermentum.',
      imgURL: '/example/franchise/LTrent.png',
      action: {
        label: 'View benefit',
        url: '#'
      }
    },
    {
      name: 'My Muscle Chef',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat nibh eu nibh suscipit, at elementum nunc fermentum.',
      imgURL: '/example/franchise/muscleChef.png',
      action: {
        label: 'View benefit',
        url: '#'
      }
    },
    {
      name: 'Allied Fitness',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat nibh eu nibh suscipit, at elementum nunc fermentum.',
      imgURL: '/example/franchise/alliedFitness.png',
      action: {
        label: 'View benefit',
        url: '#'
      }
    },
    {
      name: 'Trend Micro',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat nibh eu nibh suscipit, at elementum nunc fermentum.',
      imgURL: '/example/franchise/TM_Logo.png',
      action: {
        label: 'View benefit',
        url: '#'
      }
    }
  ]
}

it('FranchiseBenefits renders correctly', () => {
  const tree = renderer.create(<FranchiseBenefits {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
