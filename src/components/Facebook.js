import Facebook1st from "./Facebook1st";
import Facebook2nd from "./Facebook2nd";

function Facebook(){    

    return (
        <>
        <div >
        <div className="row ">
            <div className="col-md-6">
                <Facebook1st />
            </div>
            <div className="col-md-6 " style={{paddingLeft: '100px'}}>
            <Facebook2nd />
            </div>
        </div>
        </div>

        </>
    );
}
export default Facebook;