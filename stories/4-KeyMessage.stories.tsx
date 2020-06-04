import { action } from '@storybook/addon-actions'
import { KeyMessage } from '../src/components/key-message/KeyMessage'

const props = {
  keyImageURL: `/example/keyMsg-example.png`,
  leftTitle: `Its time for change`,
  leftMsg: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
  leftKeyBtn: `LEARN MORE`,
  leftImageURL: `/example/keyMsgLeft-example.jpg`,
  onLeftBtnClick: action('Click left button'),
  rightTitle: `Exercise your freedom`,
  rightMsg: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
  rightKeyBtn: `LEARN MORE`,
  rightImageURL: `/example/keyMsgRight-example.jpg`,
  onRightBtnClick: action('Click right button'),
}

export const keyMessage = () => <KeyMessage {...props} />

export default {
  title: 'Key Message',
  component: keyMessage,
}
