let initialState = {
    contactList: [],
    keyword: "",
};

// reducer는 항상 state, action 두개의 arguments가 있다.
function reducer(state = initialState, action) {
    console.log("...state:", { ...state });
    console.log("받은action", action);

    // 객체 destructuring 문법, action은 항상 type과 payload를 가지고 있기 때문에
    // 즉 type: action.type / payload: action.payload 이므로 반복되는 action을 아래의 선언으로 줄임
    const { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contactList: [
                    ...state.contactList, // 기존 값을 유지하고
                    // 뒤에 객체를 더해줌
                    {
                        name: payload.name,
                        phoneNumber: payload.phoneNumber,
                    },
                ],
                keyword: payload.keyword,
            };
        case "SEARCH_BY_NAME":
            return { ...state, keyword: payload.keyword };
        case "VIEW_ALL_LIST":
            return { ...state, keyword: payload.keyword };
        default:
            return { ...state };
    }
}

export default reducer;
