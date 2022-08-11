import React from 'react'
import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ListItem } from '../listitem/ListItem';
import { useRef } from 'react';

export const List = () => {

  const listRef = useRef();

  const handleClick = (direction) => {
    // one item 225px and space which 5 px total is 230px
    if (direction === 'left') {

    }
  }
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosIcon className="sliderArrow left" onClick={() => handleClick("left")}/>
        <div className="container" ref={listRef}>
          <ListItem  />
          <ListItem  />
          <ListItem  />
          <ListItem  />
          <ListItem  />
          <ListItem  />
          <ListItem  />
          <ListItem  />
          <ListItem  />
          <ListItem  />
        </div>
        <ArrowForwardIosIcon className="sliderArrow right" onClick={() => handleClick("right")}/>

      </div>
    </div>
  )
}
