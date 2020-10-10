import styled, { css } from 'styled-components/native';
import { shade } from 'polished';

interface IConatinerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<IConatinerProps>`
  width: 100%;

  border-color: #fff;
  border-bottom-color: #3a3a3a;

  margin-bottom: 8px;
  border-width: 2px;

  ${props =>
    props.isFocused &&
    css`
      border-bottom-color: #00c3a3;
    `};

  ${props =>
    props.isFilled &&
    css`
      border-bottom-color: #00c3a3;
    `};
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #3a3a3a;
  font-size: 22px;
  font-family: 'Poppins-Regular';
  margin: 0;
  padding: 0;
`;
