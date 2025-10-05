import { useRef, useState } from "react";

export default function SimpleForm2(){
    const emailRef = useRef('');
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('email ref:', emailRef); // as a object
        // console.log(emailRef.current) // the input filed
        console.log(emailRef.current.value)
    }
    return(
        <form className="m-3" onSubmit={handleSubmit}>
            <input type='text' placeholder='Your Name' name='name' className='input' />
            <br/>
            <input type='email' placeholder='Your Email' name='email' className='input mt-2' ref={emailRef} />
            <br/>
            <input type='submit' value='submit' className="btn mt-2" />
        </form>
    );
}