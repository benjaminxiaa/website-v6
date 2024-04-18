import PhotoAlbum from "react-photo-album";
import '../App.css'
import { newMexico } from "../portfolio/images";

function HakoneGardens() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={newMexico} />
    </div>
  );
}

export default HakoneGardens;