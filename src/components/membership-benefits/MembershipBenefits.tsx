import * as S from './MembershipBenefits.styles'
import * as G from '../../styles/global.styles'

export interface BenefitProps {
  text?: string
  iconImgURL?: string
}
export interface MembershipBenefitsProps {
  title: string
  text: string
  benefits: BenefitProps[]
}
export const MembershipBenefits = (props: MembershipBenefitsProps) => {
  const { text, title, benefits } = props
  return (
    <S.Section>
      <S.Container>
        <S.TitleWrapper>
          <G.Text color='orange' size='4xl' fontWeight='bold' textCase='upper'>
            {title}
          </G.Text>
          <G.Underline color='blue' />
        </S.TitleWrapper>
        <S.TextWrapper>
          <G.Text color='white' textCase='upper'>
            {text}
          </G.Text>
        </S.TextWrapper>
        <S.BenefitsContainer>
          <S.BenefitsWrapper>
            {benefits &&
              benefits.map(item => (
                <S.Benefit>
                  <S.ImgWrapper>
                    <S.Img src={item.iconImgURL} />
                  </S.ImgWrapper>
                  <S.BenefitText>{item.text}</S.BenefitText>
                </S.Benefit>
              ))}
          </S.BenefitsWrapper>
        </S.BenefitsContainer>
      </S.Container>
    </S.Section>
  )
}

export default MembershipBenefits
