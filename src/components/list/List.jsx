import React from 'react'
import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export const List = () => {
  return (
    <div className='list'>
      <span className='listTitle'>Continue to wartch</span>
      <div className="wrapper">
        <ArrowBackIosIcon className="sliderArrow left" />
        <div className="container">
          
        </div>
        <ArrowForwardIosIcon className="sliderArrow right" />

      </div>
    </div>
  )
}
