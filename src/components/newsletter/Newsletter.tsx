import { Button } from '../base'
import { TextInput } from '../../styles/global.styles'
import {
  NewsletterWrapper,
  NewsletterTitle,
  NewsletterMessage,
  SubscribeFormWrap,
  NewsletterContent
} from './Newsletter.styled'

export interface NewsletterProps {
  newsletterTitle: string
  newsletterMsg: string
  emailPlaceHolder?: string
  subBtnText: string
  onSubBtnClick?: Function
}

export const Newsletter = (props: NewsletterProps) => {
  const {
    newsletterTitle,
    newsletterMsg,
    emailPlaceHolder,
    subBtnText,
    onSubBtnClick
  } = props

  return (
    <NewsletterWrapper>
      <NewsletterContent>
        <NewsletterTitle>{newsletterTitle}</NewsletterTitle>
        <NewsletterMessage>{newsletterMsg}</NewsletterMessage>
      </NewsletterContent>
      <SubscribeFormWrap>
        <TextInput
          placeholder={
            emailPlaceHolder ? emailPlaceHolder : 'Enter email address'
          }
        />
        <Button onClick={() => onSubBtnClick && onSubBtnClick()}>
          {subBtnText}
        </Button>
      </SubscribeFormWrap>
    </NewsletterWrapper>
  )
}

export default Newsletter
