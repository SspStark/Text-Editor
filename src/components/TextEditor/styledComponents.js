import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background-color: grey;
  color: ${props => props.colorText};
`
export const Textarea = styled.textarea`
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`
