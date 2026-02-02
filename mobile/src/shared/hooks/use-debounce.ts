import { useEffect, useState } from "react"

type UseDebounceProps<T> = {
  value: T
  delay?: number
}

export const useDebounce = <T>({ value, delay = 500 }: UseDebounceProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue
}
