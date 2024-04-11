export default class DeletePetByIdUseCaseInput {
  id: string;

  constructor(data: DeletePetByIdUseCaseInput) {
    Object.assign(this, data);
  }
}
