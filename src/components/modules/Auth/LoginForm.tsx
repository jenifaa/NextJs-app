
"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    try {
      await signIn("credentials", {
        ...values,
        callbackUrl: "/dashboard",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSocialLogin = (provider: "google" | "github") => {
    if (provider === "google") {
      signIn("google", {
        callbackUrl: "/dashboard",
      });
    }

    if (provider === "github") {
      signIn("github", {
        callbackUrl: "/dashboard",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>

            <p className="mt-2 text-sm text-gray-500">
              Welcome back! Please login to your account.
            </p>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...form.register("email")}
            />

            {form.formState.errors.email && (
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...form.register("password")}
            />

            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message as string}
              </p>
            )}
          </div>

          <Button type="submit" className="mt-2 w-full">
            Login
          </Button>

          <div className="flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gray-300" />

            <span className="text-sm text-gray-500">
              or continue with
            </span>

            <div className="h-px flex-1 bg-gray-300" />
          </div>
        </form>

        {/* Social Login Buttons */}
        <div className="mt-4 flex flex-col gap-3">
          {/* GitHub */}
          <Button
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-2"
            onClick={() => handleSocialLogin("github")}
          >
            <Image
              src="https://img.icons8.com/ios-glyphs/24/github.png"
              alt="GitHub"
              width={20}
              height={20}
              className="h-5 w-5"
            />

            Login with GitHub
          </Button>

          {/* Google */}
          <Button
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-2"
            onClick={() => handleSocialLogin("google")}
          >
            <Image
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              width={20}
              height={20}
              className="h-5 w-5"
            />

            Login with Google
          </Button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

