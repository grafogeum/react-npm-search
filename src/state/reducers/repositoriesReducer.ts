import { AppFS } from '../../types'
import { ActionType } from "../action-types";
import { Action } from "../actions";

const reducer = (state: AppFS.RepositoriesState, action: Action ): AppFS.RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: []}
    default:
      return state;
  }
}

export default reducer