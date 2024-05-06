"use server";
import { Resend } from 'resend';
import { CreateUser, FindUserByCredentials, getEventById, UpdatedGoingIds, UpdateInterested } from "@/db/quries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import EmailTemplate from '@/components/payment/EmailTemplate';

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


export const addInterestedEvent=async(eventId,authId)=>{
  try {
    await UpdateInterested(eventId,authId);
    
  } catch (error) {
    throw error;
  }
  revalidatePath("/")

}

export const addGoingEvent=async(eventId,user)=>{
  try {
    await UpdatedGoingIds(eventId,user?.id);
    await sendEmail(eventId, user);
  } catch (error) {
    throw error;
  }
  revalidatePath("/")
  redirect("/")

}

export const sendEmail= async (eventId, user)=> {
  try{
    const event = await getEventById(eventId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;
    const sent = await resend.emails.send({
      from: "sariot@gmail.com",
      to: user?.email,
      subject: "Successfully Registered for the event!",
      react: EmailTemplate({ message })
    });
    console.log("sucess")
  } catch (error) {
    throw error;
  }
}