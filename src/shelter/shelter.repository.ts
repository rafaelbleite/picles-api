import { InjectModel } from "@nestjs/mongoose";
import { Shelter } from "./schemas/shelter.schema";
import { Model } from "mongoose";
import IShelterRepository from "./interfaces/shelter.repository.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ShelterRepository implements IShelterRepository {
  constructor(
    @InjectModel(Shelter.name)
    private readonly ShelterModel: Model<Shelter>
  ) { }

  async get(): Promise<Shelter> {
    return await this.ShelterModel.findOne()
  }

  async update(data: Partial<Shelter>): Promise<void> {
    await this.ShelterModel.updateOne(null, {
      ...data,
      updatedAt: new Date()
    })
  }
}