import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('*The name is required.*'),
      email: Yup.string().email('*It must be a valid email.').required('*The email is required*'),
      message: Yup.string().required('*The message is required*')
    }),
    onSubmit: (values, { resetForm }) => {
      // Envía los datos a FormSubmit
      fetch('https://formsubmit.co/brlopezf@unal.edu.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message
        })
      })
        .then((response) => {
          if (response.ok) {
            alert('Formulario enviado con éxito');
            resetForm();  // Reiniciar el formulario después de enviarlo
          } else {
            alert('Error al enviar el formulario');
          }
        })
        .catch(() => alert('Hubo un error, intenta de nuevo más tarde'));
    },
  });

  return (
    <div className="container-form">
     
     <div className='container-contactme'>

      <form onSubmit={formik.handleSubmit}>
<div className='container-label-text'>
        <label className="label-text" htmlFor="name">Name:</label>
</div>
        <div className="container-input">
          <input
            id="name"
            name="name"
            type="text"
            className="input-contact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <small  className="error-message">{formik.errors.name}</small>
          ) : null}
        </div>

        <div className='container-label-text'>

        <label className="label-text" htmlFor="email">Email:</label>
        </div>
        <div className="container-input">
          <input
            id="email"
            name="email"
            type="email"
            className="input-contact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <small  className="error-message">{formik.errors.email}</small>
          ) : null}
        </div>

<div className='container-label-text'>
<label className="label-text" htmlFor="message">Message:</label>
</div>
        <div className="container-input">
          <textarea
            id="message"
            name="message"
            className="input-contact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <small  className="error-message">{formik.errors.message}</small>
          ) : null}
        </div>

        <div className="container-btn">
          <button className="btn-contact" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
            Send
          </button>
        </div>
      </form>
     </div>

    </div>
  );
};

export default Contact;
