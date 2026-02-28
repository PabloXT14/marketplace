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

  const expirationDateMask = (value: string) => {
    const dateCleaned = value.replace(/\D/g, "") // remove espacos e letras/caracteres especiais

    if (dateCleaned.length < 2) {
      return dateCleaned
    }

    const month = dateCleaned.slice(0, 2)
    const year = dateCleaned.slice(2)

    if (year.length > 0) {
      return `${month}/${year}`
    }

    return month
  }

  const cardNumberMask = (value: string) => {
    const cardNumberCleaned = value.replace(/\D/g, "") // remove espacos e letras/caracteres especiais

    const cardNumberFormatted = cardNumberCleaned
      .replace(/(\d{4})(?=\d)/g, "$1 ") // adiciona espaco a cada 4 digitos
      .trim()

    return cardNumberFormatted
  }

  return {
    control,
    expirationDateMask,
    cardNumberMask,
    handleCreateCreditCard,
  }
}
