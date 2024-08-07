import styled from 'styled-components/native';

interface DisplayProps{
  CustomMargin?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: ${(props) => (props.CustomMargin ? props.CustomMargin : '0px')};
`;
