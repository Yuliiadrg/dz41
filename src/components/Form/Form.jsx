import './Form.scss';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';


const Form = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <Formik
            initialValues={{ name: '', telephone: '', email: '', message: '', acceptedTerms: false, }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(4, 'The name must contain at least 4 characters')
                    .required('This field is mandatory'),
                telephone: Yup.string().matches(phoneRegExp, 'Check the phone number')
                    .required('This field is mandatory'),
                email: Yup.string().email('Invalid email address').required('This field is mandatory'),
                message: Yup.string()
                    .min(10, 'The message must be at least 10 characters long')
                    .required('We are waiting for your message'),
                acceptedTerms: Yup.boolean()

            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(`Thank you! Your request has been sent successfully`);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <div className='first-row'>
                        <label htmlFor="name">
                            Name and Surname
                            <input
                                className="name, input"
                                id="name"
                                type="text"
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="error">{formik.errors.name}</div>
                            ) : null}
                        </label>
                        <label htmlFor="email">
                            Email
                            <input className="email, input" id="email" type="email" {...formik.getFieldProps('email')} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                        </label>
                    </div>


                    <label htmlFor="telephone">
                        Tel in the format (+380)
                        <input
                            className="telephone, input"
                            id="telephone"
                            type="tel"
                            {...formik.getFieldProps('telephone')}
                        />
                        {formik.touched.telephone && formik.errors.telephone ? (
                            <div className="error">{formik.errors.telephone}</div>
                        ) : null}
                    </label>


                    <label htmlFor='message'>
                        Message
                        <input
                            id="message"
                            className="input"
                            type="text"
                            {...formik.getFieldProps('message')}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <div className="error">{formik.errors.message}</div>
                        ) : null}
                    </label>

                    <label className="container" htmlFor="acceptedTerms">

                        <input className="acceptedTerms" id="acceptedTerms" type="checkbox" {...formik.getFieldProps('acceptedTerms')} />
                        {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                            <div>{formik.errors.acceptedTerms}</div>
                        ) : null}
                        <span className="checkmark"></span>
                        Send me academy's updates
                    </label>

                    <button className="button" type="submit">Sent</button>
                </form>
            )}
        </Formik>
    );
};
export default Form;