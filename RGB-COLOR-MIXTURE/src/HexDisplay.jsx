import React from 'react'

function rgbToHex(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
      .toUpperCase()
  )
}

const HexDisplay = ({ r, g, b }) => (
  <div style={{
    marginTop: 16,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#2d3748',
    background: '#f1f5f9',
    borderRadius: 8,
    padding: '8px 20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    userSelect: 'all',
    textAlign: 'center',
  }}>
    {rgbToHex(r, g, b)}
  </div>
)

export default HexDisplay 