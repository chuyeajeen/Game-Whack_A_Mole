import React, {useState} from 'react';
import TextInput from "./components/atomic/textInput";
import Landing from "./pages/landing";

const App: React.FC = () => {
  const [state, setState] = useState('');
  return <Landing/>
};

export default App;
