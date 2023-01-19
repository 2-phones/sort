import styled from 'styled-components';

interface Input {
  padding: string;
}

interface NavbarInput {
  width: string;
  height: string;
  border: string;
  radius: string;
  shadow: string;
  color: string;
  padding: string;
  size: string;
}

const TagInput = styled.input`
  width: 100%;
  height: 15px;
  padding: 10px;
  border: 2px solid #d2daff;
  outline: none;
  background: #edeffc;
  border-radius: var(--b-small);
  font-size: 18px;
  ::placeholder {
    color: #a0a1a3;
    font-size: 12px;
  }
  &:focus {
    background: #f5f6fa;
  }
`;

const Input = styled.input<Input>`
  height: 30px;
  width: 100%;
  font-size: 13px;
  outline: none;
  border: none;
  border-bottom: ${(props) => (props.color === 'red' ? '1px solid rgba(900, 20, 0, 0.7)' : '1px solid #ebebeb')};
  padding: ${(props) => props.padding || '5px 0px'};
  &:focus {
    border-bottom: 1px solid #111;
  }
`;

const NavbarInput = styled.input<NavbarInput>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border: ${(props) => props.border || '1px solid'};
  border-radius: ${(props) => props.radius || '5px'};
  box-shadow: ${(props) => props.shadow || ''};
  background: rgba(0, 0, 0, 0.06);
  color: ${(props) => props.color || ''};
  padding: ${(props) => props.padding || '8px'};
  font-size: ${(props) => props.size || '5px'};
  outline: none;
  ::placeholder {
    color: #a0a1a3;
    font-size: 12px;
  }
  &:focus {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export { TagInput, Input, NavbarInput };
