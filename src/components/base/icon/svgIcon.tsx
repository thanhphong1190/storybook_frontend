import { iconConfigs } from './iconConfig'
import { StyledSVGIcon } from './Icon.styles'
interface SVGProps {
  key?: number
  filename: string
  viewbox?: string
}

export enum IconEnums {
  'instagram' = 1,
  'instagram-c' = 2,
  'twitter-simple' = 3,
  'twitter-c' = 4,
  'facebook-c' = 5,
  'youtube-c' = 6,
  'facebook-filled' = 7,
  'youtube-filled' = 8,
  'twitter-filled' = 9,
  'instagram-filled' = 10,
  'close' = 11,
  'burger' = 12,
  'prev' = 13,
  'next' = 14
}

export interface SVGIconProps {
  name: IconEnums
  className?: string
  options?: SVGProps
  clickable?: boolean
}

export const SVGIcon = (props: SVGIconProps) => {
  const { name, className, options, clickable } = props
  let opts = options
  if (!opts && name) {
    opts = iconConfigs.find(s => s.key == name)
  }

  return opts ? (
    <StyledSVGIcon
      clickable={clickable}
      src={opts.filename}
      className={`${className && className}`}
      wrapper='span'
    />
  ) : null
}

export default SVGIcon
