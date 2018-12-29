import React from 'react'
import List from './List.jsx';
function ListEntry (props) {
    console.log(props)
    return (
        props.characterList.map((item, id)=>{
           return <li key={id} onClick={props.clickFunc}>{item}</li>
        })
    )
}


export default ListEntry;