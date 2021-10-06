import { CloudinaryVideo } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

import { scale } from "@cloudinary/url-gen/actions/resize";

export default function (props) {
  const vid = new CloudinaryVideo(props.path, { cloudName: "demo" });

  vid.resize(scale().width(400));

  return (
    <div>
      <h3>{props.path}</h3>
      <AdvancedVideo cldVid={vid} controls />
    </div>
  );
}
