import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url: string = "http://www.mocky.io/v2/5c83a9a1300000ed186b0cc0";
  url1: string = " http://www.mocky.io/v2/5c83ae4230000008196b0ccc";
  url2: string = "http://www.mocky.io/v2/5c83ac9a30000008196b0cc8";
  url3: string = "http://www.mocky.io/v2/5c83aaf6300000ca0b6b0cc3";
  url4: string = "http://www.mocky.io/v2/5c83ad7b3000003e0c6b0cca";
  url5: string = "http://www.mocky.io/v2/5c83ae8e300000c21a6b0ccd";
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  test: string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  response: any;
  response1: any;
  response2: any;
  response3: any;
  response4: any;
  response5: any;

html5Course() {
  this.http.get(this.url).subscribe( e => this.response = JSON.stringify(e));
  this.test = "OK from HTML5";
}
javaCourse() {
  this.http.get(this.url1).subscribe( e => this.response1 = JSON.stringify(e));
  this.test1 = "OK from JAVA";
}
phpCourse() {
  this.http.get(this.url2).subscribe( e => this.response2 = JSON.stringify(e));
  this.test2 = "OK from PHP";
}
jsCourse() {
  this.http.get(this.url3).subscribe( e => this.response3 = JSON.stringify(e));
  this.test3 = "OK FROM JS";
  return false;
}
cssCourse() {
  this.http.get(this.url4).subscribe( e => this.response4 = JSON.stringify(e));
  this.test4 = "OK from CSS";
}
pythonCourse() {
  this.http.get(this.url5).subscribe( e => this.response5 = JSON.stringify(e));
  this.test5 = "OK from PYTHON";
}
}
