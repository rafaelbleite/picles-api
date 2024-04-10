export default class GetPetByIdUseCaseInput {
  id: string;

  constructor(data: GetPetByIdUseCaseInput) {
    Object.assign(this, data)
  }
}