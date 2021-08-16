import { AxiosResponse } from "axios";

export default interface Response<T> {
  response: AxiosResponse;
  data: T;
}
