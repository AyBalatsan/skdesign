import { useRef, useState } from 'react'
import styled from 'styled-components'
import {ISelectDefault, ISelectForDataString} from '../../../interfaces'

type TypeForValue = {val: string, title: string}
interface iStyled {isOpen: boolean}

const SelectDefault = ({ id, name, titleDefault, req, data }: ISelectDefault) => {
  const [value, setValue] = useState({
    val: '',
    title: titleDefault
  })
  const [openList, setOpenList] = useState(false)
  const selector = useRef()
    
  return (
    <>
      <Select ref={selector} name={name} id={id} {...req ? require : null}>
        {data.map(item => {
          return (
            <option key={item.id} value={item.id}>{item.name}</option>
          )
        })}
      </Select>
      <PseudoSelector>
        <ButtonSelect onClick={(e) => {
          e.preventDefault()
          setOpenList(!openList)
          }} 
        >
          <span>{value.title}</span>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27439 6.08643L9.88692 1.46114C10.038 1.3096 10.0377 1.06425 9.88613 0.912959C9.73459 0.761788 9.4891 0.762178 9.33795 0.91374L4.99995 5.26372L0.661973 0.913584C0.5108 0.762042 0.265468 0.761651 0.113905 0.912803C0.0379276 0.988642 -6.10352e-05 1.088 -6.10352e-05 1.18735C-6.10352e-05 1.28645 0.037674 1.38542 0.113123 1.46112L4.72554 6.08643C4.79815 6.15942 4.89698 6.20038 4.99995 6.20038C5.10292 6.20038 5.20163 6.1593 5.27439 6.08643Z" fill="#353238" />
          </svg>
        </ButtonSelect>
        <PseudoList isOpen={openList}>
          {data.map(option => {
            return <PseudoItem
              key={option.id}
              onClick={() => {
                setValue(
                  {
                    ...value,
                    val:option.id,
                    title:option.name
                  }
                  )
                setOpenList(!openList)
              }}
            >{option.name}</PseudoItem>
          })}
        </PseudoList>
      </PseudoSelector>
    </>
  )
}

export const SelectForDataString = ({ id, name, titleDefault, req, data }: ISelectForDataString) => {
  const [value, setValue] = useState({
    val: '',
    title: titleDefault
  })
  const [openList, setOpenList] = useState(false)
  const selector = useRef()
    
  return (
    <>
      <Select ref={selector} name={name} id={id} {...req ? require : null}>
        {data.map(item => {
          return (
            <option key={item} value={item}>{item}</option>
          )
        })}
      </Select>
      <PseudoSelector>
        <ButtonSelect onClick={(e) => {
          e.preventDefault()
          setOpenList(!openList)
          }} 
        >
          <span>{value.title}</span>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.27439 6.08643L9.88692 1.46114C10.038 1.3096 10.0377 1.06425 9.88613 0.912959C9.73459 0.761788 9.4891 0.762178 9.33795 0.91374L4.99995 5.26372L0.661973 0.913584C0.5108 0.762042 0.265468 0.761651 0.113905 0.912803C0.0379276 0.988642 -6.10352e-05 1.088 -6.10352e-05 1.18735C-6.10352e-05 1.28645 0.037674 1.38542 0.113123 1.46112L4.72554 6.08643C4.79815 6.15942 4.89698 6.20038 4.99995 6.20038C5.10292 6.20038 5.20163 6.1593 5.27439 6.08643Z" fill="#353238" />
          </svg>
        </ButtonSelect>
        <PseudoList isOpen={openList}>
          {data.map(option => {
            return <PseudoItem
              key={option}
              onClick={() => {
                setValue(
                  {
                    ...value,
                    val:option,
                    title:option
                  }
                  )
                setOpenList(!openList)
              }}
            >{option}</PseudoItem>
          })}
        </PseudoList>
      </PseudoSelector>
    </>
  )
}

const Select = styled.select`
  position: absolute;
  z-index: -1;
  opacity:  0;
  visibility: hidden;
`
const PseudoSelector = styled.div`
  position: relative;
`
const ButtonSelect = styled.button`
  padding: 18px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  width: 100%;
  span{
    font-size: 14px;
    line-height: 100%;
    color: #353238;
  }
`
const PseudoList = styled.ul`  
  position: absolute;
  top: 100%;
  left: 8px;
  width: calc(100% - 16px);
  z-index: 2;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 0 0 8px 8px;
  max-height: ${(props:iStyled) => props.isOpen ? "fit-content" : "0"}; 
  visibility:  ${(props:iStyled) => props.isOpen ? "visible" : "hidden"};
  
`
const PseudoItem = styled.li`
  font-size: 14px;
  cursor: pointer;
  line-height: 20px;
  color: #353238;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  &+&{
    border-top: 2px solid #E3E3E3;
  }
`
export default SelectDefault