import { useState } from 'react'
import { Layer, Feature, Popup } from 'react-mapbox-gl'
import { MapPopupWrapper } from './LocationMap.styled'
import { GymLocation, GlobalMapProps } from '../../services/api/types'


function changeCursor(event: any, type: string) {
  const { map } = event.target.style
  map.getCanvas().style.cursor = type || 'grab'
}

export interface GymsMapLayerProps extends GlobalMapProps {
  onLocationClick?: Function
  locationMarker: HTMLElement
}

export const GymsMapLayers = (props: GymsMapLayerProps) => {
  const { zoomTo, mapData, setCenter, displaySub, locationMarker } = props
  const [location, setLocation] = useState(displaySub)

  return (
    <>
      <Layer
        type='symbol'
        id='gym_pins'
        images={['gymMarker', locationMarker]}
        layout={{ 'icon-image': 'gymMarker' }}
        style={{ cursor: 'pointer' }}
        filter={['!has', 'point_count']}
        geoJSONSourceOptions={{
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50
        }}
        onMouseEnter={(e: any) => changeCursor(e, 'pointer')}
        onMouseLeave={(e: any) => changeCursor(e, 'grab')}
      >
        {mapData &&
          mapData.map((pin: GymLocation, idx: number) => (
            <Feature
              key={idx}
              properties={{ pin: pin }}
              coordinates={pin.geometry.coordinates}
              onClick={() => {
                setCenter && setCenter(pin.geometry.coordinates)
                setLocation(pin)
              }}
            />
          ))}
      </Layer>

      {/* clustered pin circles */}
      <Layer
        id='gym_cluster_layer'
        sourceId='gym_pins'
        filter={['has', 'point_count']}
        paint={{
          'circle-color': 'blue',
          'circle-radius': {
            property: 'point_count',
            type: 'interval',
            stops: [
              [0, 1],
              [1, 1],
              [2, 20],
              [4, 30],
              [10, 40]
            ]
          },
          'circle-stroke-width': 3,
          'circle-stroke-color': 'orange',
          'circle-stroke-opacity': 1
        }}
        type='circle'
        style={{ cursor: 'pointer' }}
        onClick={(event: any) => zoomTo && zoomTo(event)}
        onMouseEnter={(e: any) => changeCursor(e, 'pointer')}
        onMouseLeave={(e: any) => changeCursor(e, 'grab')}
      />

      {/* clustered pin labels */}
      <Layer
        id='gym_cluster_count'
        type='symbol'
        sourceId='gym_pins'
        filter={['has', 'point_count']}
        layout={{
          'text-field': '{point_count}',
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': 16
        }}
        paint={{
          'text-color': 'white'
        }}
        onMouseEnter={(e: any) => changeCursor(e, 'pointer')}
        onMouseLeave={(e: any) => changeCursor(e, 'grab')}
      />
      {location && (
        <Popup
          style={{ top: '-2rem' }}
          coordinates={location.geometry.coordinates}
        >
          <MapPopupWrapper>
            <a target='_blank' href={location.pageURL}>
              {location.suburb}
            </a>
          </MapPopupWrapper>
        </Popup>
      )}
    </>
  )
}

export default GymsMapLayers
