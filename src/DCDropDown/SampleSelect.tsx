import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import Base, { Option } from "./core/Base";

const options = [
  { value: 1, label: "JFA Class A Coaching License" },
  { value: 2, label: "JFA Class B Coaching License" },
  {
    value: 3,
    label:
      "JFA Class C Coaching License JFA Class C Coaching License JFA Class C Coaching License",
  },
];

interface SampleSelectProps {
  value: any[];
  onChange: (value: any[]) => void;
  disabled?: boolean;
  onBlur?: () => void;
}

const SampleSelect: React.FC<SampleSelectProps> = ({
  value,
  onChange,
  disabled,
  onBlur,
}) => {
  const [selected, setSelected] = useState<Option[]>([]);

  useEffect(() => {
    const selected = options.filter((el) => value.includes(el.value));
    setSelected(selected);
  }, [value, options]);

  useEffect(() => {
    const changedValue = selected.map((el) => el.value);
    if (!isEqual(changedValue, value)) {
      onChange(changedValue);
    }
  }, [selected]);

  return (
    <Base
      options={options}
      selected={selected}
      setSelected={setSelected}
      displayBottom
      placeholder={disabled ? "" : "Select"}
      disabled={disabled}
      onBlur={onBlur}
    />
  );
};

export default SampleSelect;
