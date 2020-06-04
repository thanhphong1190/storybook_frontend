import React from 'react'
import {
  MAP_API_Key,
  basedMapStyle,
  defaultMapCenter,
  defaultMapZoom
} from '../../services/api/constants'
import { GlobalMapProps } from '../../services/api/types'
import ReactMapboxGl, { ZoomControl, RotationControl } from 'react-mapbox-gl'
import { GymsMapLayers } from './GymsMapLayers'
import { LocationMapContainer, MapContainerStyled } from './LocationMap.styled'
import markerImg from '../../static/imgs/location-marker.png'

export interface LocationMapProps extends GlobalMapProps {
  mapStyle?: string
  mapZoom?: [number]
  centerCoord?: [number, number]
}

export const LocationMap = (props: LocationMapProps) => {
  const {
    mapStyle,
    mapZoom,
    centerCoord,
    mapData,
    zoomTo,
    pinIcon,
    displaySub
  } = props
  const Map = ReactMapboxGl({ accessToken: MAP_API_Key || '' })
  const markerIcon = new Image()
  markerIcon.src = pinIcon || markerImg

  return (
    <LocationMapContainer>
      <Map
        zoom={mapZoom || defaultMapZoom}
        center={centerCoord || defaultMapCenter}
        style={mapStyle || basedMapStyle}
        containerStyle={MapContainerStyled}
      >
        <ZoomControl position='top-left' />
        <RotationControl position='top-left' />
        <GymsMapLayers
          pinIcon={pinIcon}
          mapData={mapData}
          zoomTo={zoomTo}
          displaySub={displaySub}
          locationMarker={markerIcon}
        />
      </Map>
    </LocationMapContainer>
  )
}

export default LocationMap
