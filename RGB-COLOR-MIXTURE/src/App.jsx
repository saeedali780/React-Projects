import React, { useState } from 'react'
import RGBSliders from './RGBSliders'
import ColorPreview from './ColorPreview'
import HexDisplay from './HexDisplay'

const App = () => {
  const [color, setColor] = useState({ r: 128, g: 128, b: 128 })

  const handleSliderChange = (channel, value) => {
    setColor(prev => ({ ...prev, [channel]: value }))
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, Arial, sans-serif',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 350,
      }}>
        <h1 style={{
          fontWeight: 700,
          fontSize: 32,
          marginBottom: 24,
          letterSpacing: 1,
          color: '#2d3748',
        }}>
          RGB Color Mixer
        </h1>
        <RGBSliders r={color.r} g={color.g} b={color.b} onChange={handleSliderChange} />
        <div style={{ marginTop: 32 }}>
          <ColorPreview r={color.r} g={color.g} b={color.b} boxShadow />
          <HexDisplay r={color.r} g={color.g} b={color.b} />
        </div>
      </div>
    </div>
  )
}

export default App