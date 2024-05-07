import SearchHeader from '@/components/headers/SearchHeader'
import EventList from '@/components/landing/EventList'
import Loading from '@/components/loading/Loding'
import React, { Suspense } from 'react'

const Home = ({searchParams: {query}}) => {
  return (
    <section className='container'>
    <SearchHeader/>
    <Suspense key={query} fallback={<Loading/>}>
    <EventList query={query}/>
    </Suspense>
    </section>
    
  )
}

export default Home