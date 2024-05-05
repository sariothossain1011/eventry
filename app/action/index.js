"use server";

import { CreateUser, FindUserByCredentials } from "@/db/quries";
import { redirect } from "next/navigation";

export const RegisterUser = async (formData) => {
  const user = Object.fromEntries(formData);

  const created = await CreateUser(user);
  redirect("/login");
};

export const PerformLogin = async (formData) => {
  try {
    const credentials = {};
    credentials.email = formData.get("email");
    credentials.password = formData.get("password");

    const found = await FindUserByCredentials(credentials);
    return found;
  } catch (error) {
    throw error;
  }
};
