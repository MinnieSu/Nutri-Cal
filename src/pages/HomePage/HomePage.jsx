import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSection from "../../components/ImageSection/ImageSection";
import InfoBar from "../../components/InfoBar/InfoBar";
import Title from "../../components/Title/Title";
import useCalculateEnergy from "../../hooks/useCalculateEnergy";
import useShowToast from "../../hooks/useShowToast";
import useUserStore from "../../store/userStore";

const HomePage = () => {
  const navigate = useNavigate();
  const showToast = useShowToast();
  const setUser = useUserStore((state) => state.setUser);
  const { isLoading, calculateEnergy } = useCalculateEnergy();
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

  const handleInfoChange = (infoData) => {
    setInputs(infoData);
  };

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

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alighItems={"center"} px={"6%"} py={"4%"}>
      <Container maxW={"container.xxl"} padding={0}>
        <Flex flexDirection={"row"} justifyContent={"space-evenly"} gap={50} h={"full"}>
          {/* Left-hand side: Info bar */}
          <Flex w={{ base: "55%", lg: "33%" }}>
            <VStack spacing={5} align={"stretch"} w={"full"} h={"full"}>
              <InfoBar onInfoChange={handleInfoChange} />

              {/* Calculate Button */}
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
            </VStack>
          </Flex>

          {/* Center: caption + feature boxes */}
          <Flex w={{ base: "45%", lg: "30%" }}>
            <Title />
          </Flex>

          {/* Right-hand side: images + 3 icons */}
          <Flex w={{ base: "0", lg: "35%" }}>
            <ImageSection />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HomePage;
