import React from "react";
import ActionsButton from "../button/ActionsButton";
import Link from "next/link";
import Image from "next/image";

const EventCard = ({item}) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={item.imageUrl}
        alt="Event 1"
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href={`/details/${item.id}`} className="font-bold text-lg">
          {item.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">
          {item.location}
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{item?.interested_ids.length} Interested</span>
          <span> | </span>
          <span>{item?.going_ids.length} Going</span>
        </div>

        <ActionsButton />
      </div>
    </div>
  );
};

export default EventCard;
