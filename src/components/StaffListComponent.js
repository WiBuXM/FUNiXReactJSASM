import React, {Component} from 'react'
import {ROLE, STAFFS} from "./shared/staffs";
import dateFormat from 'dateformat';
import {NavLink, BrowserRouter, Link} from "react-router-dom";
import RenderEmployee from './StaffInfo';
import Menu from './StaffComponent';
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {STAFFS,ROLE,
            selectEmployee:null
        };
        
    }
    // funcsion khi click vao nhân viên và gán giá trị
    onEmployeeSelect(employee){
        this.setState({selectEmployee:employee})
    }

    render(){
        const menu = this.state.STAFFS.map((employee,index)=>{
            return (
                <div key={employee.id} className="employee col-lg-2 col-md-6 col-sm-12 text-center my-2 p-2" onClick={ () => this.onEmployeeSelect(employee)}>
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
        return (
            <div className="container">
                <h1>Nhân viên</h1><hr/>
                <div className="row">
                    {menu}
                    </div>
                <div>
                   <RenderEmployee employee={this.state.selectEmployee} role={this.state.ROLE} />

                </div>
            </div>
        );
    }
}
export default Main;