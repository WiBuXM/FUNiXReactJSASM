import React, {Component} from 'react'
import {STAFFS} from "./shared/staffs";
import dateFormat from 'dateformat';
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {STAFFS,
            selectEmployee:null
        };
        
    }
    // funcsion khi click vao nhân viên và gán giá trị
    onEmployeeSelect(employee){
        this.setState({selectEmployee:employee})
    }
    renderEmployee(employee){
        if(employee !=null){
            return(
                <div className="w-100"> 
                   <div className="content-heading text-center">Thông tin nhân sự</div>
                <div className="contents border p-3 w-100">
                    <h3>Họ Và Tên: {employee.name}</h3>
                    <p>Ngày Sinh: {dateFormat(employee.doB,"dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(employee.startDate,"dd/mm/yyyy")}</p>
                    <p>Phòng Ban: {employee.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {employee.annualLeave}</p>
                    <p>Số ngày làm thêm: {employee.overTime}</p>
                </div></div>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }
    render(){
        const menu = this.state.STAFFS.map((employee,index)=>{
            return (
                <div key={employee.id} className="employee col-lg-4 col-md-6 col-sm-12 border text-center my-2 p-2" onClick={ () => this.onEmployeeSelect(employee)}>
                   <div><strong>{index+1}, {employee.name}</strong></div>
                </div>

            )
        });
        return (
            <div className="container">
                <div className="row"> 
                        {menu}
                </div>
                <div className="row">
                    {this.renderEmployee(this.state.selectEmployee)}

                </div>
            </div>
        );
    }
}
export default Menu;