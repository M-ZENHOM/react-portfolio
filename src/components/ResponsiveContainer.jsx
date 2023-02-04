import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: 768px) {
    & {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    & {
      width: 1170px;
    }
  }
`;

export const ResponsiveContainer = (props) => {
  return <Container {...props}>{props.children}</Container>;
};
