import { Injectable } from "@nestjs/common";
import IPetRepository from "./interfaces/pet.repository.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pet } from "./schemas/pet.schema";

@Injectable()
export default class PetRepository implements IPetRepository {
  constructor(
    @InjectModel(Pet.name)
    private readonly PetModel: Model<Pet>
  ) { }

  async getById(id: string): Promise<Pet> {
    return await this.PetModel.findById(id)
  }

  async create(data: Partial<Pet>): Promise<Pet> {
    return await this.PetModel.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}