
import styled from 'styled-components'

type TypeInputDefault = { id: string, placeholder: string, label: string, type: string, req: boolean}

const InputDefault = ({id, placeholder, label, type, req}: TypeInputDefault) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} {...req ? require : null} />
    </>
    
  )
}
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: 'SF UI Display';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.25px;
  color: #828282;
  padding: 0px 5px;
  z-index: 1;
`
const Input = styled.input`
  display: flex;
  padding: 18px 15px;
  gap: 10px;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
`

export default InputDefault