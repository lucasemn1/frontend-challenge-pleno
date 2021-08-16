import axios, { AxiosInstance } from "axios";
import Media from "../interfaces/media";

import Response from "../interfaces/response";

export default abstract class BaseService {
  public connection: AxiosInstance;
  public endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;

    this.connection = axios.create({
      baseURL: "http://localhost:3001/",
    });
  }

  async getAll(): Promise<Response<Media[]>> {
    try {
      const response = await this.connection.get<Media[]>(this.endpoint);
      console.log(response);

      return {
        response: response,
        data: response.data,
      };
    } catch (error) {
      return {
        response: error.response,
        data: null,
      };
    }
  }
}
