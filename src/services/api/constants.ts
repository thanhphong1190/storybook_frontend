import { SelectOption } from './types'

export const MAP_API_Key = process.env.MAPBOX_API_KEY
export const baseMap = 'mapbox'
export const mapId = 'streets-v8'
export const defaultMapCenter: [number, number] = [149.165098, -35.333169] // Canberra
export const defaultMapZoom: [number] = [10] // Canberra
export const basedMapStyle = `mapbox://styles/${baseMap}/${mapId}`
export const SORT_OPTIONS: Array<SelectOption> = [
    {
        label: 'Latest',
        value: '-created'
    },
    {
        label: 'Oldest',
        value: 'created'
    },
    {
        label: 'Neareast',
        value: 'distance'
    },
    {
        label: 'Size',
        value: '-size'
    }
]
export const SORT_PLACEHODLER = 'Sort by'

export default {}