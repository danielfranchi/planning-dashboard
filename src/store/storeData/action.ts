/* eslint-disable @typescript-eslint/no-explicit-any */
import { action } from 'typesafe-actions'
import { TypesData, ArrayData } from './types'

export const get = (payload: ArrayData) => action(TypesData.GET_DATA, payload)
export const add = (payload: ArrayData) => action(TypesData.ADD_DATA, payload)
export const deleteData = (payload: any) => action(TypesData.DELETE_DATA, payload)
export const editData = (payload: ArrayData) => action(TypesData.EDIT_DATA, payload)