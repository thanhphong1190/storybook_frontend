import { ButtonLink, IconEnums } from '../../base'
import { SocialCardProps } from './commonTypes'
import * as S from './Cards.styles'
import { Link } from '../../../services/api/types'

export interface TwitterCardProps extends SocialCardProps {
  headline?: string
  content?: string
  hashTags?: string
  action?: Link
}

export const TwitterCard = (props: TwitterCardProps) => {
  const { headline, content, hashTags, action } = props
  return (
    <S.Wrapper>
      <S.Container bg='dodger-blue'>
        <S.CardContent>
          <S.Icon name={IconEnums['twitter-simple']} />
          <S.Title color='white'>{headline}</S.Title>
          <S.Title size='2xl' color='white'>
            {content}
          </S.Title>
          <S.Title color='white'>{hashTags}</S.Title>
        </S.CardContent>
        <S.CardBottom>
          <ButtonLink href={action && action.url} color='white'>
            {action && action.label}
          </ButtonLink>
        </S.CardBottom>
      </S.Container>
    </S.Wrapper>
  )
}

export default TwitterCard
