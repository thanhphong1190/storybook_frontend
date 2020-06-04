import { Menu, MenuProps } from '../src/components/menu'

const props: MenuProps = {
  menuItems: [
    { label: 'All Categories', url: '#' },
    { label: 'Fitness', url: '#' },
    { label: 'Nutrition', url: '#' },
    { label: 'Wellness', url: '#' },
    { label: 'Other 1', url: '#' },
    { label: 'Other 2', url: '#' }
  ]
}

export const menu = () => <Menu {...props} />

export default {
  title: 'Menu',
  component: menu
}
