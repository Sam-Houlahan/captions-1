import React from 'react'
import CaptionListItem from './CaptionListItem'

function CaptionList (props){
  function handleClick () {
    console.log(props)
    const imageId = props.routerProps.match.params.id
    props.routerProps.history.push(`/images/${imageId}/add-caption`)
  }
  return (
    <div className='caption-list'>
      <button onClick={handleClick}>New Caption</button>
      {props.captions.map((item, key) => {
        return (
          <div key={key}>
            <CaptionListItem imageId={item.imageId} id={item.id} caption={item.captionText} />
          </div>
        )
      })}
    </div>
  )
}

export default CaptionList