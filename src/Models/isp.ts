import { IspModel } from "./ispModel";

// Defins the ISP class
export class ISP {
  constructor(
    public id: string,
    public name: string,
    public lowest_Price: number,
    public rating: number,
    public max_Speed: string,
    public description: string,
    public contact_No: string,
    public email: string,
    public image: string,
    public url: string,
    public lastUpdated: string
  ) {}

  // Convert ISP to IspModel
  toModel(): IspModel {
    return new IspModel(
      this.id,
      this.name,
      this.lowest_Price,
      this.email,
      this.rating,
      this.image,
      this.url
    );
  }

  // Static method to convert a list of ISP to a list of ISPModel
  static toModelList(isps: ISP[]): IspModel[] {
    return isps.map((isp: ISP) => isp.toModel());
  }
}
