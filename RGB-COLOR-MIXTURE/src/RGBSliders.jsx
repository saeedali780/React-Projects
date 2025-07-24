import React from 'react'

const RGBSliders = ({ r, g, b, onChange }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 300 }}>
    <div>
      <label>Red: {r}</label>
      <input type="range" min="0" max="255" value={r} onChange={e => onChange('r', +e.target.value)} />
    </div>
    <div>
      <label>Green: {g}</label>
      <input type="range" min="0" max="255" value={g} onChange={e => onChange('g', +e.target.value)} />
    </div>
    <div>
      <label>Blue: {b}</label>
      <input type="range" min="0" max="255" value={b} onChange={e => onChange('b', +e.target.value)} />
    </div>
  </div>
)

export default RGBSliders 