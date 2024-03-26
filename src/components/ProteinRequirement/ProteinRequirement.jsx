import { Box, Flex, Input, Select, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProteinRequirement = () => {
  return (
    <VStack spacing={5} align={"stretch"} w={"full"} pb={5}>
      <Box bg={"gray.200"} borderRadius={8} padding={10} h={"20rem"}>
        <Text fontSize={"xl"} fontWeight={"bold"} mb={8}>
          Protein Calculation
        </Text>
        <Flex pb={5}>
          <Select placeholder="Select your condition" size={"sm"} variant={"outlined"}>
            <option value="0.8-1.0">Basic Requirement: 0.8-1.0</option>
            <option value="1.0-1.5">Elderly, no stress: 1.0 (some use 1.2-1.5)</option>
            <option value="1.0-1.25">Stroke: 1.0-1.25</option>
            <option value="2.0-2.5">Wounds, fistulas: 2.0-2.5</option>
            <option value="2.0-2.5">Burns (by %BSA): 1.7-2.4 (up to 2.5)</option>
          </Select>
        </Flex>
        <Flex pb={5} gap={2} alignItems={"center"}>
          <Text>Enter Protein Needs: </Text>
          <Input
            type="number"
            size={"sm"}
            w={"20%"}
            isInvalid
            errorBorderColor={"blue.300"}
            focusBorderColor={"pink.400"}
          />
          <Text>g/kg body weight</Text>
        </Flex>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Protein Requirement:
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
              g/day
            </Text>
          </Flex>
        </VStack>
      </Box>
    </VStack>
  );
};

export default ProteinRequirement;
