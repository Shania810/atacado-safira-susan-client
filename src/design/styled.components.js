import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
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
export { Nav, CardProduct, CategoriesCard }