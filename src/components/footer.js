import React from 'react'

export const Footer = () => {
    const date=new Date().getFullYear();
    return (
        <div style={{width:"100%",height:"auto"}}>
            <p>Power &copy; by Sagar {date}</p>
        </div>
    )
}
