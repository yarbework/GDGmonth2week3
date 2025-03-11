import UserProfile from "./UserProfile";
import { UserAuthProvider } from "./context API/UserAuthProvider";
import "./App.css";

function App() {
  return (
    <div className="app">
      <UserAuthProvider>
        <UserProfile />
      </UserAuthProvider>
    </div>
  );
}

export default App;
