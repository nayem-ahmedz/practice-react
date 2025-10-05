import Children from "./Children";

export default function Aunt({gift}){
    return(
        <div className="border flex gap-5 flex-col p-5">
            <h3>Aunt</h3>
            <Children name='Arosh' gift={gift} />
        </div>
    );
}