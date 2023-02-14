import { FieldTypes } from "../enums/fieldTypes"

export interface fieldBasic{
    name: string
    type:FieldTypes
    size?:number
}