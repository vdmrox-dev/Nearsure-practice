import styled from "styled-components";
import { space } from "styled-system";

import Box from "./Box";

const BaseContainer = styled(Box)`
  ${space}
`;

export default function Container({ children }) {
  return <BaseContainer px="2rem">{children}</BaseContainer>;
}
