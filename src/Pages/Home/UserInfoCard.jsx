import React from 'react'

const UserInfoCard = () => {
    return (
        <div className='flex flex-col bg-black/40 rounded-lg items-center p-6 w-96 h-full hover:scale-105'>
            <h1 className='text-3xl py-3 font-bold text-warning'>Usuario</h1>
            <div className="avatar">
                <div className="w-44 lg:w-60 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/129445798?v=4" />
                </div>
            </div>
            <div className='divider' />
            <div className='text-center'>
                <h1 className='text-3xl'>Jonathan</h1>
                <h1 className='text-2xl'>Aragón Aragón</h1>
            </div>
        </div>
    )
}

export default UserInfoCard