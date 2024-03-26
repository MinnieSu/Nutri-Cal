import { Box, Flex, Input, Select, Text, VStack } from "@chakra-ui/react";
import React from "react";

const FluidRequirement = () => {
  return (
    <VStack spacing={5} align={"stretch"} w={"full"}>
      <Box bg={"gray.200"} borderRadius={8} padding={10} h={"25rem"}>
        <Text fontSize={"xl"} fontWeight={"bold"} mb={8}>
          Fluid Calculation
        </Text>
        <Flex pb={5}>
          <Select placeholder="Select your condition" size={"sm"} variant={"outlined"}>
            <option value="35">18-55 years old: 35 ml/kg</option>
            <option value="30">56-75 years old: 30 ml/kg</option>
            <option value="25">more than 75 years old: 25 ml/kg</option>
            <option value="25">
              Fluid restriction: less than 25 ml/kg (renal, cardiac, fluid overload)
            </option>
          </Select>
        </Flex>
        <Flex pb={5} gap={2} alignItems={"center"}>
          <Text>Enter Fluid Needs: </Text>
          <Input
            type="number"
            size={"sm"}
            w={"20%"}
            isInvalid
            errorBorderColor={"blue.300"}
            focusBorderColor={"pink.400"}
          />
          <Text>ml/kg body weight</Text>
        </Flex>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Fluid Requirement:
          </Text>
          <Flex alignItems={"center"} gap={2} w={"full"}>
            <Flex
              borderRadius={4}
              bg={"gray.50"}
              w={"5rem"}
              h={"1.8rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontSize={"xl"} color={"blue.600"} fontWeight={"bold"}>
                value
              </Text>
            </Flex>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              ml/day
            </Text>
          </Flex>
        </VStack>
      </Box>
    </VStack>
  );
};

export default FluidRequirement;
