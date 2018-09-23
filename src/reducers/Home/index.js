import _ from 'lodash';

const initialState = {
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch (action.type) {

        default:
            return state;
    }
};

export default reducer;