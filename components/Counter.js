import { connect } from "react-redux";
import { addToCart } from "../action/action";
import { useState } from "react";
import '../App.css'; 


const Counter = ({addToCart}) => {

const [data,setdata] = useState(0);
const clickhanlder = () => {
setdata(prevdata=> prevdata + 1 )
addToCart(data)
}

return (

<div>

<div className="center_counter">    
<h1>Counter Application</h1>
<h1 className="cntr">Counter</h1>
<p>{data}</p>
<button onClick={()=>clickhanlder(data)}>Increment</button>
</div>

</div>

)

}

export default connect(null,{addToCart}) (Counter)