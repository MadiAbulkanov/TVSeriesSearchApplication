
interface ShowInfoProps {
    image: {
        medium: string;
    }
    name: string;
    type: string;
    language: string;
    premiered: string;
    summary: string;
}

export type ShowInfoState = {
    showInfo: ShowInfoProps;
}

type ShowInfoAction = { type: 'SHOW_INFO'; payload: ShowInfoProps };

const showInfoReducer = (state: ShowInfoState, action: ShowInfoAction): ShowInfoState => {
    switch (action.type) {
        case 'SHOW_INFO':
            return { ...state, showInfo: action.payload };
        default:
            return state;
    }
};

export default showInfoReducer;