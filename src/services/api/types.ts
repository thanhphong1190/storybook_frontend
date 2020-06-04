import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { IconEnums } from '../../components/base'
export interface Link {
  url: string
  label: string
}
export interface Sociallink {
  url: string
  icon: IconDefinition
}
export interface Iconlink {
  url: string
  icon: IconEnums
}
export interface GymLocation {
  geometry: { coordinates: Array<number> }
  pageURL: string
  suburb: string
}
export interface SelectOption {
  value: string
  label: string
}
export interface GlobalMapProps {
  mapData?: Array<GymLocation>
  displaySub?: GymLocation
  pinIcon?: string
  setCenter?: Function
  zoomTo?: Function
}
export interface TextProps {
  text?: string
  color?:
    | 'black'
    | 'white'
    | 'blue'
    | 'blue-dark'
    | 'blue-grey'
    | 'blue-dodger'
    | 'orange'
    | 'orange-dark'
    | 'green'
    | 'grey'
    | 'grey-light'
    | 'grey-medium'
    | 'grey-dark'
    | 'silver'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl'
  fontWeight?: 'thin' | 'semibold' | 'bold' | 'extrabold'
  textCase?: 'upper' | 'lower'
}

export interface ButtonProps {
  label: string
  action: string
  color: 'white' | 'blue' | 'orange'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl'
  fontWeight?: 'thin' | 'semibold' | 'bold' | 'extrabold'
}
export default {}
