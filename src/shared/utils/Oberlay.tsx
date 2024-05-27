import React from 'react';

type OverlayProps = {
    show: boolean
}

function Overlay({ show }: OverlayProps) {
    const overlayStyles: any = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: show ? 'block' : 'none',
        zIndex: 9999,
    };

    return <div style={overlayStyles}>
        <img src="https://media.giphy.com/media/Saavhnp9YYN7a/giphy.gif" alt="git" />
    </div>;
}

export default Overlay;