import PhotoAlbum from "react-photo-album";
import '../App.css'

import DV1 from '../portfolio/DeathValley/b_4132686_autumn_maple.jpg';
import DV2 from '../portfolio/DeathValley/b_4132709_backyard_moon.jpg';
import DV3 from '../portfolio/DeathValley/b_4132717_backyard_moon_greenthing.jpg';
import DV4 from '../portfolio/DeathValley/b_4132739_deathvalley_mineraldeposits.jpg';
import DV5 from '../portfolio/DeathValley/b_4132752_deathvalley_mooon.jpg';
import DV6 from '../portfolio/DeathValley/b_4132763_goldenwaves.jpg';
import DV7 from '../portfolio/DeathValley/b_4132770_hidingmoon.jpg';
import DV8 from '../portfolio/DeathValley/b_4132779_lavendarbush.jpg';
import DV9 from '../portfolio/DeathValley/b_4132786_locallygrowndandelions.jpg';
import DV10 from '../portfolio/DeathValley/b_4132793_redsunset.jpg';
import DV11 from '../portfolio/DeathValley/b_4132804_sequoia_bigtree.jpg';
import DV12 from '../portfolio/DeathValley/b_4132809_sequoia_pond.jpg';
import DV13 from '../portfolio/DeathValley/b_4132815_sequoia_rock.jpg';
import DV14 from '../portfolio/DeathValley/DSC04010.jpg';

const photos = [
  {
    src: DV1,
    width: 751,
    height: 500
  },
  {
    src: DV2,
    width: 751,
    height: 500
  },
  {
    src: DV3,
    width: 751,
    height: 500
  },
  {
    src: DV4,
    width: 753,
    height: 500
  },
  {
    src: DV5,
    width: 753,
    height: 500
  },
  {
    src: DV6,
    width: 753,
    height: 500
  },
  {
    src: DV7,
    width: 333,
    height: 500
  },
  {
    src: DV8,
    width: 751,
    height: 500
  },
  {
    src: DV9,
    width: 751,
    height: 500
  },
  {
    src: DV10,
    width: 751,
    height: 500
  },
  {
    src: DV11,
    width: 332,
    height: 500
  },
  {
    src: DV12,
    width: 753,
    height: 500
  },
  {
    src: DV13,
    width: 753,
    height: 500
  },
  {
    src: DV14,
    width: 2000,
    height: 3008,
  }
];

function DeathValley() {
  return (
    <div className="gallery">
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  );
}

export default DeathValley;