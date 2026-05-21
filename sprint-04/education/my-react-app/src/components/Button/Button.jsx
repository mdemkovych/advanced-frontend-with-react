// CSS in JS libraries (styled-components)
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: ${props => props.primary ? '#0070f3' : '#eaeaea'};
  color: ${props => props.primary ? 'white' : 'black'};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;