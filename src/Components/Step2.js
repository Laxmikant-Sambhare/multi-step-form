import React from 'react'

const Step2 = ({ formData, setFormData }) => {
    return (
        <div className='Step2-container'>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "8px",
                boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.4)"
            }}>
                <h3 style={{
                    textAlign: "initial",
                }}>Gender:</h3>
                <input type="radio" value="Male" name="gender"
                    style={{
                        margin: "5px",
                        height: "10px",
                        fontSize: "5px",
                    }}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })} /> Male
                <input type="radio" value="Female" name="gender"
                    style={{
                        margin: "5px",
                        height: "10px",
                        fontSize: "5px",
                    }}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })} 
                /> Female
                <input type="radio" value="Other" name="gender"
                    style={{
                        margin: "5px",
                        height: "10px",
                        fontSize: "5px",
                    }}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })} 
                /> Other
            </div>
            <input type={"text"} placeholder="Occupation"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
            />
            <input type={"date"} placeholder="Date of birth"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            />
        </div>
    )
}

export default Step2