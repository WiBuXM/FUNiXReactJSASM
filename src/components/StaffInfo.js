import React from "react";
import dateFormat from "dateformat";

const RenderEmployee= ({employee,role})=>{
    if(employee !=null){
        return(
            <div className="row"> 
               <div className="col-md-3 col-lg-3">
                <img className="d-block w-100 h-100" src={employee.image} />
               </div>
            <div className="contents border col-md-9 col-lg-9">
                <h3>Họ Và Tên: {employee.name}</h3>
                <p>Ngày Sinh: {dateFormat(employee.doB,"dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(employee.startDate,"dd/mm/yyyy")}</p>
                <p>Phòng Ban: {employee.department.name}</p>
                <p>Số ngày nghỉ còn lại: {employee.annualLeave}</p>
                <p>Số ngày làm thêm: {employee.overTime}</p>
                <p>Chức danh: {role.NORMAL_STAFF} </p>
            </div>
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }
}

export default RenderEmployee;