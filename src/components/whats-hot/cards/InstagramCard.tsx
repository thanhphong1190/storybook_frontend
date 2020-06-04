import { SocialCardProps } from './commonTypes'
import { IconEnums } from '../../base'
import * as S from './Cards.styles'

export interface InstagramCardProps extends SocialCardProps {
  imgURL?: string
  hashTags?: string
  content?: string
}

export const InstagramCard = (props: InstagramCardProps) => {
  const { imgURL, hashTags, content } = props
  return (
    <S.Wrapper style={{ backgroundImage: `url('${imgURL}')` }}>
      <S.Container>
        <S.CardContent>
          <S.Title>{content}</S.Title>
        </S.CardContent>
        <S.CardBottom>
          <S.Icon className='mt-2 mb-2' name={IconEnums.instagram} />
          <S.Title color='white'>{hashTags}</S.Title>
        </S.CardBottom>
      </S.Container>
    </S.Wrapper>
  )
}

export default InstagramCard
