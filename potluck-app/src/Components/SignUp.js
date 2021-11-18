import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axiosWithAuth from '../common/axiosWithAuth'

const SignUp = (props) => {

  const { push } = useHistory()

  const [disabledButton, setDisabledButton] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isOrganizer: false,
  })
 
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    isOrganizer: '',
  })

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required('Please include your name.')
      .min(6, 'Name must be at least 6 characters long'),
    password: yup
      .string()
      .required('Password is Required')
      .min(6, 'Passwords must be at least 6 characters long.'),
    isOrganizer: yup.bool(),
  })

  const setFormErrors = (variable, value) => {
    yup
      .reach(formSchema, variable)
      .validate(value)
      .then(() => setErrors({ ...errors, [variable]: '' }))
      .catch((err) => setErrors({ ...errors, [variable]: err.errors[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosWithAuth()
      .post('auth/register', formData) // Need : unit 4
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.id);
        localStorage.setItem("isOrganizer", res.data.isOrganizer);
        localStorage.setItem("username", res.data.username);
        push('/')
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  const handleChange = (e) => {
    const { type } = e.target
    console.log('TYPE', type)
    const valueToUse = type === 'checkbox' ? 'checked' : 'value'
    setFormData({
      ...formData,
      [e.target.name]: e.target[valueToUse],
    })
    console.log('FORM DATA', formData)
    console.log('E.TARGET.VALUETOUSE', e.target[valueToUse])

    setFormErrors(e.target.name, e.target[valueToUse])
  }

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setDisabledButton(!valid))
  })

  return(
    <div className="row d-flex form-container">
      
      <form className="col-12 d-flex flex-column align-items-center mx-auto">
        <h2 className="green mon-medium text-uppercase">Sign Up:</h2>
        <label className="w-100 green mon-medium py-3">Username:</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="w-100" />

        <label className="w-100 green mon-medium py-3">Password:</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="w-100" />

        <div className="d-flex w-100 align-items-center">
          <label className="green mon-medium py-3">Are you an Organizer?</label>
          <p class="py-3 green mb-0 mx-3">(Check yes / no)</p>
          <input type="checkbox" checked={formData.isOrganizer} name="isOrganizer" onChange={handleChange} className="mx-3" />
        </div>

        <button className="btn-potluck my-3" type="submit" disabled={disabledButton} onClick={handleSubmit} >Submit</button> 
      </form>
    </div>
    // post request 
  )
}

export default SignUp