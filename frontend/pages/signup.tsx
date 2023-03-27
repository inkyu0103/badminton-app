import React from "react";
import Spinner from "components/common/Spinner";
import dynamic from "next/dynamic";

const SignupForms = dynamic(() => import("components/forms/SignupForms"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Signup = () => <SignupForms />;
export default Signup;
