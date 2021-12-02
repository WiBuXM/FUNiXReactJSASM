import React,{Component} from "react";
import { BrowserRouter,Link } from "react-router-dom";
import dateFormat from "dateformat";
import {Breadcrumb,BreadcrumbItem} from 'reactstrap'
    function RenderStaff({staff}){
        if(staff !=null){
            return(
                <div className="row my-3"> 
                   <div className="col-md-3 col-lg-3">
                    <img className="d-block w-100 h-100" src={staff.image} />
                   </div>
                <div className="contents border col-md-9 col-lg-8">
                    <h3 className="my-5">Họ Và Tên: {staff.name}</h3>
                    <p>Ngày Sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                    <p>Phòng Ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày làm thêm: {staff.overTime}</p>
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

    const StaffDetail = (props)=>{
        if (props.staff != null){
            return(
        <div className="container-fluid">
            <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item"><Link to="/staff">Nhân Viên</Link></li>
                <li class="breadcrumb-item active">{props.staff.name}</li>
            </ol>
      
            <div>
                <RenderStaff staff={props.staff} />
            </div>
        </div>)
}
else {return(
    <div></div>)
}
    }
export default StaffDetail;