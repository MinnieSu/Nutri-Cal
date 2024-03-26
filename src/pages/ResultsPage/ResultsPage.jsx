import { Container, Flex } from "@chakra-ui/react";
import EnergyRequirement from "../../components/EnergyRequirement/EnergyRequirement";
import FluidRequirement from "../../components/FluidRequirement/FluidRequirement";
import InfoBar from "../../components/InfoBar/InfoBar";
import ProteinRequirement from "../../components/ProteinRequirement/ProteinRequirement";

const ResultsPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alighItems={"center"} px={"6%"} py={"2%"}>
      <Container maxW={"container.xxl"} padding={0}>
        <Flex flexDirection={"row"} justifyContent={"space-evenly"} gap={50} h={"full"}>
          {/* left-hand side: info bar */}
          <Flex w={"25%"}>
            <InfoBar />
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
