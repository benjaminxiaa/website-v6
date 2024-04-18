import PhotoAlbum from "react-photo-album";
import '../App.css'
import { hakoneGardens } from '../portfolio/images';

function HakoneGardens() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={hakoneGardens} />
    </div>
  );
}

export default HakoneGardens;