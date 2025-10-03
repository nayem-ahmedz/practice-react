export default function SimpleForm(){
    function handleAction(formData){
        // console.log(formData); // entire form data
        console.log(formData.get('name')) // get input name='name'
        console.log(formData.get('email')) // get name='email'
    }
    return(
        <form action={handleAction} className="m-3">
            <input type='text' placeholder='Your Name' name='name' className='input' />
            <br/>
            <input type='email' placeholder='Your Email' name='email' className='input mt-2' />
            <br/>
            <input type='submit' value='submit' className="btn mt-2" />
        </form>
    );
}