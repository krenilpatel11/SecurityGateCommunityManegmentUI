import { Button } from "./Button";

const GOOGLE_AUTH_URL = "https://localhost:5001/api/auth/google";

export const GoogleLoginButton = () => (
  <Button onClick={() => (window.location.href = GOOGLE_AUTH_URL)} variant="ghost">
    Login with Google
  </Button>
);
