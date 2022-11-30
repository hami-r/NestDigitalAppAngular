import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  
  employeeId = ""
  password = ""

  constructor(private route:Router) {}
  

  userLogin = () => {
    let data:any = {
      "employeeId":this.employeeId,
      "password":this.password
    }
    if (this.employeeId == "1122" && this.password == "12345") {
      this.route.navigate(['/addCourse'])
    } else {
      alert("invalid")
    }
    console.log(data);
    
  }

}
