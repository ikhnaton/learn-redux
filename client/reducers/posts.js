// a reducer takes in two things

// 1) the action (information about what happened)
// 2) a copy of current state

function posts(state = [], action)
{
//	console.log("This post will change");
//	console.log(state, action);
	switch(action.type)
	{
		case 'INCREMENT_LIKES':
			const newState = [...state.slice()];
			newState[action.index].likes = state[action.index].likes + 1;
			return newState;

		default:
			return state;
	}


	return state;
}

export default posts;
