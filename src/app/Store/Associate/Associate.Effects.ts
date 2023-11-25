import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "../../service/associate.service";
import { loadassociate, loadassociatefail, loadassociatesuccess } from "./Associate.Action";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class AssociateEffects{

    constructor(private action$:Actions,private service:AssociateService ){}

    _loadassociate = createEffect(()=>
        this.action$.pipe(
            ofType(loadassociate),
            exhaustMap((action)=>{
                return this.service.getAll().pipe(
                    map((data)=>{
                        return loadassociatesuccess
                    }),
                    catchError((_error)=>of(loadassociatefail({errormessage:_error.message})))
                )
            })
        )
    )
}