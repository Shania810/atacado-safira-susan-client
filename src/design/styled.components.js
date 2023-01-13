import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width:50%;
  height: 100vh;
  background:#c1c9c8;
  padding:5px;
  position:fixed;
  top:50px;
  left:0;
  z-index:1;
`
const NavLink = styled(Link)`
  text-decoration: none;
  color:white;
  font-size:20px;
  font-weight:bold;
  padding: 6px 0;
  border-bottom: 3px solid white;
`
const ButtonLink = styled(Link)`
  text-decoration: none;
  font-size:  20px;
  font-weight: bold;
  color: ${props => props.color};
`
const IconMenu = styled.div`
  font-size: 30px;
  position: fixed;
  width: 100%;
  top:0;
  left:0;
  background:#080d0d;
  color:white;
  padding: 5px 10px;
  z-index:1;
`
const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  position:relative;
  top:50px;
  z-index:0;
  margin:0;
`

const Title = styled.div`
  display:flex;
  justify-content:center;
  color:${props => props.color};
  font-size:25px;
`

const Buttons = styled.div`
  display:flex;
  flex-direction:column;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`

const ButtonBlue = styled.button`
  background:#3c6c94;
  color:white;
  font-size:  20px;
  font-weight: bold;
  border:0;
  width: 250px;
  padding: 10px 20px;
  border-radius: 20px;
`
const ButtonGreen = styled.button`
  background: #0a7568;
  color:white;
  font-size:  20px;
  font-weight: bold;
  border: 0;
  width: 250px;
  padding: 10px 20px;
  border-radius: 20px;
` 
const Button = styled.button`
  color: ${props => props.color};
  background: ${props => props.background};
  border: 5px solid ${props => props.border};
  border-radius: 40px;
  width: ${props => props.width}
  height: 50px;
  padding: 5px 10px;
  font-weight: ${props => props.bold && 'bold'};
  font-size: ${props => props.size}px;
`
const Form = styled.form`
   
`

const LabelInput = styled.div`
  margin: 20px 0;
`
const Label = styled.label`
  color: #2d3839;
  font-weight: bold;
  font-size: 20px;
`
const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 0;
`
const Div = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items:center;
  padding: 10px 0;
  background: ${props => props.background};
  position: ${props => props.position};
  bottom: ${props => props.bottom};
  z-index: ${props => props.zIndex};
`
const CardProduct = styled.div`
  border: 3px solid black;
  margin: 20px;
`
const CategoriesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`
export { Nav,NavLink,ButtonLink,IconMenu,Title,Container,Div,Buttons,ButtonBlue,ButtonGreen,Button,Form,LabelInput,Label,Input, CardProduct, CategoriesCard }