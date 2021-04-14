import React, {useState} from 'react';
const Followup=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-primary">Today Customer Followup</h2>
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr className="bg-secondary text-white">
                                
                                <td>Name</td>
                                <td>Mobile</td>
                                <td>E-Mail</td>
                                <td>Service</td>
                                <td>Feedback</td>
                                <td>Remarks</td>
                                <td>Action</td>
                                
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>
        </div>
    )


}
export default Followup;