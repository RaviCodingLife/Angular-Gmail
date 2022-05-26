import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/AngularService/services.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent implements OnInit {

  GmailData:any

  constructor(private gmail:ServicesService) { }

  ngOnInit(): void {
  
    this.getgmailData()
  }

  getgmailData(){
    this.gmail.gmailfn().then((res)=>{
      return res.json()
    }).then((gmaildata)=>{
      console.log(gmaildata);
      this.GmailData=gmaildata
    })
  }
}

