import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

console.log(GET_MOVIES);

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  return <h1>Home</h1>;
};
