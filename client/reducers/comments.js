// a reducer takes in two things

// 1) the action (information about what happened)
// 2) a copy of current state
function postComments(state = [], action)
{
	switch(action.type)
	{
		case 'ADD_COMMENT':
			{
				const newState = [...state, {user: action.author, text: action.comment }];
				return newState;
			}

		case 'REMOVE_COMMENT':
			{
				const newState = [...state];
				newState.splice(action.index,1);
				return newState;
			}

		default:
			return state;
	}

}

function comments(state = [], action)
{
	console.log(state, action);
	switch(action.type)
	{
		case 'ADD_COMMENT':
			{
				const newState = {...state,[action.postId]: postComments(state[action.postId], action)};
				return newState;
			}

		case 'REMOVE_COMMENT':
			{
				const newState = {...state,[action.postId]: postComments(state[action.postId], action)};
				return newState;
			}

		default:
			return state;
	}

	return state;
}

export default comments;
