import { Link } from '../../services/api/types'
import * as G from '../../styles/global.styles'
import * as S from './FranchiseBenefitCard.styles'

export interface FranchiseBenefitCardProps {
  imgURL: string
  name: string
  description: string
  action: Link
}

export const FranchiseBenefitCard = (props: FranchiseBenefitCardProps) => {
  const { imgURL, name, description, action } = props
  return (
    <S.CardContainer>
      <S.ImgWrapper>
        <S.Img src={imgURL} />
      </S.ImgWrapper>
      <S.NameWrapper>
        <G.Text color='orange' size='4xl' fontWeight='semibold'>
          {name}
        </G.Text>
      </S.NameWrapper>
      <S.DetailWrapper>
        <S.Detail>{description}</S.Detail>
        <S.ButtonWrapper>
          <S.Button href={action.url}>{action.label}</S.Button>
        </S.ButtonWrapper>
      </S.DetailWrapper>
    </S.CardContainer>
  )
}

export default FranchiseBenefitCard
