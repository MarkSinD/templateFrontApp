import {SxProps, TextField, Theme} from '@mui/material'
import {memo} from 'react';
import {Controller, useFormContext} from "react-hook-form";

interface Props {
  name: string,
  label: string,
  dataTestId: string,
  placeholder?: string,
  htmlType?: string,
  sx?: SxProps<Theme>
}

export const FormTextField = memo(({
  name,
  label,
  dataTestId,
  placeholder,
  htmlType = "text",
  sx
}: Props) => {
  const {control} = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: field,
        fieldState: {error, invalid},
      }) => {
        return (
          <TextField
            {...field}
            label={label}
            placeholder={placeholder}
            InputProps={{type: htmlType}}
            error={invalid}
            helperText={error?.message}
            sx={{maxWidth: "360px", ...sx}}
            data-testid={`${dataTestId}-TextField`}
          />
        )
      }}
    />
  )
})

FormTextField.displayName = 'FormTextField'
