import React from "react";
import {Formik} from "formik";
import css from "./Login.module.css"
import * as yup from "yup"
import {connect} from "react-redux";
import {login} from "../redux/authReducer";
import {Redirect} from "react-router";

const Login = (props) => {
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return (
        <LoginForm login={props.login}/>
    )
}

const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        login: yup.string().typeError('Must be a string').required("Necessary"),
        password: yup.string().typeError('Must be a string').required("Necessary")
    })


    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                    isRemembered: false
                }}
                validateOnBlur
                onSubmit={(values) => {
                    props.login(values.login, values.password, values.isRemembered)
                }}
                validationSchema={validationSchema}
            >
                {({
                      values, errors, touched,
                      handleBlur, handleChange,
                      handleSubmit, isValid, dirty
                  }) => (
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
                                   name={`isRemembered`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.isRemembered}/>remember me
                        </div>
                        <div>
                            <button disabled={!isValid && !dirty}
                                    type={`submit`}
                                    onClick={handleSubmit}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    )
}

let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);