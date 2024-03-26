import { Box, Flex, Input, Select, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import useUserStore from "../../store/userStore";
const EnergyRequirement = () => {
  const userStore = useUserStore((state) => state.user);

  return (
    <>
      <VStack spacing={5} align={"stretch"} w={"full"}>
        {/* Energy Calculation */}
        <Box bg={"gray.200"} borderRadius={8} padding={10} h={"20rem"}>
          <Text fontSize={"xl"} fontWeight={"bold"} mb={8}>
            Energy Calculation
          </Text>
          {/* Harris-Benedict */}
          <Flex alignItems={"center"} gap={2} w={"full"} pb={3}>
            <Box cursor={"pointer"} _hover={{ color: "blue.500" }}>
              <BsFillQuestionCircleFill />
            </Box>
            <Text fontSize={"md"}>Harris-Benedict: </Text>
            <Flex
              borderRadius={4}
              bg={"gray.50"}
              w={"5rem"}
              h={"1.8rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text>{userStore.HB}</Text>
            </Flex>
            <Text>kcal</Text>
          </Flex>
          {/* Mifflin */}
          <Flex alignItems={"center"} gap={2} w={"full"} pb={3}>
            <Box cursor={"pointer"} _hover={{ color: "blue.500" }}>
              <BsFillQuestionCircleFill />
            </Box>
            <Text fontSize={"md"}>Mifflin: </Text>
            <Flex
              borderRadius={4}
              bg={"gray.50"}
              w={"5rem"}
              h={"1.8rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text>{userStore.Mifflin}</Text>
            </Flex>
            <Text>kcal</Text>
          </Flex>
          {/* IOM */}
          <Flex alignItems={"center"} gap={2} w={"full"} pb={3}>
            <Box cursor={"pointer"} _hover={{ color: "blue.500" }}>
              <BsFillQuestionCircleFill />
            </Box>
            <Text fontSize={"md"}>IOM: </Text>
            <Flex
              borderRadius={4}
              bg={"gray.50"}
              w={"5rem"}
              h={"1.8rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text>{userStore.IOM}</Text>
            </Flex>
            <Text>kcal</Text>
          </Flex>
          {/* Simple calculation */}
          <Flex alignItems={"center"} gap={2} w={"full"} pb={3}>
            <Box cursor={"pointer"} _hover={{ color: "blue.500" }}>
              <BsFillQuestionCircleFill />
            </Box>
            <Text fontSize={"md"}>Simple Calculation: </Text>
            <Flex
              borderRadius={4}
              bg={"gray.50"}
              w={"5rem"}
              h={"1.8rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text>{userStore.simpleCal}</Text>
            </Flex>
            <Text>kcal</Text>
          </Flex>
        </Box>

        {/* Energy Requirement */}
        <Box bg={"gray.200"} borderRadius={8} padding={10} h={"25rem"}>
          <VStack w={"full"} gap={4}>
            {/* BMI */}
            <Flex w={"full"} justifyContent={"space-between"}>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"md"}>BMI: </Text>
                <Flex
                  borderRadius={4}
                  bg={"gray.50"}
                  w={"5rem"}
                  h={"1.8rem"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text>{userStore.BMI}</Text>
                </Flex>
                <Text>kg/m2</Text>
              </Flex>
              <Box cursor={"pointer"} _hover={{ color: "blue.500" }}>
                <AiFillSetting />
              </Box>
            </Flex>

            {/* Healthy weight range */}
            <Flex alignItems={"center"} gap={2} w={"full"}>
              <Text fontSize={"md"}>Healthy Weight: </Text>
              <Flex
                borderRadius={4}
                bg={"gray.50"}
                w={"4rem"}
                h={"1.8rem"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>{userStore.healthyWeight[0]}</Text>
              </Flex>
              <Text>-</Text>
              <Flex
                borderRadius={4}
                bg={"gray.50"}
                w={"4rem"}
                h={"1.8rem"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>{userStore.healthyWeight[1]}</Text>
              </Flex>
              <Text>kg</Text>
            </Flex>
            {/* Ideal body weight */}
            <Flex alignItems={"center"} gap={2} w={"full"}>
              <Text fontSize={"md"}>Ideal Weight: </Text>
              <Input
                placeholder={userStore.IBW}
                type={"number"}
                size={"sm"}
                name={"age"}
                variant={"outlined"}
                minW={"30px"}
                bg={"gray.50"}
                w={"5rem"}
                h={"1.8rem"}
                justifyContent={"center"}
                alignItems={"center"}
              />

              <Text>kg</Text>
            </Flex>
            {/* Adjusted body weight */}
            {userStore.BMI > 27 && (
              <Flex alignItems={"center"} gap={2} w={"full"}>
                <Text fontSize={"md"}>Adjusted Weight: </Text>
                <Flex
                  borderRadius={4}
                  bg={"gray.50"}
                  w={"5rem"}
                  h={"1.8rem"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text>{userStore.ABW}</Text>
                </Flex>
                <Text>kg</Text>
              </Flex>
            )}
            {/* Weight goal */}
            <Flex alignItems={"center"} gap={2} w={"full"}>
              <Text fontSize={"md"}>Weight Goal: </Text>
              <Select size={"sm"} variant={"outlined"} w={"40%"}>
                <option value="maintain" selected="selected">
                  maintain
                </option>
                <option value="lose">lose</option>
                <option value="gain">gain</option>
              </Select>
            </Flex>
            {/* Energy Requirement */}
            <VStack w={"full"} alignItems={"flex-start"}>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                Energy Requirement:
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
                    {userStore.energyReqt}
                  </Text>
                </Flex>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  kcal
                </Text>
              </Flex>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default EnergyRequirement;
