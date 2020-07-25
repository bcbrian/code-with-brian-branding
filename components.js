import React from "react";
import styled from "@emotion/styled";

export const Card = styled.div`
  background: ${({ background }) => background};
  border-radius: 4px;
  width: calc(16 * 4px);
  height: calc(9 * 4px);
  color: #0a090c;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  font-size: 12px;
  padding: 12px;
`;
export const CardHolder = ({ colors }) => {
  return (
    <Row>
      {colors.map(c => (
        <Column key={c}>
          <Card background={c} />
          {c}
        </Column>
      ))}
    </Row>
  );
};
