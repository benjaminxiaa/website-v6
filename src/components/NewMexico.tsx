import PhotoAlbum from "react-photo-album";
import '../App.css'

// import NM1 from '../portfolio/NewMexico/DSC05124.jpg';
// import NM2 from '../portfolio/NewMexico/DSC05174.jpg';
// import NM3 from '../portfolio/NewMexico/DSC05193.jpg';
import NM4 from '../portfolio/NewMexico/DSC05860.jpg';
import NM5 from '../portfolio/NewMexico/DSC05976.jpg';
import NM6 from '../portfolio/NewMexico/DSC07495.jpg';
import NM7 from '../portfolio/NewMexico/DSC07527.jpg';
import NM8 from '../portfolio/NewMexico/DSC07624.jpg';
import NM9 from '../portfolio/NewMexico/DSC07697.jpg';
import NM10 from '../portfolio/NewMexico/DSC07788.jpg';
import NM11 from '../portfolio/NewMexico/DSC07982.jpg';
// import NM12 from '../portfolio/NewMexico/DSC08612.jpg';


const photos = [
  // {
  //   src: NM1,
  //   width: 6000,
  //   height: 4000
  // },
  // {
  //   src: NM2,
  //   width: 6000,
  //   height: 4000
  // },
  // {
  //   src: NM3,
  //   width: 6000,
  //   height: 4000
  // },
  {
    src: NM4,
    width: 6000,
    height: 3376
  },
  {
    src: NM5,
    width: 6000,
    height: 3376
  },
  {
    src: NM6,
    width: 3376,
    height: 6000
  },
  {
    src: NM7,
    width: 6000,
    height: 3376
  },
  {
    src: NM8,
    width: 3376,
    height: 6000
  },
  {
    src: NM9,
    width: 2055,
    height: 2845
  },
  {
    src: NM10,
    width: 6000,
    height: 3376
  },
  {
    src: NM11,
    width: 6000,
    height: 3376
  }//,
  // {
  //   src: NM12,
  //   width: 6000,
  //   height: 4000
  // }
];

function HakoneGardens() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  );
}

export default HakoneGardens;