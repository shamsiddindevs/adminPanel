import {useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({phone_number: "", password: ""});
  const navigate = useNavigate();

  function changeData(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log("Input changed", formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://realauto.limsa.uz/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          localStorage.setItem("token", JSON.stringify(data?.data?.tokens?.accessToken?.token));
          toast.success(data.message);
          navigate("/home");
          window.location.reload();
        } else {
          toast.error(data.message);
        }
      });

    console.log("Form submitted");
    setFormData({phone_number: "", password: ""});
  }

  return (
    <div className="bg-gray-200 rounded-2xl px-5 py-20 max-w-md text-center my-10 mx-auto">
      <h1 className="mb-10 text-3xl uppercase">login Page</h1>
      <form
        action=""
        className="flex flex-col items-center gap-2.5 "
        onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          value={formData.phone_number}
          name="phone_number"
          onChange={changeData}
          className="border py-1 px-2 rounded-md"
          type="text"
          id="username"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          value={formData.password}
          name="password"
          onChange={changeData}
          className="border py-1 px-2 mb-5 rounded-md"
          type="text"
          id="password"
          required
        />

        <button
          type="submit"
          className="px-10 py-2 bg-gray-600 rounded-md text-white ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
