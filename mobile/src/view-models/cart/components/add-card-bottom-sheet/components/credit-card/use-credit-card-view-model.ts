import { useEffect } from "react"
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import creditCardType from "credit-card-type"

import type { FocusedField } from "../../use-add-card-bottom-sheet-view-model"
import type { CreditCardFormData } from "../../credit-card-schema"

export type UseCreditCardViewModelProps = {
  isFlipped: boolean
  focusedField: FocusedField | null
  cardData: CreditCardFormData
}

const CREDIT_CARD_BRAND_ICONS: Record<string, string> = {
  Visa: require("@/shared/assets/icons/visa-icon.svg"),
  Mastercard: require("@/shared/assets/icons/mastercard-icon.svg"),
  Elo: require("@/shared/assets/icons/elo-icon.svg"),
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

  const getCardType = (cardNumber: string) => {
    if (cardNumber.length === 0) {
      return null
    }

    const results = creditCardType(cardNumber)

    if (results.length === 0) {
      return null
    }

    return results[0].niceType // Ex: 'Visa', 'Mastercard', 'Elo', etc.
  }

  useEffect(() => {
    flipValue.value = withTiming(isFlipped ? 1 : 0, {
      duration: 600,
    })
  }, [isFlipped])

  const creditCardBrand = getCardType(cardData.number)
  const cardBrandIcon = creditCardBrand
    ? (CREDIT_CARD_BRAND_ICONS[creditCardBrand] ?? null)
    : null

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
    cardBrandIcon,
  }
}
