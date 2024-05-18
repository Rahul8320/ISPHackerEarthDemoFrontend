import { Header } from "./Components/Custom/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        <HomePage />
      </main>
      {/* Footer */}
      <footer>Made with 💖 by Rahul Dey</footer>
    </>
  );
}

export default App;
