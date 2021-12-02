import React from "react";

const Depaments=({depament})=>{
    
      const depamentInfor=  depament.map((depament)=>{
            return(
            <div key={depament.id} className="col-lg-4 col-md-2 col-sm-12 text-center my-2 p-2">
                   <div className="card">
                       <div className="card-body">
                       <strong className="card-title depament-ht"> {depament.name}</strong>
                       <p className="card-text"> Số lượng nhân viên: {depament.numberOfStaff}</p>
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