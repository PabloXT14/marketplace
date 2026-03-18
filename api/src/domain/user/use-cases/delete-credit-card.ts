import { NotFoundError } from "../../../shared/errors/not-found.error";
import { UnauthenticatedError } from "../../../shared/errors/unauthenticated.error";

import { UserRepositoryInterface } from "../repositoryInterface/user-repository.interface";

export class DeleteCreditCardUseCase {
  constructor(private userRepository: UserRepositoryInterface) { }

  async execute(id: number, userId?: number): Promise<void> {
    const creditCard = await this.userRepository.findCreditCardById(id);

    if (!creditCard) {
      throw new NotFoundError("Cartão de crédito nao encontrado");
    }

    if (userId && creditCard.userId !== userId) {
      throw new UnauthenticatedError(
        "Acesso negado: cartão nao pertence ao usuário"
      );
    }

    await this.userRepository.deleteCreditCard(creditCard.id);
  }
}