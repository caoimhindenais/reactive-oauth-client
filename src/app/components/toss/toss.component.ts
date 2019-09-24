import { Component, OnInit } from '@angular/core';
import {TossService} from "../../services/toss.service";
import {Toss} from "../../model/toss";


@Component({
  selector: 'app-toss',
  templateUrl: './toss.component.html',
  styleUrls: ['./toss.component.css']
})
export class TossComponent implements OnInit {

  toss: Toss;
  private interval: number;
  private headers: string[];


  constructor(private tossService: TossService) { }

  ngOnInit() {
    console.log("TossComponent ....")
    this.interval = setInterval(() => {
      this.flip();
    }, 1000);
    this.flip();
  }

  // flip(){
  //   this.tossService.toss().subscribe(data => {
  //     this.toss = data;
  //   });
  flip(){
    this.tossService.toss() .subscribe(resp => {
      // display its header
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      this.toss = { ... resp.body };
    });
  }


  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


}
