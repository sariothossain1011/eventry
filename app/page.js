import SearchHeader from '@/components/headers/SearchHeader'
import EventList from '@/components/landing/EventList'
import React from 'react'

const Home = () => {
  return (
    <section className='container'>
    <SearchHeader/>
    <EventList/>
    </section>
    
  )
}

export default Home