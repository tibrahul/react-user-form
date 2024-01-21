import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormField from './FormField';
import { TGender } from '../../../@types/gender';

const gender: TGender[] = [{
  label: "Please Select",
  value: ""
}, {
  label: "Male",
  value: "Male"
}, {
  label: "Female",
  value: "Female"
}, {
  label: "Others",
  value: "Others"
}]

const BasicInformationForm = () => {
  return (
    <>
      <FormField
        name='firstName'
        label='First Name'
      />
      <FormField
        name='lastName'
        label='Last Name'
      />
      <FormField
        name='email'
        label='Email'
        type="email"
      />
      <FormField
        name='phoneNumber'
        label='Phone Number'
        type="phone"
      />
      <FormField
        name='dob'
        label='Date of Birth'
        type="date"
      />

      <div className="col">
        <label htmlFor={`gender`}>Gender</label>
        <Field as="select" name="gender" id="gender">
          {React.Children.toArray(gender.map((g: TGender) => <option value={g.value}>{g.label}</option>))}
        </Field>
        <ErrorMessage
          name={`gender`}
          component="div"
          className="field-error"
        />
      </div>
    </>
  )
}

export default BasicInformationForm