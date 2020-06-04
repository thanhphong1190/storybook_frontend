import { LocationMap } from '../src/components/maps/LocationMap'
import locationMarker from '../src/static/imgs/location-marker.png'

const gymLocationData = [
  {
    geometry: { coordinates: [149.165098, -35.333169] },
    pageURL: 'canberra',
    suburb: 'Canberra'
  },
  {
    geometry: { coordinates: [148.165098, -35.333169] },
    pageURL: 'tumut',
    suburb: 'Tumut'
  },
  {
    geometry: { coordinates: [149.165098, -36.333169] },
    pageURL: 'cooma',
    suburb: 'Cooma'
  },
  {
    geometry: { coordinates: [150.165098, -35.433169] },
    pageURL: 'brooman',
    suburb: 'Brooman'
  },
  {
    geometry: { coordinates: [149.555098, -33.333169] },
    pageURL: 'organge',
    suburb: 'Organge'
  },
  {
    geometry: { coordinates: [149.365098, -35.933169] },
    pageURL: 'bredbo',
    suburb: 'Bredbo'
  },
  {
    geometry: { coordinates: [149.465098, -32.333169] },
    pageURL: 'mudgee',
    suburb: 'Mudgee'
  }
]

const props = {
  pinIcon: locationMarker,
  mapData: gymLocationData,
  displaySub: {
    geometry: { coordinates: [149.165098, -35.333169] },
    pageURL: 'canberra',
    suburb: 'Canberra'
  }
}

export const locationMap = () => <LocationMap {...props} />

export default {
  title: 'Maps',
  component: locationMap
}
