import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
     const [formData, setFormData] = useState({
          lastname: "",
          registration_code: "",
     });
     const nav = useNavigate();
     const handleChange = (e) => {
          const { name, value } = e.target;

          setFormData((prevFormData) => ({
               ...prevFormData,
               [name]: value,
          }));
     };
     const handleSubmit = () => {
          var requestOptions = {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(formData),
               redirect: "follow",
          };

          fetch("http://localhost/module_b/public/api/v1/login", requestOptions)
               .then((response) => response.json())
               .then((result) => {
                    localStorage.setItem("token", JSON.stringify(result.token));
                    nav(-1);
               })
               .catch((error) => alert(error));
     };
     return (
          <>
               <h3>Login</h3>
               <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
               />
               <input
                    type="text"
                    name="registration_code"
                    value={formData.registration_code}
                    onChange={handleChange}
               />
               <button onClick={handleSubmit}>login</button>
          </>
     );
}
