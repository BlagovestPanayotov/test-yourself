import { Container, HStack, Text } from "@chakra-ui/layout";
import ProfileLinkImage from "./ProfileLinkImage";
import MessageIconsContainer from "./MessageIconsContainer";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px" paddingX="30px">
        <ProfileLinkImage />
        <Container maxW="max-content" borderRadius={3} bg="blue.200">
          <Text textAlign="center">Test Youself</Text>
        </Container>
        <MessageIconsContainer />
      </HStack>
    </>
  );
};

export default NavBar;
