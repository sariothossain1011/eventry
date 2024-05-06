import DetailsMap from "@/components/details/DetailsMap";
import EventDetails from "@/components/details/EventDetails";
import HeroSection from "@/components/details/HeroSection";
import { getEvent } from "@/db/quries";
import React from "react";

export async function generateMetadata({params: {id}}) {
  const eventInfo = await getEvent(id);

  return {
    title: `Eventry - ${eventInfo?.name}`,
    description: eventInfo?.details,
    openGraph: {
      images: [eventInfo?.imageUrl]
    }
  }
}



const DetailsPage =async ({params:{id}}) => {
  const event = await getEvent(id);
  return (
    <>
      <HeroSection event={event} />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={event}/>
          <DetailsMap event={event}/>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
