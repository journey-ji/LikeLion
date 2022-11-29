import styled  from 'styled-components'
import cartBtn from '../../assets/images/icon-shopping-cart-white.svg'
const CartBtn = styled.a`
  background: var(--main-color) url(${cartBtn}) no-repeat center / 40px 40px;
`
export default function Cart() {
  return (
    <CartBtn href='/cartPage' className='link-btn cart-link'></CartBtn>
  )
}
