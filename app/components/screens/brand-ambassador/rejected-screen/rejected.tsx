import React from 'react';
import RequestScreen from '../../request-screen/requestScreen';

const Rejected = () => {
    const rejectedRequestData = [
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
            title='Rejected'
            total_registrations={7}
            requests={rejectedRequestData}
        />
    )
}

export default Rejected;