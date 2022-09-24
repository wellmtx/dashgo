import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Wellington Saraiva</Text>
        <Text color="gray.300" fontSize="small">
          wellingtonsaraivasousa@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Wellington Saraiva"
        src="https://github.com/wellmtx.png"
      />
    </Flex>
  );
}
