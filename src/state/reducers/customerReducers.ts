const initialState = {
    customers: [],
    loading: true
}

const customerReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case "createCustomerProfile": 
            return {
                ... state,
                createCustomerData: action.payload,
                loading: false
            }

        case "customerLogin": 
            return {
                ... state,
                customerLoginData: action.payload,
                loading: false
            }

        default: 
            return state
    }
}

export default customerReducers;