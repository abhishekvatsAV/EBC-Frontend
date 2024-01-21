import { useEffect } from "react";
import { encryptDataAndSendtoServer } from "encrypted-binary-communications";

function App() {
  const data = { key1: "value1", key2: "value2", key3: "value3" };
  useEffect(() => {
    // encryptDataAndSendtoServer(ctx, req, endpoint, state, data)
    encryptDataAndSendtoServer(0, 0, 0, 4, data);
  }, []);

  return <div>Hello</div>;
}

export default App;
