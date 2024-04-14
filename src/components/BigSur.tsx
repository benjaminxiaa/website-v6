import PhotoAlbum from "react-photo-album";
import '../App.css'

import BS1 from '../portfolio/BigSur/DSC04509.jpg'
import BS2 from '../portfolio/BigSur/DSC04551.jpg'
import BS3 from '../portfolio/BigSur/DSC04560.jpg'
import BS4 from '../portfolio/BigSur/DSC04582.jpg'
import BS5 from '../portfolio/BigSur/DSC04608.jpg'
import BS6 from '../portfolio/BigSur/DSC04646.jpg'
import BS7 from '../portfolio/BigSur/DSC04663.jpg'
import BS8 from '../portfolio/BigSur/DSC04668.jpg'
import BS9 from '../portfolio/BigSur/DSC04668.jpg'
import BS10 from '../portfolio/BigSur/DSC04728.jpg'
import BS11 from '../portfolio/BigSur/DSC04872.jpg'
import BS12 from '../portfolio/BigSur/DSC04875.jpg'
import BS13 from '../portfolio/BigSur/DSC04893.jpg'
import BS14 from '../portfolio/BigSur/DSC04925.jpg' 
import BS15 from '../portfolio/BigSur/DSC04930.jpg'
import BS16 from '../portfolio/BigSur/DSC04970.jpg'
import BS17 from '../portfolio/BigSur/DSC05021.jpg'

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
  },
  {
    src: BS9,
    width: 2048,
    height: 1365
  },
  {
    src: BS10,
    width: 2048,
    height: 1365
  },
  {
    src: BS11,
    width: 2048,
    height: 1365
  },
  {
    src: BS12,
    width: 2048,
    height: 1365
  },
  {
    src: BS13,
    width: 2048,
    height: 1365
  },
  {
    src: BS14,
    width: 2048,
    height: 1365
  },
  {
    src: BS15,
    width: 2048,
    height: 1365
  },
  {
    src: BS16,
    width: 2048,
    height: 1365
  },
  {
    src: BS17,
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