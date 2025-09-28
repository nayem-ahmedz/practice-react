import { use } from 'react';
function Users({fetchUsers}){
    const users = use(fetchUsers);
    return(
        <div>
            <h3>Users Data : {users.length} </h3>
        </div>
    );
}

export default Users;