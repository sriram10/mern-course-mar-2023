const Wrapper = ({ children }) => {
  return (
    <div style={{ padding: 20, textAlign: 'center', display: 'inline-block', border: '1px solid #222', margin: 5, background: 'rgba(0,0,0,.15)' }}>
      {children}
    </div>
  )
}

export default Wrapper;