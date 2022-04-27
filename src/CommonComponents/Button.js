import styled from "styled-components";
import { variant, space } from "styled-system";

const BaseButton = styled("button")`
  ${space}
  ${variant({
    variants: {
      primary: {
        color: "#383838",
        bg: "#9FDEDF",
        "&:hover": {
          bg: "#a8dfff"
        }
      },
      secondary: {
        color: "#262626",
        bg: "#FFFFFF",
        border: "solid 1px #9FDEDF",
        "&:hover": {
          bg: "#a8dfff",
          border: "solid 1px transparent"
        }
      }
    }
  })};

  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: "Quicksand";
  font-weight: 600;
`;

export default function Button({ title, variant, ...props }) {
  return (
    <BaseButton variant={variant} {...props}>
      {title}
    </BaseButton>
  );
}
