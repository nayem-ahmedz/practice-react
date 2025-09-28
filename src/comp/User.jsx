function User(){
    const users = [
        {id: 1, name: 'Nayem', age: 25},
        {id: 2, name: 'Hajifa', age: 24},
        {id: 3, name: 'Jui', age: 24},
    ]
    // return(
    //     <div>
    //         {
    //             users.map(user => <li key={user.id}>user name {user.name} is {user.age} years old</li>)
    //         }
    //     </div>
    // )

    const list = users.map(user => <li key={user.id}>user name {user.name} is {user.age} years old</li>);
    return list;
}

export default User;