import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name = ""
  friendName = ""
  friendNickName = ""
  DescribeYourFriend = ""

  constructor(private api:ApiService) {}

  readFriend = () => {
    let friend = { 
    "name": this.name, 
    "friendName": this.friendName, 
    "friendNickName": this.friendNickName, 
    "DescribeYourFriend": this.DescribeYourFriend };

    console.log(friend);

    this.api.addFriends(friend).subscribe(
      (response:any) => {
        console.log(response)
        if (response.status == "success") {
          alert("Added Successfully")
          this.name = ""
          this.friendName = ""
          this.friendNickName = ""
          this.DescribeYourFriend = ""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
