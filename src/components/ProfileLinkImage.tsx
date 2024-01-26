import { Image } from "@chakra-ui/react";
import profilePicture from "../assets/profilePicture.png";

const ProfileLinkImage = () => {
  return (
    <Image
      src={profilePicture}
      alt="profile picture"
      boxSize="30px"
      objectFit="cover"
      onClick={() => console.log("clicked")}
      borderRadius="5px"
      _hover={{ cursor: "pointer" }}
    />
  );
};

export default ProfileLinkImage;
