// main func
function App() {
  const today = new Date();
  return (
    <>
      <h1>Welcome to React</h1>
      {/* <Student name='Nayem' age='25' /> */}
      <User name='Nayem' id='0171230' />
      <Student name='Hajifa' age='24' />
      <User name='Jui' id='016120' />
      <hr />
      <Sport name='Football' date={today.toLocaleDateString()} />
      <Sport name='Cricket' date='10 Feb 26' />
    </>
  )
}

function Sport({name, date}){
  return(
    <div>
      <h3>Sport Event : {name}</h3>
      <p>Date : {date}</p>
    </div>
  )
}

function User(props){
  const obj = {
    border: '1px solid gray',
    marginBottom: '10px'
  };
  return(
    <div style={obj}>
      <h3>User : {props.name}</h3>
      <p>ID : {props.id}</p>
    </div>
  );
}

function Student(props){
  const style = {
    border: '1px solid blue',
    marginBottom: '10px'
  }
  return(
    <div style={style} className='student'>
      <h2 style={{color: 'blue'}}>Student Name : {props.name} </h2>
      <h3>Age : {props.age} </h3>
    </div>
  );
}

function Person(){
  const name = 'Nayem Ahmed';
  let age = 25;
  return(
    <h2>Person : {name}, he is {age} years old</h2>
  );
}

function Wife(){
  const wife = 'Hajifa Jui';
  return <h2>Wife named {wife}</h2>
}



// last half
function App() {
  const users = [
    {id: 1, name: 'Nayem', age: 25},
    {id: 2, name: 'Hajifa', age: 24},
    {id: 3, name: 'Jui', age: 23}
  ];
  return (
    <>
      <h1>List of User</h1>
      {
        users.map(user => <User key={user.id} user={user} />)
      }

      {/* <ul>
      <h1>Todo List</h1>
        <Todo task='Learn React' isDone={true} />
        <Todo task='Practice code' isDone={false} />
        <Todo task='eat' isDone={true} />
      </ul> */}
    </>
  )
}

//  To do app
// function Todo(props){
//     // props.task = 'changed'; // cannot change read only props
//     return(
//         <li>Task : {props.task}</li>
//     )
// }

// export default Todo;

// export default function Todo({task, isDone}){
//     if(isDone){
//         return(<li>Task Done : {task}</li>)
//     } else{
//         return(<li>Task Pending : {task}</li>)
//     }
// }

// export default function Todo({task, isDone}){
//     if(isDone){
//         return(<li>Task Done : {task}</li>)
//     }
//     return(<li>Task Pending : {task}</li>)
// }

// export default function Todo({task, isDone}){
//     // isDone ? return(<li>Task Done : {task}</li>) : return(<li>Task Pending : {task}</li>)
//     return isDone ? <li>Task Done : {task}</li> : <li>Task Pending : {task}</li>;
// }

// export default function Todo({task, isDone}){
//     return isDone && <li>Task done : {task}</li>
// }

// export default function Todo({task, isDone}){
//     return isDone || <li>Task Pending : {task}</li>
// }

export default function Todo({task, isDone}){
    let result;
    if(isDone){
        result = <li>Task done : {task}</li>
    } else{
        result = <li>Task Pending : {task}</li>
    }
    return result;
}

// user comp
export default function User({user}){
    return(
        <div style={{border: '1px solid gray', marginBottom: '10px'}}>
            <h3>User Name : {user.name}</h3>
            <p>Age : {user.age} </p>
        </div>
    );
}