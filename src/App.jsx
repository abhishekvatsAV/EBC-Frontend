import { useEffect } from "react";
import { encryptDataAndSendtoServer } from "encrypted-binary-communications";

function App() {
  const data = "hello World";
  useEffect(() => {
    encryptDataAndSendtoServer(data);
  }, []);

  return <div>Hello</div>;
}

export default App;
