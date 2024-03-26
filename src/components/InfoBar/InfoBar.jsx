import { Box, Button, Flex, Grid, GridItem, Input, Select, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BiBookmarks } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import useCalculateEnergy from "../../hooks/useCalculateEnergy";
import useShowToast from "../../hooks/useShowToast";
import useUserStore from "../../store/userStore";

const InfoBar = () => {
  const navigate = useNavigate();
  const { isLoading, calculateEnergy } = useCalculateEnergy();
  const userStore = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const location = useLocation();
  const showToast = useShowToast();

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

  const handleCalculate = () => {
    try {
      // update userStore when user clicks calculate button, no change during input changes.
      setUser(inputs);
      // update local storage when user clicks calculate button,
      // even if the user refreshes the page before clicking the update button, the previous values will be loaded from local storage
      localStorage.setItem("user-info", JSON.stringify(inputs));
      calculateEnergy(inputs);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      navigate("/results");
    }
  };

  const handleUpdate = () => {
    // update changes on inputs for user info, weight goal, IBW, protein needs and fluid needs.
    // if user's info is changed, update values and recalculate energy needs.
    if (
      inputs.gender != userStore.gender ||
      inputs.age != userStore.age ||
      inputs.weight != userStore.weight ||
      inputs.height != userStore.height ||
      inputs.PAL != userStore.PAL
    ) {
      setUser(inputs);
      localStorage.setItem("user-info", JSON.stringify(inputs));
      calculateEnergy(inputs);
    }
  };

  const handleClear = () => {
    localStorage.removeItem("user-info");
    clearUser();
    navigate("/");
  };
  return (
    <>
      <VStack spacing={5} align={"stretch"} w={"full"} h={"full"}>
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
                value={inputs.gender}
                onChange={(e) => {
                  const selectedGender = [...e.target.selectedOptions]
                    .map((option) => option.value)
                    .toString();
                  setInputs({ ...inputs, gender: selectedGender });
                }}
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
                  onChange={(e) => {
                    setInputs({ ...inputs, age: e.target.value });
                  }}
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
                  onChange={(e) => {
                    setInputs({ ...inputs, weight: e.target.value });
                  }}
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
                  onChange={(e) => {
                    setInputs({ ...inputs, height: e.target.value });
                  }}
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
                value={inputs.PAL}
                onChange={(e) => {
                  const selectedPAL = [...e.target.selectedOptions]
                    .map((option) => option.value)
                    .toString();
                  setInputs({ ...inputs, PAL: selectedPAL });
                }}
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

        {/* Calculate Button */}
        {location.pathname === "/" && (
          <Box alignItems={"center"} pt={1.5}>
            <Button
              h={"3rem"}
              colorScheme={"blue"}
              w={"full"}
              isLoading={isLoading}
              onClick={handleCalculate}
            >
              Calculate
            </Button>
          </Box>
        )}
        {/* Update Button + Clear Button */}
        {location.pathname === "/results" && (
          <>
            <Box alignItems={"center"} pt={1.5}>
              <Button h={"3rem"} colorScheme={"blue"} w={"full"} onClick={handleUpdate}>
                Update
              </Button>
            </Box>
            <Box alignItems={"center"} pt={1.5}>
              <Button h={"3rem"} colorScheme={"red"} w={"full"} onClick={handleClear}>
                Clear
              </Button>
            </Box>
          </>
        )}
      </VStack>
    </>
  );
};

export default InfoBar;

// improvements:
// 1. makes the page responsive on small device
// 2. conditional rendering the units for height: when choose kg shows 1 input, when choose ft&in shows 2 inputs
