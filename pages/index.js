import React, { useEffect } from "react";
import CourseItem from "../components/CourseItem";
import { Flex } from "@chakra-ui/layout";
import client from "../libs/apolloClient";
import { ALL_COURSES_QUERY } from "../constants/queryGrapql";
import { Box, useToast } from "@chakra-ui/react";
import Head from "next/head";

const Homepage = ({ courses }) => {
  return (
    <>
      <Head>
        <title>Home | codingAcademy</title>
        <meta name="keywords" content="tutran.dev" />
        <meta name="description" content="tutran.dev" />
      </Head>
      <Box minH="82vh" py="4">
        <Flex
          justify={["center", "space-evenly", "space-evenly", "center"]}
          wrap="wrap"
        >
          {courses.map((course) => (
            <CourseItem course={course} key={course.id} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export async function getStaticProps(context) {
  const {
    data: { courses },
  } = await client.query({
    query: ALL_COURSES_QUERY,
  });

  return {
    props: { courses },
    revalidate: 1, // will be passed to the page component as props
  };
}

export default Homepage;
