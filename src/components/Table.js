import React from 'react'
import Row from './Row'

const Table = ({ items }) => 
   (
    <table >
        <tbody> 
            {items.map(item => (
                <Row 
                    key={item.id}
                    item={item}
                />
            ))}
       </tbody>
    </table>
  )


export default Table
