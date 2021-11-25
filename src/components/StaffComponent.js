import React,{Component} from "react";
import { BrowserRouter,Link } from "react-router-dom";
import Main from "./StaffListComponent";
import {ROLE, STAFFS} from "./shared/staffs";
class StaffInfo extends Component{
    constructor(props){
        super(props);
        this.state= { employee: STAFFS };
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default StaffInfo;
























/* const Menu =({props,onclick})=>{
const RenderStaffMenu = props.map((employee,index)=>{
            return (
                <div key={employee.id} className="employee col-lg-2 col-md-6 col-sm-12 text-center my-2 p-2" onClick={onclick} >
                   <div className="card">
                       <BrowserRouter>
                       <Link to={"/staff/"+(employee.id+1)}>
                       <img src={employee.image} className="card-img-top" /></Link></BrowserRouter>
                       <div className="card-body">
                       <strong className="card-title">{index+1}, {employee.name}</strong>
                       </div>
                     </div>
                </div>

            )
        }); 

    return(
        <div className="row">
        {RenderStaffMenu}
        </div>
    )
}

export default Menu; */