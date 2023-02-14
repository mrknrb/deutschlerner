import { FieldTypes } from "../enums/fieldTypes"
import { fieldBasic } from "../types/fieldBasic"
import {WordFields} from "../enums/WordFields";

export const WordFieldsStatic: fieldBasic[] = [
    {name:WordFields.szint,type:FieldTypes.string},
    {name:WordFields.szo,type:FieldTypes.string},
    {name:WordFields.jelentes,type:FieldTypes.list}
    ,
    {name:WordFields.angol,type:FieldTypes.list}
    ,
    {name:WordFields.szinonima,type:FieldTypes.list}
,{name:WordFields.nevelo,type:FieldTypes.string}
,{name:WordFields.szofaj,type:FieldTypes.string},
    {name:WordFields.igekoto,type:FieldTypes.string},
    {name:WordFields.id,type:FieldTypes.string},

    {name:WordFields.szoto,type:FieldTypes.string}
    ,{name:WordFields.prateritum,type:FieldTypes.string}
    ,{name:WordFields.perfect,type:FieldTypes.string},
    {name:WordFields.felteteles,type:FieldTypes.string},




]