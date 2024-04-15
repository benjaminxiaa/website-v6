import PhotoAlbum from "react-photo-album";
import '../App.css'

import BS1 from '../portfolio/BigSur/DSC04509.jpg'
import BS2 from '../portfolio/BigSur/DSC04582.jpg'
import BS3 from '../portfolio/BigSur/DSC04608.jpg'
import BS4 from '../portfolio/BigSur/DSC04663.jpg'
import BS5 from '../portfolio/BigSur/DSC04679.jpg'
import BS6 from '../portfolio/BigSur/DSC04875.jpg'
import BS7 from '../portfolio/BigSur/DSC04893.jpg'
import BS8 from '../portfolio/BigSur/DSC04930.jpg'

const photos = [
  {
    src: BS1,
    width: 2048,
    height: 1365
  },
  {
    src: BS2,
    width: 2048,
    height: 1365
  },
  {
    src: BS3,
    width: 2048,
    height: 1365
  },
  {
    src: BS4,
    width: 2048,
    height: 1365
  },
  {
    src: BS5,
    width: 2048,
    height: 1365
  },
  {
    src: BS6,
    width: 2048,
    height: 1365
  },
  {
    src: BS7,
    width: 2048,
    height: 1365
  },
  {
    src: BS8,
    width: 2048,
    height: 1365
  }
];

function BigSur() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  );
}

export default BigSur;