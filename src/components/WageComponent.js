import React from "react";

const Wage=({staff})=>{
    
      const depamentInfor=  staff.map((staff)=>{
            return(
            <div key={staff.id} className="col-lg-4 col-md-2 col-sm-12 text-center my-2 p-2">
                   <div className="card">
                       <div className="card-body">
                       <strong className="card-title depament-ht"> {staff.name}</strong>
                       <p className="card-text"> Số lượng nhân viên: {staff.numberOfStaff}</p>
                       </div>
                     </div>
                </div>)

        }
    )
    return(
        <div className="row mx-2">
            {depamentInfor}
        </div>
    )
}

export default Depaments