
export type TournamentCard = {
    clubName: string;
    date: string;
    time: string;
    onPress: any;
}

export type MatchCard = {
    player_1_name: string;
    player_2_name: string;
    player_1_img?: any;
    player_2_img?: any;
    match_no: number
    matchDay: string;
    matchTime: string;
    matchLocation: string;
    onPress: () => void;
}