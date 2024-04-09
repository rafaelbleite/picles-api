import { Injectable } from "@nestjs/common";
import IPetRepository from "./interfaces/pet.repository.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pet } from "./schemas/pet.schema";

@Injectable()
export class PetRepository implements IPetRepository {
  constructor(
    @InjectModel(Pet.name)
    private readonly PetModel: Model<Pet>
  ) { }

  async create(data: Partial<Pet>): Promise<void> {
    await this.PetModel.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}