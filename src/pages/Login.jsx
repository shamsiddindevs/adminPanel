import {useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {CiLock, CiUser} from "react-icons/ci";

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
        if (data.success) {
          localStorage.setItem(
            "token",
            JSON.stringify(data?.data?.tokens?.accessToken?.token)
          );
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
    <div className="bg-[#F4F5FA] flex justify-center items-center h-screen px-2">
      <div className="bg-white rounded-xl px-8 py-12 w-full max-w-[443px] text-center my-10 mx-auto">
        <h1 className="mb-2 text-xl font-medium ">Welcome back!</h1>
        <h2 className="text-sm text-[#8B8D97] mb-16">
          Login to Admin Dashboard
        </h2>
        <form
          action=""
          className="flex flex-col items-center gap-2.5 w-full max-w-[375px] "
          onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            className="flex items-center rounded-lg gap-4 w-full px-4 py-2 bg-[#F1F3F9] mb-[30px]">
            {" "}
            <CiUser className="text-2xl text-black/40" />
            <input
              value={formData.phone_number}
              name="phone_number"
              onChange={changeData}
              className="outline-0 placeholder:text-[#ABAFB1] h-9"
              type="text"
              id="username"
              placeholder="Username"
              required
            />
          </label>
          <label
            htmlFor="username"
            className="flex items-center rounded-lg gap-4 w-full px-4 py-2 bg-[#F1F3F9] ">
            {" "}
            <CiLock className="text-2xl text-black/40" />
            <input
              value={formData.password}
              name="password"
              onChange={changeData}
              className="outline-0 placeholder:text-[#ABAFB1] h-9 "
              type="text"
              id="password"
              placeholder="Password"
              required
            />
          </label>
          <button
            type="submit"
            className="px-4 py-4 mt-10 rounded-xl text-white w-full text-xl bg-[#5570F1] max-w-[148px] mx-auto ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
