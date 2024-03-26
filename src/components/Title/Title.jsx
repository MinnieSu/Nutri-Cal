import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Title = () => {
  return (
    <Flex flexDir={"column"}>
      {/* Big Title */}
      <Flex pb={10} pl={4}>
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
          color={"blue.800"}
        >
          All in one Nutrient Requirement Calculator
        </Text>
      </Flex>
      <Flex flexDir={"column"} gap={10}>
        <Flex
          borderRadius={"10px"}
          fontWeight={"bold"}
          fontSize={{ base: "sm", md: "md", lg: "l" }}
          bg={"blue.400"}
          color={"white"}
          w={"full"}
          py={3}
          pl={6}
        >
          Energy Requirement
        </Flex>
        <Flex
          borderRadius={"10px"}
          fontWeight={"bold"}
          fontSize={"l"}
          bg={"blue.400"}
          color={"white"}
          w={"full"}
          py={3}
          pl={6}
        >
          Protein Requirement
        </Flex>
        <Flex
          borderRadius={"10px"}
          fontWeight={"bold"}
          fontSize={"l"}
          bg={"blue.400"}
          color={"white"}
          w={"full"}
          py={3}
          pl={6}
        >
          Fluid Requirement
        </Flex>
      </Flex>

      {/* Main Features */}
    </Flex>
  );
};

export default Title;
