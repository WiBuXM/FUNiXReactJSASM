import React, { Component } from "react";
import { Link } from "react-router-dom";

const basicSalary = 3000000;
const overTimeSalary = 200000;

//Hiển thị danh sách bảng lương 
class Wage extends Component{
    constructor (props){
        super(props);
        this.state={
            sort: null
        }
    }

    sapxepAb = (a,b)=> {
        const salaryA = a.salaryScale * basicSalary + a.overTime * overTimeSalary
        const salaryB = b.salaryScale * basicSalary + b.overTime * overTimeSalary
        return salaryA - salaryB
    }
    sapxepBa = (a,b)=> {
        const salaryA = a.salaryScale * basicSalary + a.overTime * overTimeSalary
        const salaryB = b.salaryScale * basicSalary + b.overTime * overTimeSalary
        return salaryB - salaryA
    }
      
    setSort = (sort)=>{
       this.setState({
            sort:sort
       })
    }
    renderSort=(sort)=>{
        if ( sort ===1){
            return(
                this.props.staff.sort(this.sapxepAb).map((staff)=>{
                    const luong = parseInt(staff.salaryScale*basicSalary+staff.overTime*overTimeSalary);
                      return(
                      <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12 text-center my-2 p-2">
                             <div className="card mx-5">
                                 <div className="card-body">
                                 <h3 className="card-title pb-3"> {staff.name}</h3>
                                 <p className="card-text"> Mã nhân viên: {staff.id}</p>
                                 <p className="card-text"> Hệ số lương: {staff.salaryScale}</p>
                                 <p className="card-text"> Số giờ làm thêm: {staff.overTime}</p>
                                 <p className="card-text wage"> Lương: { luong }</p>
                                 </div>
                               </div>
                          </div>)
          
                  })
               
            )
        }
        else if(sort ===2 ){
            return(
                this.props.staff.sort(this.sapxepBa).map((staff)=>{
                    const luong = parseInt(staff.salaryScale*basicSalary+staff.overTime*overTimeSalary);
                      return(
                      <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12 text-center my-2 p-2">
                             <div className="card mx-5">
                                 <div className="card-body">
                                 <h3 className="card-title pb-3"> {staff.name}</h3>
                                 <p className="card-text"> Mã nhân viên: {staff.id}</p>
                                 <p className="card-text"> Hệ số lương: {staff.salaryScale}</p>
                                 <p className="card-text"> Số giờ làm thêm: {staff.overTime}</p>
                                 <p className="card-text wage"> Lương: { luong }</p>
                                 </div>
                               </div>
                          </div>)
          
                  })
               
            )
        }

    }
  
    render(){


     
        const WageInfor=  this.props.staff.map((staff)=>{
          const luong = parseInt(staff.salaryScale*basicSalary+staff.overTime*overTimeSalary);
            return(
            <div key={staff.id} className="col-lg-4 col-md-6 col-sm-12 text-center my-2 p-2">
                   <div className="card mx-5">
                       <div className="card-body">
                       <h3 className="card-title pb-3"> {staff.name}</h3>
                       <p className="card-text"> Mã nhân viên: {staff.id}</p>
                       <p className="card-text"> Hệ số lương: {staff.salaryScale}</p>
                       <p className="card-text"> Số giờ làm thêm: {staff.overTime}</p>
                       <p className="card-text wage"> Lương: { luong }</p>
                       </div>
                     </div>
                </div>)

        })

    return (
        <React.Fragment>
            <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item"><Link to="/staff">Nhân Viên</Link></li>
                <li class="breadcrumb-item active">Bảng Lương</li>
            </ol>
            <div className="text-center my-3">
            <button className="btn btn-primary mx-1" onClick={()=> {this.setSort(1)}} >Xem theo lương từ thấp tới cao</button>
            <button className="btn btn-primary" onClick={()=> {this.setSort(2)}} >Xem theo lương từ cao tới thấp</button>
        </div>
        <div className="row mx-2">
            
            {this.state.sort? this.renderSort(this.state.sort): WageInfor}
            
        </div>
        
        </React.Fragment>
    );}
}

export default Wage;