import {
  LocationTab,
  LocationTabProps
} from '../src/components/tabs/LocationTab'

const props: LocationTabProps = {
  tabItems: [
    { label: 'ACT', url: '#' },
    { label: 'NSW', url: '#' },
    { label: 'QLD', url: '#' },
    { label: 'SA', url: '#' },
    { label: 'VIC', url: '#' },
    { label: 'WA', url: '#' }
  ]
}

export const locationTab = () => <LocationTab {...props} />

export default {
  title: 'Tabs',
  component: locationTab
}
