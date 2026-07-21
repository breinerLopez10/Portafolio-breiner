import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLanguage } from '../../Context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t.contact.errors.name),
      email: Yup.string().email(t.contact.errors.emailInvalid).required(t.contact.errors.emailRequired),
      message: Yup.string().required(t.contact.errors.message)
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
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
            alert(t.contact.success);
            resetForm();
          } else {
            alert(t.contact.error);
          }
        })
        .catch(() => alert(t.contact.error))
        .finally(() => setSubmitting(false));
    },
  });

  return (
    <div className="container-form">

      <div className='container-contactme'>

        <form onSubmit={formik.handleSubmit} noValidate>
          <div className='container-input'>
            <label className="label-text" htmlFor="name">{t.contact.name}</label>
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
              <small className="error-message">{formik.errors.name}</small>
            ) : null}
          </div>

          <div className="container-input">
            <label className="label-text" htmlFor="email">{t.contact.email}</label>
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
              <small className="error-message">{formik.errors.email}</small>
            ) : null}
          </div>

          <div className="container-input">
            <label className="label-text" htmlFor="message">{t.contact.message}</label>
            <textarea
              id="message"
              name="message"
              className="input-contact input-textarea"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <small className="error-message">{formik.errors.message}</small>
            ) : null}
          </div>

          <div className="container-btn">
            <button className="btn-contact" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
              {formik.isSubmitting ? t.contact.sending : t.contact.send}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Contact;
