export default function Todo({name, isDone}) {
    // return <li>Task : {name} is {isDone ? 'done' : 'pending'}</li>
    
    // if(isDone){
    //     return <li>Task {name} is done</li>
    // } else{
    //     return <li>Task {name} is pending</li>
    // }

    // if(!isDone){
    //     return <li>Task {name} is pending</li>
    // }

    // return isDone && <li>Task {name} is done</li>

    // return isDone || <li>Task {name} is pending</li>

    let output;
    if(isDone){
        output = <li>Task {name} is done</li>
    } else{
        output = <li>Task {name} is pending</li>
    }
    return output;
}