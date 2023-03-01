import { useState } from "react";
import styled from "styled-components";
import { Chevron, ItemsContainer, OptionItem } from "./comps";

interface StyleProps {
  disabled?: boolean;
}

const Div = styled.div<StyleProps>`
  position: relative;
  max-width: 310px;
  .input {
    height: 34px;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

    &__label {
      font-size: 12px;
    }
    &__placeholder {
      font-size: 12px;
      opacity: 0.7;
    }
  }

  .options {
    display: grid;
    grid-gap: 4px;
  }

  .spc {
    height: 11px;
  }
`;

export interface Option {
  value: string | number;
  label: string;
}

interface BaseProps extends StyleProps {
  options: Option[];
  selected: Option[];
  setSelected: (selected: Option[]) => void;
  displayBottom?: boolean;
  placeholder?: string;
  onBlur?: () => void;
}

const Base: React.FC<BaseProps> = ({
  options,
  selected,
  setSelected,
  displayBottom = true,
  placeholder,
  disabled,
  onBlur,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCheck = (option: Option) => {
    if (selected.some((el) => el.value === option.value)) {
      setSelected(selected.filter((el) => el.value !== option.value));
    } else {
      setSelected([...selected, option]);
    }
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <Div disabled={disabled}>
      <div
        className="input"
        onClick={() => (disabled ? null : handleToggleOpen())}
      >
        {Boolean(selected.length) ? (
          <span className="input__label">{`${selected.length} selected`}</span>
        ) : (
          <span className="input__placeholder">{placeholder}</span>
        )}
        <Chevron isOpen={isOpen} />
      </div>

      {isOpen && (
        <ItemsContainer displayBottom={displayBottom}>
          <div className="options">
            {options.map((el, idx) => (
              <OptionItem
                key={el.value}
                label={el.label}
                isSelected={selected.some((s) => s.value === el.value)}
                onClick={() =>
                  handleCheck({ value: el.value, label: el.label })
                }
              />
            ))}
          </div>
          <div className="spc" />
          <button onClick={() => setIsOpen(false)}>Done</button>
        </ItemsContainer>
      )}
    </Div>
  );
};

export default Base;
