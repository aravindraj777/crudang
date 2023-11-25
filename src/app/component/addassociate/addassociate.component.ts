import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../Material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-addassociate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MaterialModule],
  templateUrl: './addassociate.component.html',
  styleUrl: './addassociate.component.css'
})
export class AddassociateComponent implements OnInit {

  title='Create Associate';
  isEdit=false;
  dialogData:any;

  constructor(private builder: FormBuilder,private ref:MatDialogRef<AddassociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    
    ) { }
  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.dialogData.title;

  }

  closePopUp(){
    this.ref.close()
  }

  associateForm = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    type: this.builder.control('CUSTOMER'),
    group: this.builder.control('level1'),
    status: this.builder.control(true)

  })

  saveAssociate(){
    if(this.associateForm.valid){

    }
  }

}
