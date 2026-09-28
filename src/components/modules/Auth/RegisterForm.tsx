
"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { register } from "@/actions/auth";



export default function RegisterForm() {
  const form = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await register(values);

      if (res?.id) {
        toast.success("User Registered Successfully");
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5 rounded-lg bg-white p-8 shadow-md"
      >
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Register Now
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Create your account to get started
          </p>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700"
          >
            Name
          </label>

          <Input
            id="name"
            placeholder="Enter your name"
            {...form.register("name")}
          />

          {form.formState.errors.name && (
            <p className="text-sm text-red-500">
              {form.formState.errors.name.message as string}
            </p>
          )}
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

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-gray-700"
          >
            Phone
          </label>

          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            {...form.register("phone")}
          />

          {form.formState.errors.phone && (
            <p className="text-sm text-red-500">
              {form.formState.errors.phone.message as string}
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
          Register
        </Button>

        <p className="pt-2 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

