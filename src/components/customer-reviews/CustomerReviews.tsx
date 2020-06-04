import { ReviewCard, ReviewCardProps } from './ReviewCard'
import * as S from './CustomerReviews.styled'
import * as G from '../../styles/global.styles'

export interface CustomerReviewProps {
  title: string
  reviews: ReviewCardProps[]
}
export const CustomerReviews = (props: CustomerReviewProps) => {
  const { title, reviews } = props
  const sliderSetting = {
    swipeable: true,
    showArrows: true,
    infiniteLoop: true,
    autoPlay: true,
    emulateTouch: true,
    showIndicators: false,
    showStatus: false
  }
  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <G.Underline />
        <S.SliderWrapper>
          <S.StyledSlider {...sliderSetting}>
            {reviews &&
              reviews.map((rev, i) => <ReviewCard key={i} {...rev} />)}
          </S.StyledSlider>
        </S.SliderWrapper>
      </S.Container>
    </S.Section>
  )
}

export default CustomerReviews
