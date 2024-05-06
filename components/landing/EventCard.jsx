import React from "react";
import ActionsButton from "../button/ActionsButton";
import Link from "next/link";
import Image from "next/image";
import EventSchemaScript from "../meta/EventSchemaScript";

const EventCard = ({event}) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventSchemaScript event={event}/>
      <Image
        src={event.imageUrl}
        alt="Event 1"
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href={`/details/${event.id}`} className="font-bold text-lg">
          {event.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          {event.location}
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{event?.interested_ids.length} Interested</span>
          <span> | </span>
          <span>{event?.going_ids.length} Going</span>
        </div>

        <ActionsButton eventId={event?.id} interestedUserIds={event?.interestedUserIds} goingUserIds={event?.going_ids} />
      </div>
    </div>
  );
};

export default EventCard;
