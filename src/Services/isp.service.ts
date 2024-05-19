import axios from "axios";
import appConfig from "@/config/appConfig";
import { ISP } from "@/Models/isp";

class IspService {
  apiUrl = appConfig.BaseUrl + "/isp";

  // get all isp details
  async getAllIsp(): Promise<ISP[]> {
    try {
      const result = await axios.get(this.apiUrl);
      return result.data.map(
        (isp: ISP) =>
          new ISP(
            isp.id,
            isp.name,
            isp.lowest_Price,
            isp.rating,
            isp.max_Speed,
            isp.description,
            isp.contact_No,
            isp.email,
            isp.image,
            isp.url,
            isp.lastUpdated
          )
      );
    } catch (error) {
      console.error(`IspService :: getAllIsp :: Error: ${error}`);
      throw new Error("Failed to fatch isp data!");
    }
  }

  // get isp details
  async getIspDetails(id: string): Promise<ISP> {
    try {
      const result = await axios.get(`${this.apiUrl}/${id}`);
      return result.data;
    } catch (error) {
      console.error(`IspService :: getIspDetails :: Error: ${error}`);
      throw new Error("Failed to fatch isp data!");
    }
  }
}

const ispService = new IspService();

export default ispService;
