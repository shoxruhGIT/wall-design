import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const getProfile = async () => {
    try {
      const { data } = await axios.get(
        "https://testwalldesign.limsa.uz/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(data.data);

      localStorage.setItem("role", data.data.role);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <header className="w-full fixed inset-0 h-[105px] bg-[#17212b] z-50">
      <section className="px-8 flex items-center justify-between ">
        <div className="flex items-center gap-8">
          <button className="cursor-pointer hover:text-yellow-700 transition-all duration-300 ease-in-out">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className=" h-4 w-4 md:h-6 md:w-6 text-yellow-200 "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
            </svg>
          </button>
          <img className="w-24 h-24" src={Logo} alt="logo is here" />
        </div>
        <div className="right-content flex items-center space-x-4">
          <div className="text-gray-100 text-[30px] mr-5 cursor-pointer">
            <span
              onClick={() => setIsOpen(true)}
              className="ant-badge css-mc1tut"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-gray-100 text-[30px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.63 17.531c.612 .611 .211 1.658 -.652 1.706a3.992 3.992 0 0 1 -3.05 -1.166a3.992 3.992 0 0 1 -1.165 -3.049c.046 -.826 1.005 -1.228 1.624 -.726l.082 .074l3.161 3.16z"></path>
                <path d="M20.071 3.929c.96 .96 1.134 2.41 .52 3.547l-.09 .153l-.024 .036a8.013 8.013 0 0 1 -1.446 7.137l-.183 .223l-.191 .218l-2.073 2.072l-.08 .112a3 3 0 0 0 -.499 2.113l.035 .201l.045 .185c.264 .952 -.853 1.645 -1.585 1.051l-.086 -.078l-11.313 -11.313c-.727 -.727 -.017 -1.945 .973 -1.671a3 3 0 0 0 2.5 -.418l.116 -.086l2.101 -2.1a8 8 0 0 1 7.265 -1.86l.278 .071l.037 -.023a3.003 3.003 0 0 1 3.432 .192l.14 .117l.128 .12z"></path>
              </svg>
            </span>
          </div>
          <div className="text-right">
            <h2 className="text-sm md:text-lg font-semibold text-white">
              {profile?.name} <br />{" "}
              <span className="text-blue-600">
                {profile?.role === "admin" ? "Админ" : "Омборчи"}
              </span>
            </h2>
          </div>
          <button
            className="flex items-center bg-gradient-to-r cursor-pointer from-yellow-400 to-yellow-700 hover:scale-105 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-in-out border border-white/20 hover:border-white/30"
            onClick={() => {
              localStorage.removeItem("accessToken");
              navigate("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              ></path>
            </svg>
            Чиқиш
          </button>
        </div>

        {/* notification modal */}
        {isOpen && (
          <>
            <div
              onClick={(e) => setIsOpen(e.stopPropagation())}
              class="fixed inset-0 bg-transparent w-full h-full z-[1000000]"
            ></div>
            <div class="p-2 absolute h-screen w-[400px] z-[100000000]  top-0 right-0 bg-[#17212b] transition-all duration-300 ease-in-out overflow-y-scroll">
              <div class="flex flex-col gap-2">
                <p class="text-gray-100 text-center mt-10">
                  Хабарлар мавжуд эмас
                </p>
              </div>
            </div>
          </>
        )}
        {/* notification modal */}
      </section>
    </header>
  );
};

export default Navbar;
