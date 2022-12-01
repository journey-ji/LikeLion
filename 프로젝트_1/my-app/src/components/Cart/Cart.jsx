import styled  from 'styled-components'
import cartBtn from '../../assets/images/icon-shopping-cart-white.svg'
import {Link} from 'react-router-dom'
const CartBtn = styled(Link)`
  background: var(--main-color) url(${cartBtn}) no-repeat center / 40px 40px;
`
export default function Cart() {
  return (
    <CartBtn to='/cartPage/' className='link-btn cart-link'/>
  )
}
