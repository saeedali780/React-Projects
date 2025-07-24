import React from 'react'

const ColorPreview = ({ r, g, b, boxShadow }) => (
  <div style={{
    width: 150,
    height: 150,
    background: `rgb(${r},${g},${b})`,
    border: '1px solid #ccc',
    marginTop: 20,
    borderRadius: 12,
    boxShadow: boxShadow ? '0 4px 16px rgba(0,0,0,0.15)' : undefined,
    transition: 'box-shadow 0.2s',
  }} />
)

export default ColorPreview 