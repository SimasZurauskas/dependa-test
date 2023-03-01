import { useState } from "react";
import styled from "styled-components";
import SampleSelect from "./DCDropDown/SampleSelect";

const Div = styled.div`
  padding-top: 200px;
`;

const App = () => {
  const [value, setValue] = useState<any[]>([1, 2]);

  console.log(value);
  return (
    <Div>
      <SampleSelect
        value={value}
        onChange={(value) => setValue(value)}
        onBlur={() => console.log("Blur")}
        disabled={false}
      />
    </Div>
  );
};

export default App;
