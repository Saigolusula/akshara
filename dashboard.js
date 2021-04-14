import React from 'react';
const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-primary">Dashboard</h2>
                </div>
                </div>
                

            
            <div className="row mt-3 text-center">
                <div className="col-lg-3 form-group">
                    <i className="fa fa-users fa-5x text-danger"></i>  
                    <h4 className="text-primiary">100 Customers</h4>
                </div>

            
            
                <div className="col-lg-3 form-group">
                    <i className="fa fa-user-plus fa-5x text-warning"></i>
                    <h4 className="text-primiary">New Customers</h4>
                </div>

            
           
                <div className="col-lg-3 form-group">
                    <i className="fa fa-check fa-5x text-info"></i>
                    <h4 className="text-primiary">50 Inteested Customers</h4>
                </div>

            
            
                <div className="col-lg-3 form-group">
                    <i className="fa fa-headset fa-5x text-success"></i>
                    <h4 className="text-primiary">40 Today Follow up </h4>
                </div>

            </div>
            </div>
            

        

    );
}
export default Dashboard;