import * as G from '../../styles/global.styles'
import * as S from './FranchiseBenefits.styles'
import {
  FranchiseBenefitCard,
  FranchiseBenefitCardProps
} from './FranchiseBenefitCard'

export interface FranchiseBenefitsProps {
  franchise: FranchiseBenefitCardProps[]
  title?: string
}

export const FranchiseBenefits = (props: FranchiseBenefitsProps) => {
  const { franchise, title } = props
  return (
    <S.Section>
      <S.Container>
        <S.TitleWrapper>
          <G.Text size='4xl' color='blue-dark' fontWeight='bold'>
            {title}
          </G.Text>
        </S.TitleWrapper>
        <S.FranchiseWrapper>
          {franchise &&
            franchise.map((f, i) => (
              <S.FranchiseItem key={i}>
                <FranchiseBenefitCard {...f} />
              </S.FranchiseItem>
            ))}
        </S.FranchiseWrapper>
      </S.Container>
    </S.Section>
  )
}
