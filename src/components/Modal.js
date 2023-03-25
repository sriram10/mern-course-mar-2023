import { createPortal } from "react-dom"
import MuiModal from '@mui/material/Modal'
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

const domNode = document.getElementById("modal-root");

const Modal = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div style={{ width: 200, height: 100, position: 'relative', zIndex: 3, borderWidth: 1, borderColor: '#444', padding: 10, overflow: 'auto' }}>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {
        open ? createPortal((
          <div style={{ position: 'absolute', zIndex: 10, width: 300, height: 300, padding: 20, boxShadow: '2px 2px 5px #666' }}>
            <h1>Inner Content</h1>
            <button onClick={handleClose}>Close</button>
          </div>), domNode) : null
      }
    </div>
  )
}

export default Modal;