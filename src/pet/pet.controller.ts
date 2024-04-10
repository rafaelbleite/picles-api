import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.dto.input';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input';
import PetTokens from './pet.tokens';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';

@Controller('pet')
export class PetController {

  @Inject(PetTokens.createPetUseCase)
  private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

  @Post()
  async createPet(@Body() input: CreatePetControllerInput) {

    const useCaseInput = new CreatePetUseCaseInput({ ...input })

    return await this.createPetUseCase.run(useCaseInput)

  }

  @Get()
  async getPet(@Param() ) {

  }

  
  

}

