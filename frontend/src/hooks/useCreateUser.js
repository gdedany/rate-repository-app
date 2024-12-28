import { SIGN_UP } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
const useCreateUser = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const createUser = async ({ username, password }) => {
    mutate({ variables: { user: { username, password } } });
  };

  return [createUser, result];
};

export default useCreateUser;
