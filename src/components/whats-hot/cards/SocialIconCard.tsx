import { SVGIcon } from '../../base'
import { Iconlink } from '../../../services/api/types'
import { SocialCardProps } from './commonTypes'
import * as S from './Cards.styles'

export interface SocialIconCardProps extends SocialCardProps {
  title?: string
  socials?: Iconlink[]
}

export const SocialIconCard = (props: SocialIconCardProps) => {
  const { title, socials } = props
  return (
    <S.Wrapper>
      <S.Container bg='blue'>
        <S.Title size='4xl' color='white'>
          {title}
        </S.Title>
        <S.CardIconsContent>
          {socials &&
            socials.map((icon, i) => (
              <S.IconWrapper
                href={icon.url}
                align={i % 2 == 0 ? 'right' : 'left'}
              >
                <SVGIcon clickable={true} name={icon.icon} />
              </S.IconWrapper>
            ))}
        </S.CardIconsContent>
      </S.Container>
    </S.Wrapper>
  )
}

export default SocialIconCard
