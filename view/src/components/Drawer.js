import React from 'react'

export default function Drawer({show,children}) {
    return (
        <div className="drawer" hidden={show}>
            {children}
        </div>
    )
}
