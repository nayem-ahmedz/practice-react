import { useLoaderData, useNavigate, useNavigation } from "react-router";

export default function User(){
    const user = useLoaderData();
    // console.log(user);
    const navigate = useNavigate();
    function goBack(){
        navigate(-1)
    }
    const navigation = useNavigation();
    const isNagating = Boolean(navigation.location);
    return(
        <div>
            {
                isNagating && <div>Loading...</div>
            }
            <h3>Name : {user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsam. Cupiditate repellat perferendis vero ipsam sunt consequatur quia voluptas esse optio numquam aliquid voluptates sequi a reprehenderit porro, officiis voluptatem!</p>
            <button className="btn btn-error btn-outline" onClick={goBack}>Go Back</button>
        </div>
    );
}