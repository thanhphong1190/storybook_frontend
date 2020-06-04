import {
  ArticleCard,
  InstagramCard,
  TwitterCard,
  SocialIconCard,
  SocialCardProps
} from './cards'
import * as S from './WhatsHot.styles'
import * as G from '../../styles/global.styles'
import { ButtonLink } from '../base'
import { Link } from '../../services/api/types'

export interface BlockProps {
  type: 'twitter' | 'article' | 'instagram' | 'social-icons'
  block: SocialCardProps
}

interface BlockRow {
  blocks: [BlockProps, BlockProps, BlockProps]
}

export interface WhatsHotProps {
  title: string
  blocksRow?: BlockRow[]
  action: Link
}

export const WhatsHot = (props: WhatsHotProps) => {
  const {
    title,
    blocksRow,
    action: { label, url }
  } = props
  return (
    <S.Section>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <G.Underline />
        </S.TitleWrapper>
        <S.BlocksGroup>
          {blocksRow &&
            blocksRow.map((row, i) => (
              <S.Blocks key={i}>
                {row &&
                  row.blocks.map((block, j) => {
                    switch (block.type) {
                      case 'article':
                        return <ArticleCard key={j} {...block.block} />
                      case 'instagram':
                        return <InstagramCard key={j} {...block.block} />
                      case 'twitter':
                        return <TwitterCard key={j} {...block.block} />
                      case 'social-icons':
                        return <SocialIconCard key={j} {...block.block} />
                    }
                  })}
              </S.Blocks>
            ))}
        </S.BlocksGroup>
        <S.CenteredButton>
          <ButtonLink href={url} color='blue' className='py-4'>
            {label}
          </ButtonLink>
        </S.CenteredButton>
      </S.Container>
    </S.Section>
  )
}

export default WhatsHot
