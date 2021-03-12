import store from "../store";

const select = (state) => {
    return state.videos;
};

export const subscribe = (callback) => {
    let currentValue;

    const handleChange = () => {
        let previousValue = currentValue
        currentValue = select(store.getState())

        if (previousValue !== currentValue) {
            callback();
        }
    };

    return store.subscribe(handleChange);
};