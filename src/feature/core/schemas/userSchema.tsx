
import { z } from 'zod'

export const UserSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  roleId: z.string(),
  role: z.string(),
  id: z.string(),
  userName: z.string(),
  normalizedUserName: z.string(),
  email: z.string(),
  normalizedEmail: z.string(),
  emailConfirmed: z.string(),
  passwordHash: z.string(),
  securityStamp: z.string(),
  concurrencyStamp: z.string(),
  phoneNumber: z.string(),
  phoneNumberConfirmed: z.boolean(),
  twoFactorEnabled: z.boolean(),
  isActive: z.boolean(),
  lockoutEnd: z.string(z.coerce.date()),
  lockoutEnabled: z.boolean(),
  accessFailedCount: z.number()
})

export const AuthUserSchema = z.object({
  userId: z.string(),
  firstName: z.string().optional(),
  lastName: z.string(),
  roleId: z.string(),
  roleName: z.string(),
  token: z.string(),
})

export const ApiListUsersCreateSchema = z.object({
  identificationNumber: z.string(),
  identificationTypeId: z.number(),
  fullName: z.string(),
  email: z.string(),
  address: z.string(),
  farmName: z.string().optional(),
  phoneNumber: z.string().optional(),
  legalNatureId: z.number().nullable(),
  statusId: z.number(),
  statusName: z.string(),
  meanAnswerId: z.number().nullable(),
  comercialActivityId: z.number().nullable(),
  customerInterestId: z.number().nullable()
})

export const createPaginationResponse = z.object({
  count: z.number(),
  pageIndex: z.number(),
  pageSize: z.number(),
  pageCount: z.number(),
  data: z.any()
}) 
 



export const ListOfApiUsersCreateTypeSchema = z.array(createPaginationResponse) 


export const  userDetailResponsive = z.object({
  count: z.number(),
  pageIndex: z.number(),
  pageSize: z.number(),
  pageCount: z.number(),
  data: z.any()
}) 


export const UserOfApiUsersDetailTypeSchema = z.array(userDetailResponsive)
