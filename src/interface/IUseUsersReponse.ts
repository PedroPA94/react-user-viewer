/* eslint-disable semi */
import IUser from "./IUser";

export default interface IUseUsersResponse {
  isLoading: boolean
  isError: boolean
  data: IUser[]
}