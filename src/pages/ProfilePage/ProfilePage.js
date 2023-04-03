import React from 'react'
import { useParams } from 'react-router-dom'

export const ProfilePage = () => {
    let { userId } = useParams()
    return (
        <div>ProfilePage: {userId}</div>
    )
}
