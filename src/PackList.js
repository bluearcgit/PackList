import React from 'react'

const PackList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} {item.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PackList
