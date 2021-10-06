import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { fill } from "@cloudinary/url-gen/actions/resize";

export default function () {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "deex4ock4"
    }
  });

  const myImage = cld.image("corpocoscienza");
  myImage.resize(fill().width(250));

  return <AdvancedImage cldImg={myImage} />;
}
