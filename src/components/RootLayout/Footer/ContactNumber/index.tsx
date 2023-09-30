
import React from 'react'

type ContactNumberPros = {
    telNumber : string
}

const ContactNumber = ({telNumber}:ContactNumberPros) => {
  return (
    <p className="text-text font-extrabold text-base flex flex-row gap-2 " >
    {/* <TelIcon className="text-xs w-5" /> */}
    <a href={`tel:${telNumber}`} >{telNumber}</a>
  </p>
  )
}

export default ContactNumber