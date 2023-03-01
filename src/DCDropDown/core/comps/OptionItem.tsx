import styled from "styled-components";
import { Check } from "./Check";

interface CheckProps {
  isSelected: boolean;
}

const CheckBox = styled.div<CheckProps>`
  height: 15px;
  width: 15px;
  min-height: 15px;
  min-width: 15px;
  border-radius: 2px;
  border: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isSelected }) =>
    isSelected ? "#ebebeb" : "transparent"};
`;

export const Div = styled.div`
  display: flex;
  cursor: pointer;

  .label {
    margin-left: 12px;
    font-size: 12px;
  }
`;

interface OptionItemProps extends CheckProps {
  label: string;
  onClick: () => void;
}

export const OptionItem: React.FC<OptionItemProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return (
    <Div onClick={onClick}>
      <CheckBox isSelected={isSelected}>{isSelected && <Check />}</CheckBox>
      <span className="label">{label}</span>
    </Div>
  );
};
