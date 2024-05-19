import axios from "axios";
import { useDispatch } from "react-redux";
import { updateIsps } from "@/store/ispSlice";
import { IspModel } from "@/Models/ispModel";
import appConfig from "@/config/appConfig";

class IspService {
  apiUrl = appConfig.BaseUrl + "/isp";
  dispatch = useDispatch();

  // get all isp details
  async getAllIsp(): Promise<IspModel[]> {
    try {
      const result = await axios.get(this.apiUrl);
      this.dispatch(updateIsps(result.data));
      return result.data.map();
    } catch (error) {
      console.error(`IspService :: getAllIsp :: Error: ${error}`);
      throw new Error("Failed to fatch isp data!");
    }
  }
}

const ispService = new IspService();

export default ispService;
