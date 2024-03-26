import { Box, Button, Input, Select, useUpdateEffect } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useUserStore from "../../store/userStore";

const TestPage = () => {
  const [input, setInput] = useState({ gender: "", age: "" });
  const setUser = useUserStore((state) => state.setUser);
  const userStore = useUserStore((state) => state.user);

  const handleClick = () => {
    try {
      setUser(input);
      localStorage.setItem("user-info", JSON.stringify(input));
    } catch (error) {
      console.log(error);
    }
  };

  //   update local state only, not userStore.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <Input type="number" name={"age"} value={input.age} onChange={handleInputChange} />
      <Button onClick={handleClick}>Submit</Button>
      {userStore && (
        <Box>
          {userStore.gender}
          {userStore.age}
        </Box>
      )}
      <Select
        placeholder="Please Select"
        size={"sm"}
        variant={"outlined"}
        name={"gender"}
        value={input.gender}
        onChange={handleSelectChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="prefer not to tell">prefer not to tell</option>
      </Select>
    </>
  );
};

export default TestPage;
