import React, { useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Form = () => {
    const [Step, setStep] = useState(0);
    const [formErrors, setFormErrors] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        occupation: "",
        dateOfBirth: "",
        contactNo: "",
        address: "",
        city: "",
        state: ""
    })
    function validate(values){
       const errors =[];
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       if (Step === 0) { 
       if (!values.firstName) {
        errors.push("Firstname is rrequired!") 
      }
       if (!values.lastName) {
        errors.push("Lastname is rrequired!") 
      }
      if (!values.email) {
        errors.push("Email is required!");
      } else if (!regex.test(values.email)) {
        errors.push ("This is not a valid email!")
      }  
    }
    if (Step === 1){
        if (!values.gender) {
            errors.push("Firstname is rrequired!") 
          }
        if (!values.occupation) {
            errors.push("Firstname is rrequired!") 
          }
        if (!values.dateOfBirth) {
            errors.push("Firstname is rrequired!") 
          }
    }
      return errors
    }
    const FormTitles = ["Step1", "Step2", "Step3"];
    const progess = Step === 0 ? "0%" : Step === 1 ? "30%" : Step === 2 ? "65%" : "100%";
    const FormDisplay = () => {
        if (Step === 0) {
            return <Step1 formData={formData} setFormData={setFormData} />
        } else if (Step === 1) {
            return <Step2 formData={formData} setFormData={setFormData} />
        } else if (Step === 2) {
            return <Step3 formData={formData} setFormData={setFormData} />
        } else {
            return <h1>Thank you!!!</h1>
        }
    }
    return (
        <div className="form">
            <h4>{formErrors}</h4>
            <div className='progressbar'>
                <div style={{ width: progess }}>
                    <h2 style={{ color: "white" }}>{progess} completed</h2>
                </div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[Step]}</h1>
                </div>
                <div className='body'>{FormDisplay()}</div>
                <div className='footer'>
                    <button
                        disabled={Step === 0}
                        onClick={() => { setStep((currPage) => currPage - 1) }}
                        style={{ display: Step === 0 ? "none" : "block" }}
                    >Prev</button>
                    <button
                        disabled={Step === FormTitles.length}
                        onClick={() => {
                            setFormErrors(validate(formData))
                            if(formErrors.length === 0){
                            setStep((currPage) => currPage + 1)
                            }
                            }}
                        >{Step === FormTitles.length - 1 ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )
}

export default Form