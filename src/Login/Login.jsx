import React from "react";
import {Formik} from "formik";
import css from "./Login.module.css"
import * as yup from "yup"

const Login = () => {
    return (
        <LoginForm/>
    )
}

const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        login: yup.string().typeError('Must be a string').required("Necessary"),
        password: yup.string().typeError('Must be a string').required("Necessary")})
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    login: "",
                    password: ""
                }}
                validateOnBlur
                onSubmit={(values) => {console.log(values)}}
                validationSchema={validationSchema}
            >
                {({
                      values, errors, touched,
                      handleBlur, handleChange, handleSubmit, isValid,dirty
                  }) => (
                    // <div>
                    //     <div>
                    //         <input placeholder={"Login"}/>
                    //     </div>
                    //     <div>
                    //         <input placeholder={"Password"}/>
                    //     </div>
                    //     <div>
                    //         <input type={"checkbox"}/>remember me
                    //     </div>
                    //     <div>
                    //         <button>Log In</button>
                    //     </div>
                    // </div>
                    <div className={css.form}>
                        <div>
                            <label htmlFor={`login`}>Login</label> <br/>
                            <input className={css.inputs}
                                   placeholder={"Login"}
                                   type={`text`}
                                   name={`login`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.login}/>
                        </div>
                        {touched.login && errors.login && <p className={css.error}>{errors.login}</p>}
                        <div>
                            <label htmlFor={`password`}>Password</label> <br/>
                            <input className={css.inputs}
                                   placeholder={"Password"}
                                   type={`password`}
                                   name={`password`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}/>
                        </div>
                        {touched.password && errors.password && <p className={css.error}>{errors.password}</p>}
                        <div>
                            <input className={css.checkBox}
                                   type={`checkbox`}
                                   name={`checkbox`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}/>remember me
                        </div>
                        <div>
                            <button disabled={!isValid && !dirty}
                                    type={`submit`}
                                    onClick={handleSubmit}
                            >
                                Log In</button>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    )
}

export default Login;