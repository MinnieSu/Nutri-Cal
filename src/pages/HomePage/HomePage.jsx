import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ImageSection from "../../components/ImageSection/ImageSection";
import InfoBar from "../../components/InfoBar/InfoBar";
import Title from "../../components/Title/Title";

const HomePage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alighItems={"center"} px={"6%"} py={"4%"}>
      <Container maxW={"container.xxl"} padding={0}>
        <Flex flexDirection={"row"} justifyContent={"space-evenly"} gap={50} h={"full"}>
          {/* Left-hand side: Info bar */}
          <Flex w={{ base: "55%", lg: "33%" }}>
            <InfoBar />
          </Flex>

          {/* Center: caption + feature boxes */}
          <Flex w={{ base: "45%", lg: "30%" }}>
            <Title />
          </Flex>

          {/* Right-hand side: images + 3 icons */}
          <Flex w={{ base: "0",lg: "35%" }}>
            <ImageSection />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HomePage;
