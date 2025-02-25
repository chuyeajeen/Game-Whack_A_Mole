import React, {useState} from 'react';
import TextInput from "./components/atomic/textInput";
import Landing from "./pages/landing";
import Router from "./router";

const App: React.FC = () => {
  const [state, setState] = useState('');
  return <Router/>
};

export default App;
