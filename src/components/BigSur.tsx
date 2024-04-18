import PhotoAlbum from 'react-photo-album';
import '../App.css'
import { bigSur } from '../portfolio/images';

function BigSur() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={bigSur} />
    </div>
  );
}

export default BigSur;