import { searchTypes } from '../helpers/constants';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (location) {
    const { hash } = location;
    const { keyword, passages } = searchTypes;

    const queryArr = hash.split('q=');
    
    if (hash === '' || queryArr.length === 1) return
    
    let response = {
        type: passages,
        query: queryArr[1],
    };
    
    if (hash.includes(keyword)) {
        response.type = keyword;
    }

    return response;
}