import renderer from 'react-test-renderer'
import {
  LocationSearchForm,
  LocationSearchFormProps
} from '../src/components/search/LocationSearchForm'

const props: LocationSearchFormProps = {
  locationOptions: [
    { label: '2560', value: '2536' },
    { label: '2015', value: '2015' },
    { label: '2156', value: '2156' },
    { label: '2064', value: '2064' },
    { label: '2527', value: '2527' },
    { label: 'Ambarvale', value: 'Ambarvale' },
    { label: 'ANNANGOVE', value: 'ANNANGOVE' },
    { label: 'Alexander Heights', value: 'Alexander Heights' },
    { label: 'Alkimos', value: 'Alkimos' },
    { label: 'Ashfield', value: 'Ashfield' }
  ],
  searchLabel: 'Find your local Plus Fitness',
  searchPlaceHolder: 'Enter a suburb or postcode',
  searchButtonText: 'GO'
}

it('renders correctly', () => {
  const tree = renderer.create(<LocationSearchForm {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
