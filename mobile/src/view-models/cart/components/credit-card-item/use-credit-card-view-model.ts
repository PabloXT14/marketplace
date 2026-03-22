import dayjs from "dayjs"

import { useDeleteCreditCardMutation } from "@/shared/queries/credit-card/use-delete-credit-card-mutation"
import { useModal } from "@/shared/hooks/use-modal"

import type { CreditCard } from "@/shared/interfaces/credit-card"
import { useModalStore } from "@/shared/store/modal-store"

export type UseCreditCardItemViewModelProps = {
  creditCard: CreditCard
  isSelected: boolean
  setSelectedCreditCard: (creditCard: CreditCard) => void
}

export const useCreditCardViewModel = ({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}: UseCreditCardItemViewModelProps) => {
  const deleteCreditCardMutation = useDeleteCreditCardMutation()

  const { showSelection } = useModal()
  const { close: closeModal } = useModalStore()

  const { number, expirationDate } = creditCard

  const formattedExpirationDate = dayjs(new Date(expirationDate)).format(
    "MM/YYYY"
  )

  const formattedCardNumber = number.slice(-4)

  const handleDeleteCreditCard = () => {
    showSelection({
      title: "Excluir cartão",
      message: "Tem certeza que deseja excluir este cartão?",
      options: [
        {
          text: "Excluir",
          onPress: async () => {
            await deleteCreditCardMutation.mutateAsync({
              creditCardId: creditCard.id,
            })

            closeModal()
          },
          variant: "danger",
        },
        {
          text: "Cancelar",
          onPress: () => closeModal(),
        },
      ],
    })
  }

  return {
    formattedExpirationDate,
    formattedCardNumber,
    creditCard,
    isSelected,
    setSelectedCreditCard,
    handleDeleteCreditCard,
  }
}
