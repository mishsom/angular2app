import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  showPara = true;
  clickLogs = [];
  initialClick = 0;
  ngOnInit() {
  }
  onClickTogglePara = function (event) {
      this.showPara = this.showPara ? false : true;
      this.clickLogs.push(this.initialClick++);
  };
}
