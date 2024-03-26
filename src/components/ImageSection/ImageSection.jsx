import { Flex, Image } from "@chakra-ui/react";

const ImageSection = () => {
  return (
    <Flex flexDir={"column"} display={{ base: "none", md: "flex" }}>
      {/* balanced plate */}
      <Flex pb={20}>
        <Image
          w={"100%"}
          src="../../../public/images/balanced_plate.jpeg"
          alt="Health Canada balanced plate"
        />
      </Flex>
      {/* food icons */}
      <Flex flexDir={"row"} justifyContent={"space-between"} h={"full"}>
        <Image boxSize={"100px"} src="../../../public/images/dairy.png" alt="dairy pic" />
        <Image boxSize={"100px"} src="../../../public/images/fruits.png" alt="fruits pic" />
        <Image boxSize={"100px"} src="../../../public/images/salad.png" alt="salad pic" />
      </Flex>
    </Flex>
  );
};

export default ImageSection;
