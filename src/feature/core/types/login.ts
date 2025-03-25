export interface LoginUser {
  fullName: string
  role: string
  roleid: string
  userId: string
  userName: string
  email: string
  ext: string
}
export interface LoginResponse {
  accessToken: string
  refreshToken: string
  user: LoginUser
}
