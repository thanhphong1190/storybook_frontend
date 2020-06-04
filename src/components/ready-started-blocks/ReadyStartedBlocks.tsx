import * as S from './ReadyStartedBlocks.styles'

export interface Block {
  imgURL: string
  text: string
  color?: 'white' | 'blue' | 'blue-dark' | 'orange'
  link: string
}

export interface ReadyStartedBlocksProps {
  blocks: Block[]
}

export const ReadyStartedBlocks = (props: ReadyStartedBlocksProps) => {
  const { blocks } = props
  return (
    <S.Section>
      <S.Container>
        <S.BlocksWrapper>
          {blocks &&
            blocks.map(block => (
              <S.Block color={block.color}>
                <S.LinkWrapper href={block.link}>
                  <S.ImgWrapper>
                    <S.IMG src={block.imgURL} />
                  </S.ImgWrapper>
                  <S.Text
                    dangerouslySetInnerHTML={{ __html: block.text }}
                  ></S.Text>
                </S.LinkWrapper>
              </S.Block>
            ))}
        </S.BlocksWrapper>
      </S.Container>
    </S.Section>
  )
}
