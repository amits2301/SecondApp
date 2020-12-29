import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amit-parent',
  templateUrl: './amit-parent.component.html',
  styleUrls: ['./amit-parent.component.css']
})
export class AmitParentComponent implements OnInit {

  valueFromChild: any
  flagValue= false

  parentProperty = 'I am data from parent';
  parentProperty2 = 'I 2nd  data from parent';
  
  constructor() { }

  ngOnInit(): void {


  }
  handleDataFromChild(data:any){
        console.log(data); 
        this.valueFromChild=data;
 
   }
   checkTestFlag(){
     if(this.flagValue===true){
       this.flagValue= false;
     }
     else{
       this.flagValue= true;

     }

   }
 


}
