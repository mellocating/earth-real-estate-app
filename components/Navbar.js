import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Link,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ConnectButton, wallet } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue('#171923', 'gray.800')}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href="/">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              fontSize="2xl"
              fontWeight={"bold"}
              color={useColorModeValue("white", "gray.100")}
            >
              E(AR)TH
            </Text>
          </Link>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            <ConnectButton />
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
