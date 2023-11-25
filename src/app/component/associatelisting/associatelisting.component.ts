import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../Material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { Associates } from '../../Store/Model/Associate.model';
import { getassociatelist } from '../../Store/Associate/Associate.Selector';

@Component({
  selector: 'app-associatelisting',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './associatelisting.component.html',
  styleUrl: './associatelisting.component.css'
})
export class AssociatelistingComponent implements OnInit {
  

  AssociateList!:Associates[];
  constructor(private dialog:MatDialog,private store:Store){}
  ngOnInit(): void {
    this.store.select(getassociatelist).subscribe(item =>{
      this.AssociateList = item
    })
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
