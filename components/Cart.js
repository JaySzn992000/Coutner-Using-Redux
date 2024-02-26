import { connect } from "react-redux";


const Cart = ({cart}) => {

return (

<div>

{cart.map((item,index)=>(
<li key={index}>
{item.data}
</li>
))
}

</div>

)

}

const mapStateToProps = (state) => {
return {
    cart : state.cart,
}
}


export default connect(mapStateToProps) (Cart);