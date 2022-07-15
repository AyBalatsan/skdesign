export type TypeForObject = {id: string, name: string}
export type TypeInputDefault = { id: string, placeholder: string, label: string, type: string, req: boolean}
export interface ISelectDefault  { id: string, name: string, titleDefault: string, req: boolean, data: Array<TypeForObject> | Array<string>}
