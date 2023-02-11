const initialStoredData = [];

const dataStorage = (state = initialStoredData, action) => {
    switch (action.type) {
        case "STOREDATA":
            const data = action.payload;
            return (
                [...state, data]
            )
        case "UPDATESTOREDATA":
            const updatedData = action.payload;
            const newData = state.map(ele=> ele.id === updatedData.id ? updatedData : ele);
            return(
                [...newData]
            )
        default:
            return (
                state
            )
    }
}

export default dataStorage