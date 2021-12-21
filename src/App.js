import React, { Component }  from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import {Switch ,Route, Redirect} from 'react-router-dom';
import Footer from './components/FooterComponent';
import {BrowserRouter as Router} from 'react-router-dom'
import RenderStaffMenu from './components/StaffListComponent';
import { STAFFS,DEPARTMENTS } from './components/shared/staffs';
import StaffDetail from './components/StaffIdComponent';
import Depaments from './components/DepartmentComponent';
import Wage from './components/WageComponent';
class App extends Component {
constructor(props) {
  super(props);
  this.state={
    staff: STAFFS
    ,depaments:DEPARTMENTS
  }
}


render(){
  const StaffId = ({match})=>{
    return (
     <StaffDetail staff={this.state.staff.filter((staff)=> staff.id === parseInt(match.params.id))[0]} />
    )
  }
  return (<Router>
    <div className="App">
      <div>
      <Header/>
        <Switch>
          <Route exact path="/staff" component={()=> <RenderStaffMenu stafflish={this.state.staff} />} />
          <Route path="/staff/:id" component={StaffId} />
          <Route path="/depament" component={()=><Depaments depament={this.state.depaments}  />} />
          <Route path="/payroll" component={()=><Wage staff={this.state.staff}  />} />
          <Redirect to="/staff" />
        </Switch>
       
      <Footer />
       
        </div>
    </div>
      </Router> );}
}

export default App;
