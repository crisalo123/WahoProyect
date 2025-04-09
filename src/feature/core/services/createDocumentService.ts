import {  wahooApi } from '@/feature/core/api/wahoo'



export const getList = async <T>(params: T, url: string): Promise<any> =>{
    return await wahooApi.get(url, { params })
} 



export const postList = async <T>(params: T, url: string): Promise<any> =>{
    return await wahooApi.post(url, params)
}