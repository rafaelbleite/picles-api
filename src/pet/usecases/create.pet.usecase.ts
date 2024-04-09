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
    await this.petRepository.create(input)

    return new CreatePetUseCaseOutput({
      name: "Charlie",
      type: "Dog",
      size: "Large",
      gender: "Male",
      bio: "Conheça o encantador Charlie, um cachorro de porte grande cheio de amor e devoção, pronto para se tornar o seu fiel companheiro. Com seu pelo exuberante e seus olhos cheios de bondade, Charlie é um amigo leal em busca de um lar amoroso e atencioso. Seu temperamento gentil e brincalhão o torna perfeito para famílias ativas e cheias de afeto. Charlie está saudável, vacinado e castrado, pronto para fazer parte da sua vida. Ao adotar Charlie, você não apenas ganha um amigo fiel, mas também ajuda a promover a causa da adoção responsável de animais. Dê a Charlie a chance de encher sua vida com amor e alegria - adote-o hoje e descubra a beleza da amizade canina."
    })
  }

}