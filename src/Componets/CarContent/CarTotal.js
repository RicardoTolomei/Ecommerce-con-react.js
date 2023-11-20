
import { useContext } from "react";
import { dataContext } from "../Context/DataContex";

const CarTotal = () => {

    const { cart } = useContext(dataContext)
    const total = cart.reduce((acc, el) => acc + el.price,0)
    return <div className="carTotal">
        <h3>total a pagar: {total} $</h3>

    </div>

}
export default CarTotal
