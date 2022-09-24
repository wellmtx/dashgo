import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wellington Saraiva</Text>
          <Text color="gray.300" fontSize="small">
            wellingtonsaraivasousa@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Wellington Saraiva"
        src="https://github.com/wellmtx.png"
      />
    </Flex>
  );
}
