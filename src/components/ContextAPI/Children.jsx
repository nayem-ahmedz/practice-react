import { useContext } from "react";
import AmountContext from "./AmountContext";

export default function Children({name, gift}){
    const money = useContext(AmountContext);
    return(
        <div className="border">
            <h4>{name} {gift && <span>got a {gift}</span>}</h4>
            <h5>Got Money : {money}</h5>
        </div>
    );
}