import React from 'react'
import { ErrorMessage, Field } from 'formik'

type FormFieldProps = {
  name: string
  label: string
  type?: string
  placeholder?: string
}
const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder = ''
}) => {
  return (
    <div className="col">
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="field-error"
      />
    </div>
  )
}

export default FormField