import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component(
  {
  selector: 'app-amit-child',
  templateUrl: './amit-child.component.html',
  styleUrls: ['./amit-child.component.css']
  }
 )
export class AmitChildComponent implements OnInit {
  @Input() childProperty1: any;
  @Input() childProperty2: any;
 
  @Output() messageEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.childProperty1);
    console.log(this.childProperty2);

  }
  sendDataFromChildToParent() {

    this.messageEvent.emit('This is data from child'); 
  }

} 
