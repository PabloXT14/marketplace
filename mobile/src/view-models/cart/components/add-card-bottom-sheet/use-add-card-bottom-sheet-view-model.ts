import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useCreateCreditCardMutation } from "@/shared/queries/credit-card/use-create-credit-card-mutation"
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"

import { creditCardSchema, type CreditCardFormData } from "./credit-card-schema"

export type FocusedField = "number" | "name" | "expiry" | "cvv"

const formatExpirationDateForApi = (
  expirationDate: string,
  setError: (message: string) => void
) => {
  const [month, year] = expirationDate.split("/").map(Number)

  if (month < 1 || month > 12) {
    setError("Mês inválido")
    throw new Error("Mês inválido")
  }

  if (year < 0 || year > 99) {
    setError("Ano inválido")
    throw new Error("Ano inválido")
  }

  const fullYear = 2000 + year

  const formattedDate = new Date(fullYear, month, 0) // 0 = ultimo dia do mes

  const isoDateString = formattedDate.toISOString().split("T")[0]

  return isoDateString
}

const DEFAULT_VALUES: CreditCardFormData = {
  titularName: "",
  number: "",
  expirationDate: "",
  CVV: "",
}

export const useAddCardBottomSheetViewModel = () => {
  const createCreditCardMutation = useCreateCreditCardMutation()

  const [focusedField, setFocusedField] = useState<FocusedField | null>(null)

  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const {
    control,
    handleSubmit,
    formState: { isLoading },
    setError,
    watch,
  } = useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const { close: closeBottomSheet } = useBottomSheetStore()

  const handleCreateCreditCard = handleSubmit(
    async ({ number, expirationDate, CVV }: CreditCardFormData) => {
      const formattedExpirationDate = formatExpirationDateForApi(
        expirationDate,
        (message) => setError("expirationDate", { message })
      )
      const formattedNumber = number.replace(/\s/g, "")

      await createCreditCardMutation.mutateAsync({
        number: formattedNumber,
        expirationDate: formattedExpirationDate,
        CVV: Number(CVV),
      })

      closeBottomSheet()
    }
  )

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

  const handleFieldFocus = (field: FocusedField) => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current)
    }

    setFocusedField(field)
  }

  const handleFieldBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setFocusedField(null)
    }, 100)
  }

  const isFlipped = focusedField === "cvv"

  const watchedValues = watch()

  return {
    control,
    expirationDateMask,
    cardNumberMask,
    isLoading,
    isFlipped,
    focusedField,
    cardData: {
      titularName: watchedValues.titularName,
      number: watchedValues.number,
      expirationDate: watchedValues.expirationDate,
      CVV: watchedValues.CVV,
    },
    handleCreateCreditCard,
    handleFieldFocus,
    handleFieldBlur,
  }
}
