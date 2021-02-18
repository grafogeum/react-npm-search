export namespace AppFS {
  interface RepositoriesState {
    loading: boolean;
    error: string | null
    data: Array<string>
  }

  interface Action {
    type: string;
    payload?: any
  }

}