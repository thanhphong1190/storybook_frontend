import { action } from '@storybook/addon-actions'
import {
  LocationSearchForm,
  LocationSearchFormProps,
  NewsSearchForm,
  NewsSearchFormProps
} from '../src/components/search'

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

const newsProps: NewsSearchFormProps = {
  searchButtonText: 'Search',
  searchPlaceHolder: 'Search Placeholder',
  displaySearch: true,
  onSearchClose: action('Click close search'),
  onSearchClick: action('Click search')
}

export const locationSearchForm = () => <LocationSearchForm {...props} />
export const newsSearchForm = () => <NewsSearchForm {...newsProps} />

export default {
  title: 'Search',
  component: locationSearchForm
}
