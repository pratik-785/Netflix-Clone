export const initialState = {
    saved: []
}

const Reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_SAVED':
            return{
                ...state,
                saved: [...state.saved, action.item],
            };

            case "REMOVE_FROM_SAVED":
                    const index = state.saved.findIndex(
                        (savedItem) => savedItem.id === action.id
                    );
                    let newSaved = [...state.saved];

                    if(index >= 0){
                        newSaved.splice(index, 1);

                    }else{
                        console.log(`Can't remove product (id: ${action.id}) as its not in basket!`)
                    }

                    // return {
                    //     ...state,
                    //     saved: newSaved
                    // }

            default: 
            return state;
    }
}

export default Reducer; 