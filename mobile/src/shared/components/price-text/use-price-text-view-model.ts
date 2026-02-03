export type UsePriceTextViewModelProps = {
  currencyClassName?: string
  valueClassName?: string
  value: number
}

export const usePriceTextViewModel = ({
  value,
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

  return { currencySymbol, valueText, currencyClassName, valueClassName }
}
