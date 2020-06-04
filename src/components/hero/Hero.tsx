import * as S from './Hero.styles'
import { TextProps, ButtonProps } from '../../services/api/types'

export interface HerorTextProps extends TextProps {
  spaceTop?: number
  spaceBottom?: number
}
export interface HeroProps {
  bgImgURL?: string
  bgColor?: 'orange' | 'blue' | 'dark-blue' | 'dodger-blue' | 'white' | 'grey'
  contentPosition?: 'center' | 'left' | 'right'
  contentWidth?: 'full' | '1/2' | '2/3' | '3/4' | '4/5'
  texts?: HerorTextProps[]
  buttons?: ButtonProps[]
  overlay?: boolean
}

export const Hero = (props: HeroProps) => {
  const {
    bgImgURL,
    bgColor,
    contentPosition,
    overlay,
    texts,
    buttons,
    contentWidth
  } = props
  return (
    <S.Section bgImgURL={bgImgURL} bgColor={bgColor}>
      <S.OverlayWrapper className={overlay ? `bg-opacity-50 bg-black` : ''}>
        <S.Container contentPosition={contentPosition}>
          <S.ContentWrapper width={contentWidth}>
            {texts &&
              texts.map(textProp => (
                <S.HeroText {...textProp}>{textProp.text}</S.HeroText>
              ))}
            <S.ButtonGroup contentPosition={contentPosition}>
              {buttons &&
                buttons.map(but => (
                  <S.HeroButtonLink {...but}>{but.label}</S.HeroButtonLink>
                ))}
            </S.ButtonGroup>
          </S.ContentWrapper>
        </S.Container>
      </S.OverlayWrapper>
    </S.Section>
  )
}

export default Hero
