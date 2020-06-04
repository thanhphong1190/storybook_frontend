import tw from 'twin.macro'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import prevImg from '../../static/imgs/icon-arrow-prev.png'
import nextImg from '../../static/imgs/icon-arrow-next.png'

export const StyledSlider = styled(Carousel)`
  &{
    margin: 0 auto;
    ${tw`mx-auto lg:px-32`}
  .carousel .slider-wrapper{
    .slide{
      background:none;
    }
  }
  .carousel.carousel-slider .control-arrow{
    ${tw`m-0 p-0 z-50`}
    width: 40px;
    height: 40px;
    :hover{
      background:none;
    }
    :before{
      width: 40px;
      height: 40px;
      content: ' ';
      ${tw`bg-cover bg-no-repeat bg-center border-0 z-50 block m-0`}
    }
    &.control-prev {
      margin-left:10px;
      :before {
        background-image: url('${prevImg}');
      }
    }
    &.control-next {
      margin-right:10px;
      :before {
        background-image: url('${nextImg}');
      }
    }
  }
  
}
`

export const SliderButton = styled.button`
  ${tw``}
`

export const Section = styled.section`
  ${tw`w-full`}
`

export const Container = styled.div`
  ${tw`container mx-auto flex justify-center content-center flex-col items-center`}
`

export const Title = styled.div`
  ${tw`text-4xl font-bold text-blue__dark text-center px-4`}
`

export const SliderWrapper = styled.div`
  ${tw`w-full mt-8`}
`
