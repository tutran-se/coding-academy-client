import { Box, Container, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.100" : "gray.700";
  return (
    <>
      <Head>
        <title>Register | codingAcademy</title>
        <meta name="keywords" content="register" />
      </Head>
      <Container>
        <Flex align="center" justify="center" minH="82vh">
          <Box
            w="100%"
            boxShadow="xl"
            rounded="md"
            bg={bg}
            py={[20, 10, 10, 20]}
            px={[5, 10, 10, 10]}
          >
            <Heading size="lg" textAlign="center">
              Register
            </Heading>
            <RegisterForm />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default RegisterPage;
