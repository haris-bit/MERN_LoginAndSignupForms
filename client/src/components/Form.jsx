import React, { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    firstName: "Mark",
    lastName: "Otto",
    username: "",
    city: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            username: formData.username,
            city: formData.city,
            agreeToTerms: formData.agreeToTerms,
          }),
        });
        if (response.ok) {
          // Handle success, e.g., show a success message or redirect
          console.log("Form submitted successfully!");
        } else {
          // Handle error
          const errorMessage = await response.text(); // Get the error message from the response
          console.error("Error submitting form:", errorMessage);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
  };

  return (
    <div>
      <div className="head">
        <h3>Please complete the registration form to unlock exclusive benefits.</h3>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="agreeToTerms">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
      <div className="bottom">
        <p>For more Information<br /></p>
        <p>Visit our Office St#34, office 402, Lahore, Pakistan</p>
      </div>
    </div>
  );
};

export default Form;
