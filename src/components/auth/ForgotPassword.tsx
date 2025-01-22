import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Wine } from "lucide-react";
import Button from "../ui/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add password reset logic here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Check your email
          </h2>
          <p className="text-gray-600 mb-4">
            We've sent password reset instructions to your email address.
          </p>
          <Link
            to="/login"
            className="text-burgundy-600 hover:text-burgundy-500 font-medium"
          >
            Return to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Wine className="h-12 w-12 text-burgundy-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-burgundy-500 focus:border-burgundy-500"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <Button
              text={"Send Reset Instructions"}
              type={"submit"}
              onClick={handleSubmit}
              variant={"primary"}
            />
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-burgundy-600 hover:text-burgundy-500"
            >
              Return to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
