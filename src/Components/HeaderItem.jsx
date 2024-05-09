import React from 'react'

function HeaderItem({name,Icon}) {
    return (
        <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer underline-offset-8 hover:underline'>
            <Icon />
            <h2>{name}</h2>  
        </div>
    )
}

export default HeaderItem