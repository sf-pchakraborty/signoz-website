/* eslint-disable @next/next/no-img-element */
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";

const ZoomImage = ({ image, alt }: ZoomImageProps): JSX.Element => (
  <div className="w-full my-2">
    <Zoom zoomMargin={100}>
      <img src={image} alt={alt} />
      <div className="text-center">{alt}</div>
    </Zoom>
  </div>
);

interface ZoomImageProps {
  image: string;
  alt: string;
}

export default ZoomImage;
