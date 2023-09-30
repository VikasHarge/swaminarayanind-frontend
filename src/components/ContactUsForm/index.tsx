"use client";
import classNames from "classnames";
import React, { useState, createRef, useEffect } from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import Reaptcha from "reaptcha";
import { Button } from "@components/Shared/Form/Button";
import Input from "@components/Shared/Form/Input";

export type ContactValues = {
  company_name?: string;
  full_name?: string;
  email?: string;
  phone?: string;
  order_details?: string;
  g_recaptcha_response: string;
};

const contactValues: ContactValues = {
  company_name: "",
  full_name: "",
  email: "",
  phone: "",
  order_details: "",
  g_recaptcha_response: "",
};

const contactValuesSchema = Yup.object().shape({
  company_name: Yup.string(),
  full_name: Yup.string().required("Full name is required"), // Added .required()
  email: Yup.string().email().required("Email is required"), // Added .required()
  phone: Yup.string(),
  order_details: Yup.string(),
});

const recaptchRef = createRef<Reaptcha>();

const ContactUsForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  useEffect(() => {
    if (isRecaptchaLoaded) {
      recaptchRef.current?.renderExplicitly();
    }
  }, [isRecaptchaLoaded]);
  return (
    <Formik<ContactValues>
      initialValues={{
        ...contactValues,
      }}
      validationSchema={contactValuesSchema}
      onSubmit={() => {
        console.log("submitted");
      }}
    >
      {({ submitForm, resetForm, setFieldValue }) => (
        <Form>
          <div className={classNames("fixed right-0 top-[15%] z-50 ", !isOpen && "h-0" )}>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                resetForm();
              }}
              className={classNames(
                "transition-all flex justify-center items-center overflow-hidden ease-in duration-300 bg-primary text-white font-bold text-xs md:text-base  absolute right-0 w-max z-10",
                isOpen
                  ? "w-8 h-8 md:w-10 md:h-10  rounded-3xl p-2 m-2"
                  : "w-9 md:w-12 h-28 md:h-36  rounded-s-lg px-3 py-4",
              )}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6 font-extrabold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <span className="h-max vertical-rl">CONTACT US</span>
              )}
            </button>
            <div
              className={classNames(
                isOpen ? "translate-x-0" : "translate-x-full",
                " p-4 w-96 max-w-[95vw] shadow-3xl bg-slate-800 transition-all ease-in-out duration-700 overflow-hidden",
              )}
            >
              <h4 className="text-base md:text-xl text-center font-bold text-text-4">
                Get in Touch
              </h4>
              <div className="p-4 flex flex-col gap-4 ">
                <Input<ContactValues>
                  name="full_name"
                  placeholder="Full Name"
                />
                <Input<ContactValues>
                  name="company_name"
                  placeholder="Company Name"
                />
                <Input<ContactValues> name="email" placeholder="Email" />
                <Input<ContactValues> name="phone" placeholder="Phone No." />
                <Input<ContactValues>
                  name="order_details"
                  as="textarea"
                  placeholder="Order Details (optional)"
                />
                <div>
                  {/* <Reaptcha
                    sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onVerify={(token: string) => {
                      setFieldValue("g_recaptcha_response", token);
                    }}
                    onLoad={() => setIsRecaptchaLoaded(true)}
                    onExpire={() => setFieldValue("g_recaptcha_response", "")}
                    ref={recaptchRef}
                    explicit
                  /> */}
                  <Button type="submit" onClick={submitForm}>
                    SEND
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
