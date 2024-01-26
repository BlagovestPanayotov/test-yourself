import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

const MessageIconsContainer = () => {
  const [inbox, setInbox] = useState(true);

  const onClickHandler = () => {
    setInbox(!inbox);
  };
  return (
    <Box onClick={() => onClickHandler()}>
      {inbox ? (
        <FaEnvelope size="20px" color="red" />
      ) : (
        <FaEnvelopeOpen size="20px" color="lightblue" />
      )}
    </Box>
  );
};

export default MessageIconsContainer;
