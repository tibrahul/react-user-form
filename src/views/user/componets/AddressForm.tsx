import React from 'react'
import { FieldArray } from 'formik'
import FormField from './FormField'

const emptyAddress = {
  streetAddress: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
}

const AddressForm: React.FC<{
  values: any
}> = ({
  values
}) => {
    return (
      <>
        <h2>Address</h2>
        <FieldArray name="address">
          {({ insert, remove, push }) => (
            <div>
              {values.address.length > 0 &&
                values.address.map((_address: any, index: number) => (
                  <div className='row' key={index}>
                    <FormField
                      name={`address.${index}.streetAddress`}
                      label='Street Address'
                    />
                    <FormField
                      name={`address.${index}.city`}
                      label='City'
                    />
                    <FormField
                      name={`address.${index}.state`}
                      label='State'
                    />
                    <FormField
                      name={`address.${index}.postalCode`}
                      label='Postal Code'
                    />
                    <FormField
                      name={`address.${index}.country`}
                      label='Country' />

                    {values.address.length > 1 && <div className="col justify-center">
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => remove(index)}
                      >
                        X
                      </button>
                    </div>}
                  </div>
                ))}
              <button
                type="button"
                className="secondary"
                onClick={() => push(emptyAddress)}
              >
                Add More Address
              </button>
            </div>
          )}
        </FieldArray>
      </>
    )
  }

export default AddressForm