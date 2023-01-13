import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width:50%;
  height: 100vh;
  background:#acccbc;
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
const IconMenu = styled.div`
  font-size: 30px;
  position: fixed;
  width: 100%;
  top:0;
  left:0;
  background:#0a7568;
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
  color:#184848;
  font-size:25px;
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
export { Nav,NavLink,IconMenu,Title,Container, CardProduct, CategoriesCard }