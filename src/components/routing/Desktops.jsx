import { useLoaderData } from "react-router";

export default function Desktops(){
    const records = useLoaderData();
    // console.log(records);
    return(
        <div>
            <h2>List of Desktops</h2>
            <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Eius, dolorem recusandae.</li>
                <li>Et, natus veniam?</li>
            </ul>
        </div>
    );
}