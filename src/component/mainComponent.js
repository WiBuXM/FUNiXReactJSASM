import React,{Component} from "react";
import { STAFFS } from "./shared/staffs";
import Header from "./HeaderComponent";
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
           dsnv: STAFFS
        }
    }
    render(){
return(
    <div>
       <Header/>
    </div>
)
    }
}
export default Main;