export const createProject = (project) =>{

    return (dispatch, getState) =>{
        //make a sync call to database before dispatching the action
        dispatch({type: 'CREATE_PROJECT', project: project})
    }
}