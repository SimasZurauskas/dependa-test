import styled, { css } from "styled-components";

interface StyleProps {
  isOpen: boolean;
}

const Svg = styled.svg<StyleProps>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

interface ChevronProps extends StyleProps {}

export const Chevron: React.FC<ChevronProps> = ({ isOpen }) => {
  return (
    <Svg
      isOpen={isOpen}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.35742 6.65723L6.43183 1.58282L11.5062 6.65723"
        stroke="#3551B8"
        strokeWidth="1.38393"
      />
    </Svg>
  );
};
