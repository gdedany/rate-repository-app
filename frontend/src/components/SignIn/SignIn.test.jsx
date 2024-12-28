import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import SignInContainer from "./SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();

      render(<SignInContainer onSubmit={onSubmit} />);
      const usernameField = screen.getByPlaceholderText("username");
      const passwordField = screen.getByPlaceholderText("password");
      submitButton = screen.getByText("Sign In");
      fireEvent.changeText(usernameField, "kalle");
      fireEvent.changeText(passwordField, "password");
      fireEvent.press(submitButton);
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
