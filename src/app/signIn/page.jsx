"use client";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import React, { useEffect } from "react";
import signupImage from "@/assets/image.png";
import facebook from "@/assets/facebook.png";
import apple from "@/assets/apple.png";
import google from "@/assets/google.png";
// import eye from "@/assets/eye.png";
import Image from "next/image";
import styles from "@/app/signUp/SignUp.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function SignUpPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/profile");
    }
  }, [status, router]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    const username = event.target[0].value;
    const password = event.target[1].value;
    console.log(username, password);

    if (Object.keys(validationErrors).length === 0) {

      // const {username, password} = formData
      // console.log(username, password);
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      const newRes = res.error;
      console.log(newRes);
      if (res?.error) {
        setErrors("Invalid email or password");
        if (res?.url) router.replace("/profile");
      } else {
        setErrors("");
      }

    }
  };

  const isValidUsername = (username) => {
    const usernameRegex = /^[a-z0-9]{3,15}$/;
    return usernameRegex.test(username);
  };
  // ^[a-z0-9_-]{3,15}$

  const validateForm = (data) => {
    let errors = {};

    if (!data.username) {
      errors.username = "username is required";
    } else if (!isValidUsername(data.username)) {
      errors.username = "invalid Username";
    }

    if (!data.password) {
      errors.password = "password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password should not be less than 6";
    }
    return errors;
  };

  return (
    <div className="w-full xl:h-screen ">
      <div className="xl:bg-gray flex ">
        <div className="xl:w-[600px]">
          <Image
            className=" hidden xl:block xl:h-[630px]"
            src={signupImage}
            alt="image"
          />
        </div>

        <div className="xl:w-[50%] w-full bg-white">
          <div className="h-[600px] xl:h-0">
            <div className="xl:ml-[70px] text-center">
              <h1 className="mt-5 text-[#26BDD2] font-bold text-3xl mb-2 ">
                BLOGG
              </h1>
              <p className="font-semibold mb-2">Join Blogg</p>
              <h5 className="text-center mb-5">
                Enter your email address to create an account with us
              </h5>
            </div>
            <div className="xl:px-5 px-6">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    className="py-2 px-2 mt-1 text-[14px] focus:outline-none border border-gray-500 rounded-md"
                    type="text"
                    name="username"
                    placeholder="enter username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="flex flex-col mb-3 relative">
                  <label htmlFor="password">Password</label>
                  <input
                    className="py-2 px-2 mt-1 text-[14px] focus:outline-none border border-gray-500 rounded-md"
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {/* <IoMdEye className="text-[22px] absolute right-1" />
                  <IoMdEyeOff className="text-[22px] absolute right-2 top-9" /> */}
                  <div onClick={handleShow}>
                    {show ? (
                      <IoMdEye className="text-[22px] absolute right-2 top-9" />
                    ) : (
                      <IoMdEyeOff className="text-[22px] absolute right-2 top-9" />
                    )}
                  </div>

                  {errors.password && <p>{errors.password}</p>}
                  {/* <Image
                    className="absolute right-2 top-9"
                    src={eye}
                    alt="image"
                  /> */}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#26BDD2] py-1 mt-3 text-white rounded-md"
                >
                  Sign In
                </button>
              </form>
            </div>
            <div className="px-5 flex mb-1 pt-2 items-center">
              <span className={styles.spn}>or</span>
            </div>

            <span className="px-5 xl:ml-[180px] ml-[130px]">Sign up with</span>
            <div className="flex justify-around px-5 xl:mt-6 mt-6 items-center">
              <div className="border border-gray-500 py-1 px-2 rounded-sm">
                <Image className="w-9" src={facebook} alt="image" />
              </div>

              <div className="border border-gray-500 py-1 px-2 rounded-sm">
                <Image className="w-9" src={apple} alt="image" />
              </div>

              <div className="border border-gray-500 py-[6px] px-2 rounded-sm">
                <Image className="w-7" src={google} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
