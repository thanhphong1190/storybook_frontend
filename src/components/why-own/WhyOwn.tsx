import React from 'react'
import * as S from './WhyOwn.styled'
import * as G from '../../styles/global.styles'

export interface WhyOwnProps {
    imageURL: string,
    title: string,
    textLeft: string,
    textRight: string,
    logoImageURLs: Array<string>
}
export const WhyOwn = (props: WhyOwnProps) => {
    const {
        imageURL,
        title,
        textLeft,
        textRight,
        logoImageURLs
    } = props
    return (
        <S.Section>
            <S.ImageWrapper>
                <S.Img src={imageURL} />
            </S.ImageWrapper>
            <S.Container>
                <S.TitleWrapper>
                    <S.Title>{title}</S.Title>
                    <G.Underline />
                </S.TitleWrapper>
                <S.ContentWrapper>
                    <S.ContentTextWrapper>
                        <S.ContentTextLeft>{textLeft}</S.ContentTextLeft>
                        <S.ContentTextRight>{textRight}</S.ContentTextRight>
                        <S.ContentLogo>
                            {
                                logoImageURLs && logoImageURLs.map((url, index) => (
                                    <S.LogoImage key={index}>
                                        <S.Img src={url} />
                                    </S.LogoImage>
                                ))
                            }
                        </S.ContentLogo>
                    </S.ContentTextWrapper>
                </S.ContentWrapper>
            </S.Container>
        </S.Section >
    )
}

export default WhyOwn
