import { Button } from '../base'
import {
  KeyMessageWrapper,
  KeyMessageImage,
  KeyMessageInner,
  KeyMessageContent,
  KeyMessageTitle,
  KeyMessageLeft,
  KeyMessageRight
} from './KeyMessage.styled'

export interface KeyMessageProps {
  keyImageURL: string
  leftTitle: string
  leftMsg: string
  leftKeyBtn: string
  leftImageURL: string
  rightTitle: string
  rightMsg: string
  rightKeyBtn: string
  rightImageURL: string
  onLeftBtnClick?: Function
  onRightBtnClick?: Function
}

export const KeyMessage = (props: KeyMessageProps) => {
  const {
    keyImageURL,
    leftTitle,
    leftMsg,
    leftKeyBtn,
    leftImageURL,
    rightTitle,
    rightMsg,
    rightKeyBtn,
    rightImageURL,
    onLeftBtnClick,
    onRightBtnClick
  } = props

  return (
    <KeyMessageWrapper>
      <KeyMessageImage src={keyImageURL} />
      <KeyMessageInner>
        <KeyMessageContent leftImage={leftImageURL}>
          <KeyMessageTitle>{leftTitle}</KeyMessageTitle>
          <KeyMessageLeft>{leftMsg}</KeyMessageLeft>
          <Button
            color='white'
            onClick={() => onLeftBtnClick && onLeftBtnClick()}
          >
            {leftKeyBtn}
          </Button>
        </KeyMessageContent>
        <KeyMessageContent rightImage={rightImageURL}>
          <KeyMessageTitle>{rightTitle}</KeyMessageTitle>
          <KeyMessageRight>{rightMsg}</KeyMessageRight>
          <Button
            color='white'
            onClick={() => onRightBtnClick && onRightBtnClick()}
          >
            {rightKeyBtn}
          </Button>
        </KeyMessageContent>
      </KeyMessageInner>
    </KeyMessageWrapper>
  )
}

export default KeyMessage
