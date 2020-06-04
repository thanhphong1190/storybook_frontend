import { ButtonLink } from '../../base'
import { Link } from '../../../services/api/types'
import { SocialCardProps } from './commonTypes'
import * as S from './Cards.styles'

export interface ArticleCardProps extends SocialCardProps {
  title?: string
  content?: string
  action?: Link
  imgURL?: string
}

export const ArticleCard = (props: ArticleCardProps) => {
  const { title, content, action, imgURL } = props
  return (
    <S.Wrapper style={{ backgroundImage: `url('${imgURL}')` }}>
      <S.Container className={`${imgURL && 'bg-black bg-opacity-50'}`}>
        <S.CardContent>
          <S.Title color={imgURL ? 'white' : 'blue'}>{title}</S.Title>
          <S.Title color={imgURL ? 'white' : 'dark-blue'} size='2xl'>
            {content}
          </S.Title>
        </S.CardContent>
        <S.CardBottom>
          <ButtonLink href={action && action.url} color='orange'>
            {action && action.label}
          </ButtonLink>
        </S.CardBottom>
      </S.Container>
    </S.Wrapper>
  )
}

export default ArticleCard
