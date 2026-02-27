import { useCreateCreditCardMutation } from "@/shared/queries/credit-card/use-create-credit-card-mutation"

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation()

  const handleCreateCreditCard = async () => {
    await createCreditCardMutation.mutateAsync({
      number: "1234 1234 1234 1234",
      expirationDate: "01/01/2023",
      CVV: 123,
    })
  }

  return {
    handleCreateCreditCard,
  }
}
