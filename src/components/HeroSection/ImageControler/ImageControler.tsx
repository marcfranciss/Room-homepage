import "./imageControler.sass";

import turnLeft from "../../../assets/images/icon-angle-left.svg";
import turnRight from "../../../assets/images/icon-angle-right.svg";

interface heroImages {
  alt: string;
  dekstop: string;
  mobile: string;
}

function prevItem(prevIndex: number, arr: heroImages[]) {
  const resultIndex: number = (prevIndex - 1 + arr.length) % arr.length;
  return resultIndex;
}
function nextItem(prevIndex: number, arr: heroImages[]) {
  const resultIndex: number = (prevIndex + 1) % arr.length;
  return resultIndex;
}

interface ImageControlerProps {
  setCurrImgIndex: (value: number) => void;
  currImgIndex: number;
  arr: heroImages[];
}

export const ImageControler = ({
  setCurrImgIndex,
  currImgIndex,
  arr,
}: ImageControlerProps) => {
  return (
    <div className={"hero-img__controller"}>
      <button
        className='btn-controller'
        onClick={() => setCurrImgIndex(prevItem(currImgIndex, arr))}
        aria-controls='hero-img'
        aria-label='Previous image'>
        <img src={turnLeft} alt='' />
      </button>
      <button
        className='btn-controller'
        onClick={() => setCurrImgIndex(nextItem(currImgIndex, arr))}
        aria-controls='hero-img'
        aria-label='Next image'>
        <img src={turnRight} alt='' />
      </button>
    </div>
  );
};
