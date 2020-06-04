import {
  AuthorSection,
  AuthorAvatarFrame,
  AuthorAvatar,
  AuthorInformation,
  AuthorName,
  AuthorBios,
  AuthorIntro,
  ReadButton
} from './AuthorBlock.styled'
import circleFrame from '../../static/imgs/circle.png'
import { useState } from 'react'

export interface AuthorBlockProps {
  avatarURL: string
  authorName: string
  authorBios: string
  authorIntro: string
}

export const AuthorBlock = (props: AuthorBlockProps) => {
  const { avatarURL, authorName, authorBios, authorIntro } = props
  const [introCollapsed, setIntroCollapsed] = useState(true)
  const [readBtnText, setReadBtnText] = useState('read more')
  const expandDesc = () => {
    setIntroCollapsed(!introCollapsed)

    if (!introCollapsed) {
      setReadBtnText('read more')
    } else {
      setReadBtnText('close')
    }
  }
  return (
    <AuthorSection>
      <AuthorAvatarFrame frameImgURL={circleFrame}>
        <AuthorAvatar avatarImgURL={avatarURL} />
      </AuthorAvatarFrame>
      <AuthorInformation>
        <AuthorName>{authorName}</AuthorName>
        <AuthorBios>{authorBios}</AuthorBios>
        <AuthorIntro collapsed={introCollapsed}>
          <p dangerouslySetInnerHTML={{ __html: authorIntro }} />
        </AuthorIntro>
        <ReadButton onClick={expandDesc}>{readBtnText}</ReadButton>
      </AuthorInformation>
    </AuthorSection>
  )
}
export default AuthorBlock
