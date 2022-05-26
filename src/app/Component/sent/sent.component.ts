import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/AngularService/services.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

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

