import PhotoAlbum from "react-photo-album";
import '../App.css'

import HG1 from '../portfolio/HakoneGardens/DSC05110.jpg'
import HG2 from '../portfolio/HakoneGardens/DSC05124.jpg'
import HG3 from '../portfolio/HakoneGardens/DSC05132.jpg'
import HG4 from '../portfolio/HakoneGardens/DSC05145.jpg'
import HG5 from '../portfolio/HakoneGardens/DSC05183.jpg'
import HG6 from '../portfolio/HakoneGardens/DSC05193.jpg'
import HG7 from '../portfolio/HakoneGardens/DSC05282.jpg'

const photos = [
  {
    src: HG1,
    width: 2048,
    height: 1365
  },
  {
    src: HG2,
    width: 2048,
    height: 1365
  },
  {
    src: HG3,
    width: 1365,
    height: 2048
  },
  {
    src: HG4,
    width: 1365,
    height: 2048
  },
  {
    src: HG5,
    width: 2048,
    height: 1365
  },
  {
    src: HG6,
    width: 2048,
    height: 1365
  },
  {
    src: HG7,
    width: 1365,
    height: 2048
  }
];

function HakoneGardens() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  );
}

export default HakoneGardens;