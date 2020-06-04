import * as G from '../../styles/global.styles'
import * as S from './StandardHero.styles'

export interface StandardHeroProps {
  title?: string
  imgURL?: string
}

export const StandardHero = (props: StandardHeroProps) => {
  const { title, imgURL } = props
  return (
    <S.Section>
      <S.Container>
        {title && (
          <S.TitleWrapper>
            <G.Text color='blue-dark' size='4xl' fontWeight='bold'>
              {title}
            </G.Text>
          </S.TitleWrapper>
        )}
        {imgURL && <S.IMG src={imgURL} />}
      </S.Container>
    </S.Section>
  )
}

export default StandardHero
