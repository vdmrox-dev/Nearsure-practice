import { Link } from "react-router-dom";
import styled from "styled-components";

import Box from "../CommonComponents/Box";
import Container from "../CommonComponents/Container";

const BaseHeader = styled(Box)`
  font-family: "Quicksand";
  font-weight: 600;
`;

export default function Header({ title }) {
  return (
    <BaseHeader py="1rem" mb="1rem" backgroundColor="#9FDEDF">
      <Container>
        <Box as="h1">
          <Link to="/">{title}</Link>
        </Box>
      </Container>
    </BaseHeader>
  );
}
