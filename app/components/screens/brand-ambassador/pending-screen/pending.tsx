import React from 'react';
import RequestScreen from '../../request-screen/requestScreen';

const Pending = () => {
    const pendingRequestData = [
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
            title='Pending'
            total_registrations={59}
            requests={pendingRequestData}
        />
    )
}

export default Pending;