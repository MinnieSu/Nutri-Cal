import { Box, Button, Flex, Grid, GridItem, Input, Select, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiBookmarks } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import useUserStore from "../../store/userStore";

const InfoBar = ({ onInfoChange }) => {
  const userStore = useUserStore((state) => state.user);
  const location = useLocation();

  const [inputs, setInputs] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    PAL: "",
    HB: "",
    Mifflin: "",
    IOM: "",
    simpleCal: "",
    BMI: "",
    healthyWeight: [],
    IBW: "",
    ABW: "",
    weightGoal: "maintain",
    energyReqt: "",
    proteinPerKG: "",
    proteinReqt: "",
    fluidPerKG: "",
    fluidReqt: "",
  });

  // PROBLEM!!! console.log(userStore) returns null, while console.log( inputs) returns values

  // collect user info and store them in inputs.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Automatically pass inputs to parent component(Homepage) when they change
  useEffect(() => {
    onInfoChange(inputs);
  }, [inputs, onInfoChange]);

  return (
    <>
      {/* Inputs */}
      <Box bg={"gray.200"} borderRadius={8} padding={10} flexDir={"column"}>
        <Text fontSize={"xl"} fontWeight={"bold"} mb={8}>
          Enter Information Here:
        </Text>
        <Grid
          templateRows={"repeat(6,1fr)"}
          templateColumns={"repeat(3, 1fr)"}
          gridGap={6}
          alignItems={"center"}
        >
          {/* Gender */}
          <GridItem>
            <label for="gender">Gender</label>
          </GridItem>
          <GridItem colSpan={2} pr={3}>
            <Select
              placeholder={location.pathname === "/" ? "Please Select" : userStore.gender}
              size={"sm"}
              variant={"outlined"}
              name={"gender"}
              value={inputs.gender}
              onChange={handleSelectChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </GridItem>
          {/* Age */}
          <GridItem>Age</GridItem>
          <GridItem colSpan={2}>
            <Flex justifyContent={"flex-start"} alignItems={"center"} gap={3.5}>
              <Input
                placeholder={location.pathname === "/" ? "" : userStore.age}
                type={"number"}
                size={"sm"}
                name={"age"}
                variant={"outlined"}
                w={"40%"}
                minW={"30px"}
                value={inputs.age}
                onChange={handleInputChange}
              />
              <Text>Years</Text>
            </Flex>
          </GridItem>
          {/* Weight */}
          <GridItem>Weight</GridItem>
          <GridItem colSpan={2}>
            <Flex justifyContent={"flex-start"} alignItems={"center"} gap={1}>
              <Input
                placeholder={location.pathname === "/" ? " " : userStore.weight}
                type="number"
                size={"sm"}
                name={"weight"}
                variant={"outlined"}
                w={"40%"}
                value={inputs.weight}
                onChange={handleInputChange}
              />
              <Select size={"sm"} variant={"outlined"} w={"40%"}>
                <option value={"kg"} defaultValue={"kg"}>
                  kg
                </option>
                <option value={"pounds"}>pounds</option>
              </Select>
            </Flex>
          </GridItem>
          {/* Height */}
          <GridItem>Height</GridItem>
          <GridItem colSpan={2}>
            <Flex justifyContent={"flex-start"} alignItems={"center"} gap={3.5}>
              <Input
                placeholder={location.pathname === "/" ? " " : userStore.height}
                type={"number"}
                size={"sm"}
                name={"height"}
                variant={"outlined"}
                w={"40%"}
                value={inputs.height}
                onChange={handleInputChange}
              />
              <Text>m</Text>
            </Flex>
          </GridItem>
          {/* Physical Activity Level */}
          <GridItem colSpan={3}>
            <Flex justifyContent={"flex-start"} alignItems={"center"} gap={1}>
              <Text>Physical Activity Level</Text>
              <Box _hover={{ bg: "whiteAlpha.900" }}>
                <BiBookmarks size={"20px"} color={"gray"} cursor={"pointer"} />
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={3} pr={3}>
            <Select
              placeholder={location.pathname === "/" ? "Please Select" : userStore.PAL}
              size={"sm"}
              variant={"outlined"}
              name={"PAL"}
              value={inputs.PAL}
              onChange={handleSelectChange}
            >
              <option value="1.2">Little or no exercise: 1.2</option>
              <option value="1.3">Exercise 1-2 days/week: 1.3</option>
              <option value="1.4">Exercise 3 days/week: 1.4</option>
              <option value="1.5">Exercise 4-5 days/week:1.5</option>
              <option value="1.6">Intense exercise 6 days/week: 1.6</option>
              <option value="1.7">Daily intense exercising: 1.7</option>
              <option value="1.8">Daily professional training sessions: 1.8</option>
            </Select>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default InfoBar;

// improvements:
// 1. makes the page responsive on small device
// 2. conditional rendering the units for height: when choose kg shows 1 input, when choose ft&in shows 2 inputs
