export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const storeData = (name, address) => {
    // console.log(name,address);
    return {
        type: "STOREDATA",
        payload: {
            id: Date.now(),
            name: name,
            address: address
        }
    }
}

export const updateStoreData = (obj) => {
    return {
        type: "UPDATESTOREDATA",
        payload : obj
    }
}