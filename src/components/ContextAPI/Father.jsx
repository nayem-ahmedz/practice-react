import Children from "./Children";

export default function Father({gift}){
    return(
        <div className="border flex gap-5 flex-col p-5">
            <h3>Father</h3>
            <Children name='Nayem' gift={gift} />
            <Children name='Sayem' />
        </div>
    );
}