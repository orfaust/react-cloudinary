import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

export default function VideoPlayer(props) {
  return (
    <CloudinaryContext
      cloudName="deex4ock4"
      secure="true"
      upload_preset="my_unsigned_preset"
    >
      <Image publicId={props.path} secure="true">
        <Transformation width="150" height="150" gravity="face" crop="thumb" />
      </Image>
    </CloudinaryContext>
  );
}
