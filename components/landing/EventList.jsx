import React from 'react'
import EventCard from './EventCard'
import { getAllEvents } from '@/db/quries'

const EventList =async({query}) => {
  const allEvents = await getAllEvents(query);

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {
        allEvents.map((event)=> <EventCard event={event} key={event.id}/>)
      }
    </div>
  )
}

export default EventList