export type UsePriceTextViewModelProps = {
  value: number
  containerClassName?: string
  currencyClassName?: string
  valueClassName?: string
}

export const usePriceTextViewModel = ({
  value,
  containerClassName,
  currencyClassName,
  valueClassName,
}: UsePriceTextViewModelProps) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)

  const formattedPrice = formatPrice(value)

  const parts = formattedPrice.split("\u00A0") // \u00A0 is a non-breaking space -> need to remove the space because of an error of the javascript engine
  const currencySymbol = parts[0]
  const valueText = parts[1]

  return {
    currencySymbol,
    valueText,
    currencyClassName,
    valueClassName,
    containerClassName,
  }
}
