import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCreditCardUseCase } from "../../../../domain/user/use-cases/create-credit-card";
import {
  FindCreditCardByIdUseCase,
  FindCreditCardsByUserIdUseCase,
} from "../../../../domain/user/use-cases/find-credit-card";
import { UserTypeormRepository } from "../../../database/typeorm/market-place/repositories/user.repository";
import { DeleteCreditCardUseCase } from "../../../../domain/user/use-cases/delete-credit-card";

interface CreateCreditCardRequest {
  Body: {
    userId: number;
    titularName: string;
    number: string;
    CVV: number;
    value: number;
    expirationDate: string;
  };
}

export class CreditCardController {
  private createCreditCardUseCase: CreateCreditCardUseCase;
  private findCreditCardsByUserIdUseCase: FindCreditCardsByUserIdUseCase;
  private deleteCreditCardUseCase: DeleteCreditCardUseCase;

  constructor() {
    const userRepository = new UserTypeormRepository();
    this.createCreditCardUseCase = new CreateCreditCardUseCase(userRepository);
    this.findCreditCardsByUserIdUseCase = new FindCreditCardsByUserIdUseCase(
      userRepository
    );
    this.deleteCreditCardUseCase = new DeleteCreditCardUseCase(userRepository);
  }

  createCreditCard = async (
    request: FastifyRequest<CreateCreditCardRequest>,
    reply: FastifyReply
  ): Promise<void> => {
    const titularName = request.user.name;
    const { number, CVV, value, expirationDate } = request.body;
    const userId = request.user.id;
    const parsedExpirationDate = new Date(expirationDate);

    await this.createCreditCardUseCase.execute({
      userId,
      titularName,
      number,
      CVV,
      value,
      expirationDate: parsedExpirationDate,
    });

    reply.status(201).send({
      message: "Cartão de crédito criado com sucesso",
    });
  };

  getUserCreditCards = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    const userId = Number(request.user.id);

    const creditCards = await this.findCreditCardsByUserIdUseCase.execute(
      userId
    );
    reply.status(200).send(creditCards);
  };

  deleteCreditCard = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    const creditCardId = Number(request.params.id);
    const userId = Number(request.user.id);

    await this.deleteCreditCardUseCase.execute(creditCardId, userId);

    reply.status(204).send();
  }
}
