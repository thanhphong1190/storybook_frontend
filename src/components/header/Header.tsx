import { TextInput } from '../../styles/global.styles'
import React from 'react'
import * as S from './Header.styled'

export interface HeaderProps {
  CTATitle: string
  Titles: [string, string]
  buttonLabel: string
  buttonAction: string
  searchInputProps: object
}

export const Header = (props: HeaderProps) => {
  const {
    CTATitle,
    Titles: [orangeText, whiteText],
    buttonLabel,
    searchInputProps
  } = props
  return (
    <S.HeaderSection>
      <S.Container>
        <S.CTAGroup>
          <S.ActionTitle>{CTATitle}</S.ActionTitle>
          <S.SearchGroup>
            <TextInput {...searchInputProps} />
            <S.SearchButton color='blue'>{buttonLabel}</S.SearchButton>
          </S.SearchGroup>
        </S.CTAGroup>
        <S.HeaderTitle>
          <S.TitleText color='orange'>{orangeText}</S.TitleText>
          <S.TitleText>{whiteText}</S.TitleText>
        </S.HeaderTitle>
      </S.Container>
    </S.HeaderSection>
  )
}
export default Header
