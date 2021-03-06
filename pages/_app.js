import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import AuthContextProvider from "../components/AuthContextProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToasterTest from "../components/ToasterTest";
import client from "../libs/apolloClient";
import theme from "../libs/theme";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ApolloProvider client={client}>
        <Container
          maxW={[
            "container.xl",
            "container.sm",
            "container.md",
            "container.lg",
          ]}
          p={4}
        >
          <AuthContextProvider>
            <ToasterTest>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </ToasterTest>
          </AuthContextProvider>
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
