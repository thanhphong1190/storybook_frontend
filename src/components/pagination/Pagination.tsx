import * as S from './Pagination.styles'
import { SVGIcon, IconEnums } from '../base/icon/svgIcon'
import Pag from 'react-js-pagination'

export interface PaginationProps {
  activePage?: number
  itemsCountPerPage: number
  totalItemsCount: number
  onChange: Function
}

export const Pagination = (props: PaginationProps) => {
  const { activePage, itemsCountPerPage, totalItemsCount, onChange } = props

  const prevArrow = () => <SVGIcon name={IconEnums.prev} />
  const nextArrow = () => <SVGIcon name={IconEnums.next} />
  return (
    <S.Container>
      <div className=''>
        <Pag
          activePage={activePage || 1}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          onChange={e => {
            onChange(e)
          }}
          prevPageText={prevArrow()}
          nextPageText={nextArrow()}
          innerClass=''
          itemClassPrev='prev'
          itemClassNext='next'
          activeClass='bca'
          activeLinkClass='is-active'
          linkClass='item'
        />
      </div>
    </S.Container>
  )
}

export default Pagination
