import * as S from './BlocksTable.styles'
import * as G from '../../styles/global.styles'

interface Block {
  text: string
  isFull?: boolean
}
export interface BlocksTableProps {
  blocks: Block[]
}

export const BlocksTable = (props: BlocksTableProps) => {
  const { blocks } = props
  return (
    <S.Section>
      <S.Container>
        <S.BlocksWrapper>
          {blocks &&
            blocks.map((block, i) => (
              <S.Block
                key={i}
                color={block.isFull ? 'orange' : i % 2 == 1 ? 'blue' : 'white'}
                isFull={block.isFull}
              >
                <S.BlockNumber>
                  <G.Text
                    color={block.isFull ? 'white' : 'orange'}
                    size='6xl'
                    fontWeight='bold'
                  >
                    {i + 1}
                  </G.Text>
                </S.BlockNumber>
                <S.TextWrapper>
                  {block.isFull ? (
                    <S.Text>{block.text}</S.Text>
                  ) : (
                    <G.Text size={block.isFull ? '4xl' : 'md'}>
                      {block.text}
                    </G.Text>
                  )}
                </S.TextWrapper>
              </S.Block>
            ))}
        </S.BlocksWrapper>
      </S.Container>
    </S.Section>
  )
}
