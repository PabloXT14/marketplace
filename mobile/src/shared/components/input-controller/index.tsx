import {
  type Control,
  Controller,
  type FieldErrors,
  type FieldValues,
  type Path,
} from "react-hook-form"
import { Input, type InputProps } from "../input"

type InputControllerProps<T extends FieldValues> = Omit<
  InputProps,
  "value" | "onChangeText" | "errorMessage"
> & {
  control: Control<T>
  name: Path<T>
  errors?: FieldErrors<T>
}

export const InputController = <T extends FieldValues>({
  control,
  name,
  errors,
  ...rest
}: InputControllerProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({
      field: { value, onChange, onBlur },
      fieldState: { error },
      formState: { isSubmitting },
    }) => (
      <Input
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        errorMessage={error?.message}
        isDisabled={isSubmitting || rest.isDisabled}
        {...rest}
      />
    )}
  />
)
