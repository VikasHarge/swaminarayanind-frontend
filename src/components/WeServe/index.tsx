import React from 'react'
import { industries } from '../../../utils/data'
import IndustryCard from './IndustryCard'
import StyledText from '../Shared/StyledText'

const WeServe = () => {
  return (
    <div className="container py-8 lg:px-12">
      <div className="flex flex-col gap-6 md:gap-12">
        <div>
          <StyledText className="text-lg md:text-xl lg:text-2xl text-center w-full">
            One Stop Packing Solution.
          </StyledText>
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-text-2">
            We offer packing solution to wide range of industriess
          </h2>
        </div>
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-4 lg:px-12 gap-y-4 md:gap-y-8 lg:gap-8 lg:flex-wrap" >
          {
            industries.map((industry)=>(
              <IndustryCard industry={industry} key={industry.title} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default WeServe