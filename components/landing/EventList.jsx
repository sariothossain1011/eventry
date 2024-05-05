import React from 'react'
import EventCard from './EventCard'
import { getAllEvents } from '@/db/quries'

const EventList =async() => {
  const allEvents = await getAllEvents();

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {
        allEvents.map((item)=> <EventCard item={item} key={item.id}/>)
      }
    </div>
  )
}

export default EventList