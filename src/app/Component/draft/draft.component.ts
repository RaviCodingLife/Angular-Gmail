import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/AngularService/services.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

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
