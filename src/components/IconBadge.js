import React from 'react'

const IconBadge = ({ fill = "#191f35", stroke = "#191f35" }) => {
  return (
    <svg width="86" height="65" viewBox="0 0 86 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M67.3266 20.0674C73.6318 29.1458 87.5682 35.8929 84.9754 46.6377C82.4003 57.3093 67.6732 58.5492 57.2266 61.9231C48.9039 64.611 40.6705 65.2182 32.0522 63.7298C21.2115 61.8576 7.28262 62.2968 2.37631 52.4504C-2.5299 42.6041 5.40336 31.2904 11.2424 21.967C15.5983 15.0119 22.9635 11.5938 30.2855 7.88745C37.6798 4.14441 45.2455 -1.8196 53.1185 0.769214C61.0071 3.36317 62.5895 13.2468 67.3266 20.0674Z" fill="#E5EAFA"/>
      <path d="M42.0003 40.0002C47.155 40.0002 51.3337 35.8215 51.3337 30.6668C51.3337 25.5122 47.155 21.3335 42.0003 21.3335C36.8457 21.3335 32.667 25.5122 32.667 30.6668C32.667 35.8215 36.8457 40.0002 42.0003 40.0002Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36.9473 38.5202L35.334 50.6668L42.0007 46.6668L48.6673 50.6668L47.054 38.5068" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default IconBadge 
