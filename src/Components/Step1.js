import React from 'react'

const Step1 = ({formData, setFormData}) => {
  return (
    <div className='Step1-container'>
        <input type={"text"} 
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({...formData,firstName: e.target.value})}
        />
        <input type={"text"} 
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({...formData,lastName: e.target.value})}
        />
        <input type={"text"}
         placeholder="Email.."
         value={formData.email}
         onChange={(e) => setFormData({...formData,email: e.target.value})}
         />
    </div>
  )
}

export default Step1