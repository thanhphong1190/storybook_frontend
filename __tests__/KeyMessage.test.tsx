import { KeyMessage, KeyMessageProps } from '../src/components/key-message/KeyMessage'
import renderer from 'react-test-renderer'

const props: KeyMessageProps = {
  keyImageURL: `/example/keyMsg-example.png`,
  leftTitle: `Its time for change`,
  leftMsg: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
  leftKeyBtn: `LEARN MORE`,
  leftImageURL: `/example/keyMsgLeft-example.jpg`,
  rightTitle: `Exercise your freedom`,
  rightMsg: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
  rightKeyBtn: `LEARN MORE`,
  rightImageURL: `/example/keyMsgRight-example.jpg`
}

it('renders correctly', () => {
  const tree = renderer.create(<KeyMessage {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
