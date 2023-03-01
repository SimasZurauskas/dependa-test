import { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";

interface StyleProps {
  height: number;
  displayBottom: boolean;
}

const Div = styled.div<StyleProps>`
  position: absolute;
  width: calc(100% - 22px);
  border-radius: 4px;
  border: 1px solid #ebebeb;
  left: 0;
  top: ${({ displayBottom, height }) => (displayBottom ? 40 : -height - 6)}px;
  padding: 12px 10px 16px 10px;
  user-select: none;
`;

interface ItemsContainerProps {
  children: React.ReactNode;
  displayBottom?: boolean;
}

export const ItemsContainer: React.FC<ItemsContainerProps> = ({
  children,
  displayBottom = true,
}) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <Div ref={ref} height={height} displayBottom={displayBottom}>
      {children}
    </Div>
  );
};
