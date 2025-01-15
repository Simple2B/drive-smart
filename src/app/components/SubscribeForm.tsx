"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Toast, ToastType } from "./Toast";

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error.error) {
      setError({ message: "", error: false });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!email) {
      setError({ message: "Email is empty", error: true });
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError({ message: "Email is not valid", error: true });
      setIsLoading(false);
      return;
    }

    await fetch(`/api/subscribe?email=${email}`)
      .then((res) => res.json())
      .then(() => {
        setIsSuccess(true);
      })
      .catch((err: IError) => {
        setError({
          error: true,
          message: err.message,
        });
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (error.error) {
      const timer = setTimeout(() => {
        setTimeout(() => setError({ message: "", error: false }), 300);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setTimeout(() => setIsSuccess(false), 300);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div>
      <div className="flex flex-col w-full pt-14 gap-6 md:gap-2 md:flex-row justify-stretch">
        <input
          placeholder="Email"
          onChange={handleChange}
          type="email"
          className={`px-8 py-4 border-primary  hover:border-primaryDark border-2 rounded-3xl text-lg  ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } font-medium bg-transparent w-full`}
          disabled={isLoading}
        />
        <Button
          text="Subscribe"
          isColored
          onClick={handleSubmit}
          isDisabled={isLoading}
        />
      </div>
      {isLoading && <p className="text-center">Loading...</p>}
      {error.error && <Toast text={error.message} type={ToastType.ERROR} />}
      {isSuccess && <Toast text={"Subscribed!"} type={ToastType.SUCCESS} />}
    </div>
  );
};
