import React from 'react';

function Scroll(props: any) {
    return (
        <div style={{ overflow: 'auto', border: '5px solid black', height: '75vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;