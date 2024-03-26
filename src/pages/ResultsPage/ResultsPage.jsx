import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnergyRequirement from "../../components/EnergyRequirement/EnergyRequirement";
import FluidRequirement from "../../components/FluidRequirement/FluidRequirement";
import InfoBar from "../../components/InfoBar/InfoBar";
import ProteinRequirement from "../../components/ProteinRequirement/ProteinRequirement";
import useUserStore from "../../store/userStore";

const ResultsPage = () => {
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();
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

  const handleClear = () => {
    localStorage.removeItem("user-info");
    clearUser();
    navigate("/");
  };

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alighItems={"center"} px={"6%"} py={"2%"}>
      <Container maxW={"container.xxl"} padding={0}>
        <Flex flexDirection={"row"} justifyContent={"space-evenly"} gap={50} h={"full"}>
          {/* left-hand side: info bar */}
          <Flex w={"25%"}>
            <VStack spacing={5} align={"stretch"} w={"full"} h={"full"}>
              <InfoBar onInfoChange={handleInfoChange} />
              {/* Update Button + Clear Button */}

              <Box alignItems={"center"} pt={1.5}>
                <Button h={"3rem"} colorScheme={"blue"} w={"full"}>
                  Update
                </Button>
              </Box>
              <Box alignItems={"center"} pt={1.5}>
                <Button h={"3rem"} colorScheme={"red"} w={"full"} onClick={handleClear}>
                  Clear
                </Button>
              </Box>
            </VStack>
          </Flex>
          {/* middle part: energy calculation + energy requirement */}
          <Flex w={"30%"}>
            <EnergyRequirement />
          </Flex>
          {/* right-hand side: protein calculation + fluid calculation */}
          <Flex w={"35%"} flexDirection={"column"}>
            <ProteinRequirement />
            <FluidRequirement />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ResultsPage;
