export type TypeForObject = {id: string, name: string}
export type TypeInputDefault = { id: string, placeholder: string, label: string, type: string, req: any, validationSettings:any}
export interface ISelectDefault  { id: string, name: string, titleDefault: string, req: boolean, data: Array<TypeForObject>}
export interface ISelectForDataString  { id: string, name: string, titleDefault: string, req: boolean, validationSettings: any, data: Array<string>}
