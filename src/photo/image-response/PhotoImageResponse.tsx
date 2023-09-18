import { Photo } from '..';
import { NextImageWidth } from '@/utility/image';
import { formatModelShort } from '@/utility/exif';
import { AiFillApple } from 'react-icons/ai';
import ImageCaption from './components/ImageCaption';
import ImagePhotoGrid from './components/ImagePhotoGrid';

export default function PhotoImageResponse({
  photo,
  request,
  width,
  height,
  fontFamily,
}: {
  photo: Photo
  request: Request
  width: NextImageWidth
  height: number
  fontFamily: string
}) {
  return (
    <div style={{
      display: 'flex',
      position: 'relative',
      background: 'red',
      width,
      height,
    }}>
      <ImagePhotoGrid {...{
        photos: [photo],
        request,
        width,
        height,
      }} />
      <ImageCaption {...{ width, height, fontFamily }}>
        {photo.make === 'Apple' &&
          <div style={{ display: 'flex' }}>
            <AiFillApple />
          </div>}
        <div style={{ display: 'flex' }}>
          {formatModelShort(photo.model)}
        </div>
        <div style={{ display: 'flex' }}>
          {photo.focalLengthFormatted}
        </div>
        <div style={{ display: 'flex' }}>
          {photo.fNumberFormatted}
        </div>
        <div>
          {photo.isoFormatted}
        </div>
      </ImageCaption>
    </div>
  );
};