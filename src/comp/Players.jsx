import { useState, useEffect } from 'react';
export default function Player(){
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayers(data));
    } ,[]);
    return(
        <div className='card'>
            <h3>List of Players</h3>
            <ul>
                {
                    players.map(player => <li key={player.id}>{player.name}</li>)
                }
            </ul>
        </div>
    );
}