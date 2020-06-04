import React from 'react'
import * as S from './HeardWhat.styled'
import * as G from '../../styles/global.styles'

export interface HeardWhatProps {
    title: string
}
export const HeardWhat = (props: HeardWhatProps) => {
    const {
        title
    } = props
    return (
        <S.Section>
            <S.Container>
                <S.TitleWrapper>
                    <S.Title>{title}</S.Title>
                    <G.Underline />
                </S.TitleWrapper>
            </S.Container>
        </S.Section >
    )
}

export default HeardWhat
