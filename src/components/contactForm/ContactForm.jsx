import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

import {
  Error,
  StyledForm,
  FormBtn,
  StyledGroup,
  Input,
} from './ContactForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Name is required'),

  number: Yup.string()
    .phone('UA', 'Please enter a valid phone number like (067 356 44 54) ')

    .required('A phone number is required'),
});

export const ContactForm = ({ submit }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={FormSchema}
    onSubmit={(values, action) => {
      submit(values);
      action.resetForm();
    }}
  >
    <StyledForm>
      <StyledGroup>
        Name
        <Input name="name" type="text" />
        <Error name="name" component="span" />
      </StyledGroup>

      <StyledGroup>
        Number
        <Input
          name="number"
          type="text"
          placeholder="067 356 44 54"
          maxLength="13"
        />
        <Error name="number" component="span" />
      </StyledGroup>

      <FormBtn type="submit">add contact</FormBtn>
    </StyledForm>
  </Formik>
);
