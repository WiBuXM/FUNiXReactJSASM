import React, {Component} from 'react'
import { Link} from "react-router-dom";



//Hiển thị Danh Sách Nhân viên
   function RenderStaffMenu({stafflish}){
        const menu = stafflish.map((employee,index)=>{
            return (
                <div key={employee.id} className="employee col-lg-2 col-md-6 col-sm-12 text-center my-2 p-2">
                   <div className="card">
                       <Link to={`/staff/${employee.id}`}>
                       <img src={employee.image} className="card-img-top" /></Link>
                       <div className="card-body">
                       <strong className="card-title">{index+1}, {employee.name}</strong>
                       </div>
                     </div>
                </div>

            )
        }); 
        return (
            <div className="container">
                <h1>Nhân viên</h1><hr/>
                <div className="row">
                    {menu}
                </div>
           
            </div>
        );
    }
export default RenderStaffMenu;