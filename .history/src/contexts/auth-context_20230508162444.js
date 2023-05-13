const { createContext } = require("react");

const AuthContext = createContext();
function AuthProvider() {
  return <AuthContext.Provider></AuthContext.Provider>;
}
