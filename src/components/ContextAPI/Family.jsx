import { createContext, useState } from "react";
import Aunt from "./Aunt";
import Father from "./Father";
import Uncle from "./Uncle";
import AmountContext from "./AmountContext";

export default function Family(){
    const gift = 'Car';
    const [money, setMoney] = useState(1000);
    return(
        <section className="m-10">
            <h2>Family Tree</h2>
            <h3>Total Family Money : {money}</h3>
            <section className="p-5 border grid grid-cols-3 grid-rows-[200px] text-center gap-5">
                <AmountContext value={money}>
                    <Father gift={gift} />
                    <Uncle />
                    <Aunt gift={gift} />
                </AmountContext>
            </section>
        </section>
    );
}