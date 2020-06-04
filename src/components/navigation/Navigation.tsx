import React, { useState } from 'react'
import { Header, HeaderProps } from '../header/Header'
import { SVGIcon, IconEnums } from '../base'

import * as S from './Navigation.styles'
import { Link } from '../../services/api/types'

export interface NavigationProps {
  logo: string
  mobileLogo: string
  links: Link[]
  isBackground?: boolean
  mobileHeaderProps: HeaderProps
  buttonLabel: string
}
export const Navigation = (props: NavigationProps) => {
  const {
    logo,
    mobileLogo,
    links,
    isBackground,
    mobileHeaderProps,
    buttonLabel
  } = props
  const [mobileOpened, setMobileOpened] = useState(false)
  const mobileMenuClick = () => {
    console.log(mobileOpened)
    setMobileOpened(!mobileOpened)
  }
  return (
    <S.NavigationSection {...{ isBackground: isBackground || mobileOpened }}>
      <S.Container>
        <S.Logo src={logo} alt='' />
        <S.MobileLogo src={mobileLogo} alt='' />
        <S.DesktopMenus>
          {links &&
            links.map((l, i) => (
              <S.Menu key={i} href={l.url}>
                {l.label}
              </S.Menu>
            ))}
          <S.JoinButton>{buttonLabel}</S.JoinButton>
        </S.DesktopMenus>
        {!mobileOpened && (
          <S.MobileMenuButton color='orange' onClick={mobileMenuClick}>
            <SVGIcon name={IconEnums.burger} />
          </S.MobileMenuButton>
        )}

        <S.MobileWrapper
          className={`${!mobileOpened && 'hidden'}`}
          {...{ isShow: mobileOpened }}
        >
          <S.HeaderGroup>
            <S.MobileLogo src={mobileLogo} alt='' />
            <S.MobileMenuButton onClick={mobileMenuClick}>
              <SVGIcon name={IconEnums.close} />
            </S.MobileMenuButton>
          </S.HeaderGroup>
          <S.MobileMenusWrapper className='bg-blue bg-opacity-75'>
            <S.MobileMenus>
              <S.MobileLinks>
                {links &&
                  links.map((l, i) => (
                    <S.MobileLink key={i} href={l.url}>
                      {l.label}
                    </S.MobileLink>
                  ))}
              </S.MobileLinks>
              <S.MobileButtonWrapper>
                <S.JoinButton>{buttonLabel}</S.JoinButton>
              </S.MobileButtonWrapper>
            </S.MobileMenus>
          </S.MobileMenusWrapper>
          <S.MobileActions>
            <Header {...mobileHeaderProps} />
          </S.MobileActions>
        </S.MobileWrapper>
      </S.Container>
    </S.NavigationSection>
  )
}

export default Navigation
