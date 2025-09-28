function Event(){
    function myFunction(){
        alert('clicked!');
    }
    const square = (value) => {
        const result = value ** 2;
        alert(result);
    }
    return(
        <div>
            <button onClick={myFunction}>Click Me</button>
            <button onClick={function(){alert('clicked2')}}>Click Me</button>
            <button onClick={() => alert('clicked () wrap')}>click</button>
            <button onClick={() => square(5)}>Square of 5</button>
        </div>
    );
}

export default Event;