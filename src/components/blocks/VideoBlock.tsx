import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {
  VideoWrapper,
  PlayerWrapper,
  VideoTitle,
  VideoDescription,
  PlayButtonWrap,
  ReactPlayerStyled
} from './VideoBlock.styled'
import playButtonImg from '../../static/imgs/playbutton.png'

export interface VideoBlocksProps {
  thumbnailImageURL?: string
  leftThumbnailURL?: string
  leftVideoTitle?: string
  leftVideoURL: string
  leftVideoDesc?: string
  rightThumbnailURL?: string
  rightVideoTitle?: string
  rightVideoURL: string
  rightVideoDesc?: string
}

export interface PlayButtonProps {
  buttonImgURL?: string
  onPlayClick?: Function
}

export interface VideoPlayerProps {
  thumbnailURL?: string
  videoTitle?: string
  videoURL?: string
  videoDesc?: string
}

export const PlayButton = (props: PlayButtonProps) => {
  const { buttonImgURL, onPlayClick } = props

  return (
    <PlayButtonWrap
      onClick={() => {
        onPlayClick && onPlayClick()
      }}
    >
      <img src={buttonImgURL || playButtonImg} />
    </PlayButtonWrap>
  )
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(false)
  const [displayEmbed, setDisplayEmbed] = useState(false)
  const playerRef = React.useRef<ReactPlayer>(null)

  const { thumbnailURL, videoTitle, videoURL, videoDesc } = props

  const displayPlay = () => {
    setPlaying(true)
    setDisplayEmbed(true)
  }

  return (
    <PlayerWrapper thumbURL={thumbnailURL}>
      <VideoTitle>{videoTitle}</VideoTitle>
      <PlayButton onPlayClick={displayPlay} />
      {displayEmbed && (
        <ReactPlayerStyled
          className='react-player'
          ref={playerRef}
          playing={playing}
          light={!displayEmbed}
          isDisplay={displayEmbed}
          height='100%'
          width='50%'
          onPause={() => {
            setDisplayEmbed(false)
          }}
          url={videoURL}
        />
      )}
      <VideoDescription dangerouslySetInnerHTML={{ __html: videoDesc || '' }} />
    </PlayerWrapper>
  )
}

export const VideoBlock = (props: VideoBlocksProps) => {
  const {
    leftThumbnailURL,
    leftVideoTitle,
    leftVideoURL,
    leftVideoDesc,
    rightThumbnailURL,
    rightVideoTitle,
    rightVideoURL,
    rightVideoDesc
  } = props

  return (
    <VideoWrapper>
      <VideoPlayer
        thumbnailURL={leftThumbnailURL}
        videoTitle={leftVideoTitle}
        videoURL={leftVideoURL}
        videoDesc={leftVideoDesc}
      />
      <VideoPlayer
        thumbnailURL={rightThumbnailURL}
        videoTitle={rightVideoTitle}
        videoURL={rightVideoURL}
        videoDesc={rightVideoDesc}
      />
    </VideoWrapper>
  )
}

export default VideoBlock
