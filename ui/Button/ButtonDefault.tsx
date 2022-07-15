
import styled from 'styled-components'


const ButtonDefault = ({title, }) => {
  return (
    <ButtonDef>
      <span>{title}</span>
      <span></span>
    </ButtonDef>
    
  )
}
const ButtonDef = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  transition: all 0.4s ease;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  background: #0086A8;
  border-radius: 8px;
  min-width: 156px;
  min-height: 50px;
  &:hover{
    background: #007693;
  }
  &:focus{
    background: #00657E;
  }
  &:disabled{
    color: #828282;
    background: #E3E3E3;
  }
`

export default ButtonDefault