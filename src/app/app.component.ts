import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private testAry = [1, 2, 3, 4, 5];
  public obs: Observable<any>;

  constructor() {
    this.obs = Observable.timer(0, 1000).take(this.testAry.length)
  }
  ngOnInit() {
/*     this.obs.subscribe(
      (result) => {
        console.log(this.testAry[result])
      }
    ); */
  }
}
