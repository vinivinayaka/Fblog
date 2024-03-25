import Button from './Button'

function Facebook2nd() {

    return (
        <>
            <center className="card" >
                <div className="card-body">
                    <div>
                    <input type="text" className="form-control _5url form-control-lg  mx-1" id="colFormLabelLg" placeholder="Email address or phone number" aria-label="Email address or phone number" />
                    <input type="password" className="form-control _5url form-control-lg my-2 mx-1" id="colFormLabelLg" placeholder="Password" aria-label="Password" />
                    </div>
                </div>
                <Button />
                <a href='#' className='text-center my-2' style={{ textDecoration: 'none' }}>Forgotten password?</a>
             <div className='centerline'></div>
             <button className='Fbutton' style={{  color:"#fff" }}>Create new account</button>
            </center>
            <div id="reg_pages_msg" className="_58mk mx-4 my-4 "><b>Create a Page</b> for a celebrity, brand or business.</div>

        </>
    )
}
export default Facebook2nd;