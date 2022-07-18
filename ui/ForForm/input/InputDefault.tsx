
import styled from 'styled-components'
import {TypeInputDefault} from '../../../interfaces'

interface iStyled {err: boolean}

const InputDefault = ({id, placeholder, label, type, req=null, inputValid}: TypeInputDefault) => {
  const {register, errors} = inputValid
  console.log('>>', errors?.id === undefined);
  
  
  return (
    <Shell>
      <Input {...register(id, {...req})} err={errors?.id === undefined} type={type} placeholder={placeholder} />
      <Label err={errors?.id === undefined} htmlFor={id}>{label}</Label>
      <Error>
        {errors?.id && <p>{errors?.id?.message || 'Error'}</p>}
      </Error>
    </Shell>    
  )
}

const Shell = styled.div`
  position: relative;
  width: 100%;
  padding-top: 5px;     
`
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
  padding: 0px 5px;
  z-index: 1;
  transition: 0.4s all ease;
  color: #828282;
  color: ${(props:iStyled) => props.err ? "#828282" : "#EB5E55"}; 
  `
const Input = styled.input`
  display: flex;
  transition: 0.4s all ease;
  width: 100%;
  padding: 18px 15px;
  gap: 10px;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  border-color: ${(props:iStyled) => props.err ? "#E3E3E3" : "#EB5E55"}; 
  border-radius: 8px;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.25px;
  color: #353238;
  transition: 0.4s all;
  &::placeholder{
    color: #CDCAD0;
  }
  &:focus{
    border-color: #0086A8;  
    & + Label{
      color: #0086A8;
    }      
  }
`
const Error = styled.div`
  font-size: 12px;
  line-height: 100%;
  color: #EB5E55;
  position: absolute;
  top: calc(100% + 8px);
  left: 15px;
`

export default InputDefault