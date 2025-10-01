import { use } from "react";
import { Link } from "react-router";

export default function Users(props){
    const users = use(props.promise);
    // console.log(users);
    return(
        <>
            <h3 className="text-2xl">list of all users</h3>
            <p>length : {users.length} </p>
            <ul className="user-list">
                {
                    users.map(user => <li key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link> </li>)
                }
            </ul>
        </>
    );
}