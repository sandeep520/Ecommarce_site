// import React from 'react';
// import { Field, reduxForm } from 'redux-form';

// const Login = values => {
//     const errors = {}
//     if (!values.firstName) {
//       errors.firstName = 'Required'
//     } else if (values.firstName.length < 2) {
//       errors.firstName = 'Minimum be 2 characters or more'
//     }
//     if (!values.email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address'
//     }
//     if (!values.lastName) {
//         errors.lastName = 'Required'
//       } else if (values.lastName.length < 2) {
//         errors.lastName = 'Minimum be 2 characters or more'
//       }
//     return errors
//   }

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//     <div>
//       <label className="control-label">{label}</label>
//       <div>
//         <input {...input} placeholder={label} type={type} className="form-control" />
//         {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
//       </div>
//     </div>
//   )

// let FormCode = props => {
//   const { handleSubmit, pristine, submitting } = props;
//   return (
//     <form onSubmit={ handleSubmit }>
//       <div className="form-group">
//         <Field name="firstName" component={renderField} label="First Name" />
//       </div>
//       <div className="form-group">
//         <Field name="lastName" component={renderField} label="Last Name" />
//       </div>
//       <div className="form-group">
//         <Field name="email" component={renderField} label="Email" />
//       </div>
//       <div className="form-group">
//         <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
//       </div>
//     </form>
//   )
// }

// export default {Login}


import React from 'react'
import '../Styles/header.css'

export default function Login() {
    return (
        <div>
            <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

