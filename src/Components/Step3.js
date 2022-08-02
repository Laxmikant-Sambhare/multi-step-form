import React from 'react'

const Step3 = ({formData, setFormData}) => {
  return (
    <div className='Step3-container'>
         <input type={"number"} placeholder="Contact No"
          value={formData.contactNo}
          onChange={(e) => setFormData({...formData,contactNo: e.target.value})}
         />
        <input type={"text"} placeholder="Adresss"
         value={formData.address}
         onChange={(e) => setFormData({...formData,address: e.target.value})}
        />
        <input type={"text"} placeholder="City"
         value={formData.city}
         onChange={(e) => setFormData({...formData,city: e.target.value})}
        />
        <input type={"text"} placeholder="State"
         value={formData.state}
         onChange={(e) => setFormData({...formData,state: e.target.value})}
        />
    </div>
  )
}

export default Step3