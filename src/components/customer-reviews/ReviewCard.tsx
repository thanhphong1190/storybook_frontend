import { Icon, Icons } from '../base'
import * as S from './ReviewCard.styled'
export interface ReviewCardProps {
  stars: number
  date: string
  customerName: string
  review: string
}

export const ReviewCard = (props: ReviewCardProps) => {
  const { stars, date, customerName, review } = props
  return (
    <S.Container>
      <S.StarsGroup>
        {[...Array(Math.ceil(stars))].map(() => (
          <Icon key={Math.random()} icon={Icons.star} />
        ))}
      </S.StarsGroup>
      <S.Date>{date}</S.Date>
      <S.CustomerName>{customerName}</S.CustomerName>
      <S.ReviewText>{review}</S.ReviewText>
    </S.Container>
  )
}

export default ReviewCard
