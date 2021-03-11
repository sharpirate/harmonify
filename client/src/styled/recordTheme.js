import { css } from 'styled-components';
import theme from './theme';
import playIcon from '../assets/svg/play.svg';
import pauseIcon from '../assets/svg/pause.svg';

const RecordStyle = css`
  width: ${theme.record.size}px;
  height: ${theme.record.size}px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.light};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 ${theme.record.gap}rem;
  transition: transform 0.3s ease;

  :hover {
    background: ${theme.colors.primary};
    transform: scale(1.1);
  }

  // use the bigSize for calculating on mobile
  @media ${theme.breakpoints.columnLayout} {
    margin: ${theme.record.gap}rem 0;
    width: ${theme.record.bigSize}px;
    height: ${theme.record.bigSize}px;
  }
`;

const SelectedArtist = css`
  ${RecordStyle};

  background: ${theme.colors.primary};
  margin: 0;
  transition: none;
  transform: scale(${theme.record.scaleFactor});
  transform-origin: top center;

  margin-bottom: ${theme.record.size * (theme.record.scaleFactor - 1)}px;
  
  @media ${theme.breakpoints.columnLayout} {
    margin-bottom: ${theme.record.bigSize * (theme.record.scaleFactor - 1)}px;
  }

  :hover {
    transform: scale(${theme.record.scaleFactor});
  }
`;

const trackAvailable = css`
  ::after {
    position: absolute;
    content: '';
    width: 70px;
    height: 70px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: center center/cover;
    background-image: url(${props => props.isPlaying ? pauseIcon : playIcon});
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.radius};
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;

const trackUnavailable = css`
  ::after {
    position: absolute;
    content: 'Track Unavailable';
    color: ${theme.colors.light};
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(3px);
    border-radius: ${theme.radius};
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;

const PlayingTrack = css`
  ${RecordStyle};

  transform: scale(1.1);
  background: ${theme.colors.primary};
  position: relative;

  ${props => props.isAvailable ? trackAvailable : trackUnavailable};

  :hover::before {
    opacity: 1;
  }

  :hover::after {
    opacity: 1;
  }
`;

const ImgStyle = css`
  border-radius: 50%;
  height: 50%;
  width: 50%;
  margin: 1rem;
  background: url(${props => props.img}) no-repeat center center/cover;
`;

const NameStyle = css`
  color: ${theme.colors.light};
  font-size: ${theme.record.size * 0.08}px;
  text-align: center;
  max-width: 90%;
`;

export const recordTheme = {
  rootStyle: RecordStyle,
  imgStyle: ImgStyle,
  nameStyle: NameStyle,
};

export const selectedArtistTheme = {
  ...recordTheme,
  rootStyle: SelectedArtist,
};

export const playingTrackTheme = {
  ...recordTheme,
  rootStyle: PlayingTrack,
};