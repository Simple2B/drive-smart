"use client";
import React, { useState } from "react";
import { Button } from "./Button";

type IError = {
  message: string;
};

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ message: "", error: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error.error) {
      setError({ message: "", error: false });
    }
  };

  const handleSubmit = async () => {
    if (!email) {
      setError({ message: "Email is empty", error: true });
      return;
    }

    if (!validateEmail(email)) {
      setError({ message: "Email is not valid", error: true });
      return;
    }

    // await fetch(`/api/subscribe?email=${email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // setVoteResultReceived(true);
    //     console.log("email written", data);
    //   })
    //   .catch((err: IError) => {
    //     setError({
    //       error: true,
    //       message: err.message,
    //     });
    //   });
  };

  return (
    <div className="flex flex-col w-full pt-14 gap-6 md:gap-2 md:flex-row justify-stretch">
      <input
        placeholder="Email"
        onChange={handleChange}
        type="email"
        className="px-8 py-4 border-primary  hover:border-primaryDark border-2 rounded-3xl text-lg  cursor-pointer font-medium bg-transparent w-full"
      />
      <span className="text-red-500 text-center">{error.message}</span>
      <Button text="Subscribe" isColored onClick={handleSubmit} />
    </div>
  );
};
