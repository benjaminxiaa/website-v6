import PhotoAlbum from "react-photo-album";
import '../App.css'
import { deathValley } from '../portfolio/images';

function DeathValley() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={deathValley} />
    </div>
  );
}

export default DeathValley;