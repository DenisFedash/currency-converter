import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const Select = styled.select`
  display: block;
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  &::-ms-expand {
    display: none;
  }
  outline: none;
  &::after {
    grid-area: select;
  }

  min-width: 70px;

  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
`;
