import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useCreateCreditCardMutation } from "@/shared/queries/credit-card/use-create-credit-card-mutation"

import { creditCardSchema, type CreditCardFormData } from "./credit-card-schema"

const DEFAULT_VALUES: CreditCardFormData = {
  titularName: "",
  number: "",
  expirationDate: "",
  CVV: "",
}

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation()

  const { control } = useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const handleCreateCreditCard = async () => {
    await createCreditCardMutation.mutateAsync({
      number: "1234 1234 1234 1234",
      expirationDate: "01/01/2023",
      CVV: 123,
    })
  }

  return {
    handleCreateCreditCard,
    control,
  }
}
