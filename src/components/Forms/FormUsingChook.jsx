import useInputField from "../hooks/useInputField";

function FormUsingChook(){
    const [name, handleNameChane] = useInputField('');
    const [email, handleEmailChange] = useInputField('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email)
    }
    return(
        <form className="m-3" onSubmit={handleSubmit}>
            <input type='text' placeholder='Your Name' name='name' className='input' defaultValue={name} onChange={handleNameChane}/>
            <br/>
            <input type='email' placeholder='Your Email' name='email' className='input mt-2' defaultValue={email} onChange={handleEmailChange} />
            <br/>
            <input type='submit' value='submit' className="btn mt-2" />
        </form>
    );
}

export default FormUsingChook;