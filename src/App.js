import { Principal } from "./Components/main/Principal";
import { LanguageProvider } from "./Context/LanguageContext";

function App() {
  return(
    <LanguageProvider>
      <Principal/>
    </LanguageProvider>
  );
}

export default App;
