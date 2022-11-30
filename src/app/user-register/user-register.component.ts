import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  employeeId = ""
  firstName = ""
  lastName = ""
  houseNo = ""
  houseName = ""
  streetName = ""
  pincode = ""
  district = ""
  state = ""
  country = ""
  mobileNo = ""
  email = ""
  gender = ""
  parentName = ""
  highestDegree = ""
  yearOfExperience = ""
  dateOfJoining = ""
  username = ""
  password = ""
  confirmPassword = ""

  constructor(private route:Router) {}
  

  userReg = () => {
    let data:any = {
      "employeeId":this.employeeId,
      "firstName":this.firstName,
      "lastName":this.lastName,
      "houseNo":this.houseNo,
      "houseName":this.houseName,
      "streetName":this.streetName,
      "pincode":this.pincode,
      "district":this.district,
      "state":this.state,
      "country":this.country,
      "mobileNo":this.mobileNo,
      "email":this.email,
      "parentName":this.parentName,
      "gender":this.gender,
      "highestDegree":this.highestDegree,
      "yearOfExperience":this.yearOfExperience,
      "dateOfJoining":this.dateOfJoining,
      "username":this.username,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }

    if (this.password == this.confirmPassword ) {
      console.log(data);
      alert("Registered Successfully")
      this.employeeId = ""
      this.firstName = ""
      this.lastName = ""
      this.houseNo = ""
      this.houseName = ""
      this.streetName = ""
      this.pincode = ""
      this.district = ""
      this.state = ""
      this.country = ""
      this.mobileNo = ""
      this.email = ""
      this.gender = ""
      this.parentName = ""
      this.highestDegree = ""
      this.yearOfExperience = ""
      this.dateOfJoining = ""
      this.username = ""
      this.password = ""
      this.confirmPassword = ""
    } else {
      alert("Passwords do not match")
    }
    
  }
}
