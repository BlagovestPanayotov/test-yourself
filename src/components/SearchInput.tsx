import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const listValues = ["Question", "Users"];

const SearchInput = () => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input></Input>
        <Box paddingLeft={1}>
          <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              {listValues[0]}
            </MenuButton>
            <MenuList>
              {listValues.map((v) => (
                <MenuItem key={v}>{v}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
