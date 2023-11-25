import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule}from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import {MatRadioModule} from "@angular/material/radio"

@NgModule({
    exports:[

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatRadioModule
    ]
})

export class MaterialModule{

}

