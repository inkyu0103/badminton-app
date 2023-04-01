import React from "react";
import Spinner from "components/common/Spinner";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "react-error-boundary";
import BadRequest from "components/common/BadRequest";

const SignupForms = dynamic(() => import("components/forms/SignupForms"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Signup = () => (
  <ErrorBoundary fallback={<BadRequest />}>
    <SignupForms />
  </ErrorBoundary>
);
export default Signup;
