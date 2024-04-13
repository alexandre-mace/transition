"use client";

import Zoom from "react-medium-image-zoom";
import Image from "next/image";

const DebunkImage = ({ src, alt }: { src: string; alt: string }) => (
  <Zoom>
    <Image
      src={src}
      alt={alt}
      height={1500}
      width={1500}
      className={"mx-auto h-36 object-contain sm:h-80"}
    />
  </Zoom>
);

export default DebunkImage;
