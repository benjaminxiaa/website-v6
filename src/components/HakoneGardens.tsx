import PhotoAlbum from "react-photo-album";
import '../App.css'

import HG1 from '../portfolio/HakoneGardens/DSC05110.jpg'
import HG2 from '../portfolio/HakoneGardens/DSC05117.jpg'
import HG3 from '../portfolio/HakoneGardens/DSC05119.jpg'
import HG4 from '../portfolio/HakoneGardens/DSC05124.jpg'
import HG5 from '../portfolio/HakoneGardens/DSC05132.jpg'
import HG6 from '../portfolio/HakoneGardens/DSC05143.jpg'
import HG7 from '../portfolio/HakoneGardens/DSC05145.jpg'
import HG8 from '../portfolio/HakoneGardens/DSC05149.jpg'
import HG9 from '../portfolio/HakoneGardens/DSC05155.jpg'
import HG10 from '../portfolio/HakoneGardens/DSC05157.jpg'
import HG11 from '../portfolio/HakoneGardens/DSC05174.jpg'
import HG12 from '../portfolio/HakoneGardens/DSC05183.jpg'
import HG13 from '../portfolio/HakoneGardens/DSC05190.jpg'
import HG14 from '../portfolio/HakoneGardens/DSC05192.jpg'
import HG15 from '../portfolio/HakoneGardens/DSC05193.jpg'
import HG16 from '../portfolio/HakoneGardens/DSC05210.jpg'
import HG17 from '../portfolio/HakoneGardens/DSC05241.jpg'
import HG18 from '../portfolio/HakoneGardens/DSC05252.jpg'
import HG19 from '../portfolio/HakoneGardens/DSC05282.jpg'

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
    width: 2048,
    height: 1365
  },
  {
    src: HG4,
    width: 2048,
    height: 1365
  },
  {
    src: HG5,
    width: 1365,
    height: 2048
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
  },
  {
    src: HG8,
    width: 2048,
    height: 1365
  },
  {
    src: HG9,
    width: 2048,
    height: 1365
  },
  {
    src: HG10,
    width: 2048,
    height: 1365
  },
  {
    src: HG11,
    width: 2048,
    height: 1365
  },
  {
    src: HG12,
    width: 2048,
    height: 1365
  },
  {
    src: HG13,
    width: 2048,
    height: 1365
  },
  {
    src: HG14,
    width: 2048,
    height: 1365
  },
  {
    src: HG15,
    width: 2048,
    height: 1365
  },
  {
    src: HG16,
    width: 2048,
    height: 1365
  },
  {
    src: HG17,
    width: 1365,
    height: 2048
  },
  {
    src: HG18,
    width: 1365,
    height: 2048
  },
  {
    src: HG19,
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