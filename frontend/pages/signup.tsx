import BadRequest from "components/common/BadRequest";
import Spinner from "components/common/Spinner";
import dynamic from "next/dynamic";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { OnlyPublicRoute } from "utils/conditionalRoutes";

const SignupForms = dynamic(() => import("components/forms/SignupForms"), {
  loading: () => <Spinner />,
  ssr: false,
});

const Signup = () => (
  <ErrorBoundary fallback={<BadRequest />}>
    <SignupForms />
  </ErrorBoundary>
);
export default OnlyPublicRoute(Signup);
