import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})
export class leftnavbarComponent  {
  activeGroup: string | null = null;  

  disconnect() {
    console.log("aa");
  }
  setActiveGroup(group: string) {
    this.activeGroup = group === this.activeGroup ? null : group;  
  }

  isGroupActive(group: string): boolean {
    return this.activeGroup === group;
  } 
}
