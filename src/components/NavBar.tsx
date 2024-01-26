import { Box, Container, HStack, Text } from "@chakra-ui/layout";
import ProfileLinkImage from "./ProfileLinkImage";
import MessageIconsContainer from "./MessageIconsContainer";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Box display="grid" gap={2} padding="10px" paddingX="30px">
      <HStack>
        <ProfileLinkImage />
        <Container maxW="max-content" borderRadius={3} bg="blue.200">
          <Text textAlign="center">Test Youself</Text>
        </Container>
        <MessageIconsContainer />
      </HStack>
      <SearchInput></SearchInput>
    </Box>
  );
};

export default NavBar;
