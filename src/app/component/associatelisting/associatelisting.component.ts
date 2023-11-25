import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../Material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';

@Component({
  selector: 'app-associatelisting',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './associatelisting.component.html',
  styleUrl: './associatelisting.component.css'
})
export class AssociatelistingComponent implements OnInit {
  
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
    
  }

  functionAdd(){
    this.openPopUp(0,'Create Assosciate ')
  }

  openPopUp(code:number,title:string){
    this.dialog.open(AddassociateComponent,{
      width:'50%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        code:code,
        title:title
      }
    })
  }
}
