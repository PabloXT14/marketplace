import { useEffect } from "react"
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import type { FocusedField } from "../../use-add-card-bottom-sheet-view-model"
import type { CreditCardFormData } from "../../credit-card-schema"

export type UseCreditCardViewModelProps = {
  isFlipped: boolean
  focusedField: FocusedField | null
  cardData: CreditCardFormData
}

export const useCreditCardViewModel = ({
  isFlipped,
  focusedField,
  cardData,
}: UseCreditCardViewModelProps) => {
  const flipValue = useSharedValue(0)

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipValue.value, [0, 1], [0, 180])

    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    }
  })

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipValue.value, [0, 1], [180, 360])

    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    }
  })

  const formatCardNumber = (value: string) => {
    const cardNumberCleaned = value.replace(/\D/g, "") // remove espaços e letras/caracteres especiais

    const cardNumberWithDots = cardNumberCleaned.padEnd(16, "•") // adiciona um ponto nos últimos 16 dígitos

    const cardNumberFormatted = cardNumberWithDots
      .replace(/(.{4})/g, "$1 ") // adiciona espaco a cada 4 digitos
      .trim()

    return cardNumberFormatted
  }

  const formatExpirationDate = (value: string) => {
    // remove tudo que não for número
    const numbers = value.replace(/\D/g, "").slice(0, 4)

    // separa mês e ano
    const month = numbers.slice(0, 2)
    const year = numbers.slice(2, 4)

    // aplica máscara com placeholder
    const maskedMonth = `${month}••`.slice(0, 2)
    const maskedYear = `${year}••`.slice(0, 2)

    return `${maskedMonth}/${maskedYear}`
  }

  const formatCVV = (value: string) => {
    // remove tudo que não for número
    const numbers = value.replace(/\D/g, "").slice(0, 3)

    // aplica máscara com placeholder
    const maskedCVV = `${numbers}•••`.slice(0, 3)

    return maskedCVV
  }

  useEffect(() => {
    flipValue.value = withTiming(isFlipped ? 1 : 0, {
      duration: 600,
    })
  }, [isFlipped])

  return {
    isFlipped,
    focusedField,
    cardData: {
      ...cardData,
      number: formatCardNumber(cardData.number),
      expirationDate: formatExpirationDate(cardData.expirationDate),
      CVV: formatCVV(cardData.CVV),
    },
    frontAnimatedStyle,
    backAnimatedStyle,
    formatCardNumber,
    formatExpirationDate,
  }
}
