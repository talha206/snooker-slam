import React from 'react';
import RequestScreen from '../../request-screen/requestScreen';

const Approved = () => {
    const approvedRequestData = [
        {
            club_name: 'Ball Smashers',
            club_owner_name: 'John Doe',
        },
        {
            club_name: 'Ball Smashers',
            club_owner_name: 'John Doe',
        },
    ]
    return (
        <RequestScreen
            title='Approved'
            total_registrations={10}
            requests={approvedRequestData}
        />
    )
}

export default Approved;