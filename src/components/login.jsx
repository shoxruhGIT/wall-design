import React, { useState } from "react";
import Logo from "../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const navigation = useNavigate();

  const handleFromData = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://testwalldesign.limsa.uz/auth/login",
        formData
      );

      setFormData({
        phone: "",
        password: "",
      });

      localStorage.setItem("accessToken", data.data.accessToken);

      navigation("/warhouse");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full fixed inset-0 bg-[url('./assets/bg-login.jpg')] bg-cover bg-center brightness-75 flex items-center justify-center">
      <div className="flex items-center gap-96">
        <img className="w-80 h-80" src={Logo} alt="logo is here" />

        <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
          <form className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none"></div>
            <div className="absolute inset-4 border-2 border-white/10 rounded-xl pointer-events-none"></div>
            <h2 className="text-3xl font-bold mb-8 text-center text-white bg-clip-text">
              Кириш
            </h2>
            <div className="mb-6">
              <label
                className="block text-white/80 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Логин
              </label>
              <input
                id="username"
                name="phone"
                placeholder="Логинни киритинг!"
                className="w-full px-4 py-3 border-2 border-white/20 rounded-xl focus:outline-none focus:border-white/40 bg-white/10 text-white placeholder-white/50 transition-all duration-300"
                type="text"
                value={formData.phone}
                onChange={handleFromData}
              />
            </div>
            <div className="mb-2 relative">
              <label
                className="block text-white/80 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Parol
              </label>
              <input
                id="password"
                name="password"
                placeholder="Паролни киритинг"
                className="w-full px-4 py-3 border-2 border-white/20 rounded-xl focus:outline-none focus:border-white/40 bg-white/10 text-white placeholder-white/50 transition-all duration-300 pr-12"
                type="password"
                value={formData.password}
                onChange={handleFromData}
              />
              <button
                type="button"
                className="absolute cursor-pointer inset-y-0 top-[40%] right-0 pr-3 flex items-center text-white/90 hover:text-white/80 transition-all duration-300"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>
              </button>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="w-full cursor-pointer py-3 px-6 rounded-xl bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-yellow-100 transition-all duration-300 border-2 border-yellow-500/30 hover:border-yellow-500/50 shadow-lg hover:shadow-xl active:scale-95"
            >
              Кириш
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
