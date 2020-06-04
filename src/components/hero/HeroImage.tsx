import { Button } from '../base'
import {
  HeroWrapper,
  HeroInner,
  BannerText,
  HeroHeading,
  HeroDescription
} from './HeroImage.styled'

export interface HeroImageProps {
  heading: string
  description: string
  imgSrc: string
  joinBtnText: string
  onTryBtnClick?: Function
}

export const HeroImage = (props: HeroImageProps) => {
  const { heading, description, imgSrc, joinBtnText, onTryBtnClick } = props

  return (
    <HeroWrapper>
      <HeroInner>
        <BannerText>
          <HeroHeading dangerouslySetInnerHTML={{ __html: heading }} />
          <HeroDescription dangerouslySetInnerHTML={{ __html: description }} />
          <Button onClick={() => onTryBtnClick && onTryBtnClick()}>
            {joinBtnText}
          </Button>
        </BannerText>
        <img src={imgSrc} />
      </HeroInner>
    </HeroWrapper>
  )
}

export default HeroImage
