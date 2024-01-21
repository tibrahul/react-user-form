import * as Yup from 'yup'
import BasicInformationForm from './componets/BasicInformationForm'
import { Formik, Form } from 'formik';
import AddressForm from './componets/AddressForm';
import { TUser } from '../../@types/user';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slicers/userSlicer';
import { AppDispatch } from '../../redux/store';
import NavBar from '../../components/NavBar';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const UserSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().length(10, 'Phone number must be 10 digit').matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  dob: Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required('Required'),
  gender: Yup.string().required('Required'),
  address: Yup.array().of(Yup.object().shape({
    streetAddress: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    postalCode: Yup.string().required('Required'),
    country: Yup.string().required('Required')
  }))
});

const initialValues: TUser = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  dob: '',
  gender: '',
  address: [
    {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
  ],
}

const User = () => {
  const dispatch: AppDispatch = useDispatch();

  const onSubmitForm = (value: TUser, resetForm: () => void) => {
    dispatch(setUser(value))
    resetForm();
  };

  return (
    <>
      <NavBar />
      <div className='user-form'>
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmitForm(values, resetForm)
          }}
        >
          {({ values }) => (
            <Form>
              <BasicInformationForm />
              <AddressForm values={values} />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default User