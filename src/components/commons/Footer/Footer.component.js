import React from 'react'

const d = new Date()
const n = d.getFullYear()

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p>
        @Omida {n} Real Estate Consulting Albo degli affari in mediazione della
        C.C.I.A.A. di Siena REA SI-145105 – P.IVA 00293630521
      </p>
    </div>
  )
}

export default Footer
