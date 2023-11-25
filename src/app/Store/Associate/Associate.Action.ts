import { createAction, props } from "@ngrx/store";
import { Associates } from "../Model/Associate.model";

export const LOAD_ASSOCIATE = '[associate page] load associate'
export const LOAD_ASSOCIATE_SUCCESS = '[associate page] load associate success'
const LOAD_ASSOCIATE_FAIL = '[associate page] load associate fail'





export const loadassociate = createAction(LOAD_ASSOCIATE)
export const loadassociatesuccess = createAction(LOAD_ASSOCIATE_SUCCESS,props<{list:Associates[]}>())
export const loadassociatefail = createAction(LOAD_ASSOCIATE_FAIL,props<{errormessage:string}>())