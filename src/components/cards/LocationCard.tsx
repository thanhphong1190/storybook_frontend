import { useState } from 'react'
import {
  LocationCardStyled,
  LocationCardTitle,
  LocationInfo,
  LocationFeatures,
  FeatureIcon,
  FeatureBadge
} from './LocationCard.styled'


export interface LocationCardProps {
  title: string
  content: string
  footerText: string
  gymPageUrl: string
  features: Array<GymFeature>
}

export interface GymFeature {
  featureName: string
  featureIcon: string
}

export const LocationCard = (props: LocationCardProps) => {
  const { title, content, footerText, gymPageUrl, features } = props
  const [feature, setFeature] = useState('')
  return (
    <LocationCardStyled>
      <LocationInfo href={gymPageUrl} target='_blank'>
        <LocationCardTitle>{title}</LocationCardTitle>
        <p>{content}</p>
        <span>{footerText}</span>
      </LocationInfo>
      <LocationFeatures>
        {feature && <FeatureBadge>{feature}</FeatureBadge>}
        {features &&
          features.map((item, idx) => {
            return (
              <FeatureIcon
                key={idx}
                onMouseOver={() => {
                  setFeature(item.featureName)
                }}
                onMouseLeave={() => {
                  setFeature('')
                }}
                iconImg={item.featureIcon}
              />
            )
          })}
      </LocationFeatures>
    </LocationCardStyled>
  )
}

export default LocationCard
