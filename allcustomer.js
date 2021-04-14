import React, {useState} from 'react';
const Allcustomer=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-primary">Customer List</h2>
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr className="bg-secondary text-white">
                                
                                <td>Name</td>
                                <td>Mobile</td>
                                <td>E-Mail</td>
                                <td>City</td>
                                <td>Address</td>
                                <td>Service</td>
                                <td>Feedback</td>
                                <td>Remarks</td>
                                <td>Next Call</td>
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>
        </div>
    )


}
export default Allcustomer;