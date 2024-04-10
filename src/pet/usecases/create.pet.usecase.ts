import { IUseCase } from "src/domain/iusecase.interface"
import CreatePetControllerInput from "../dtos/create.pet.dto.input"
import CreatePetUseCaseOutput from "./dtos/create.pet.usecase.output"
import { Inject, Injectable } from "@nestjs/common"
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input"
import PetTokens from "../pet.tokens"
import IPetRepository from "../interfaces/pet.repository.interface"

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetControllerInput, CreatePetUseCaseOutput> {

  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository
  ) { }

  async run(input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
    const pet = await this.petRepository.create(input)

    return new CreatePetUseCaseOutput({
      id: pet._id,
      name: pet.name,
      type: pet.type,
      size: pet.size,
      gender: pet.gender,
      bio: pet.bio,
      photo: pet.photo,
      createdAt: pet.createdAt,
      updatedAt: pet.updatedAt
    })

  }

}