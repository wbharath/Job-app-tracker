const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: '28px',
          height: '28px',
          background: '#0d7a5f',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontStyle: 'italic',
          fontFamily: 'Georgia, serif',
          color: 'white',
          fontWeight: '300',
          flexShrink: 0
        }}
      >
        t
      </div>
      <span
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '20px',
          fontWeight: '300',
          color: '#0f172a',
          letterSpacing: '-0.3px'
        }}
      >
        rackr
      </span>
    </div>
  )
}

export default Logo
