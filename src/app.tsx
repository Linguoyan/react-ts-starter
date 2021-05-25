import React from 'react';
import Header from '@/components/header';
import logo from '@/assets/favicon.png';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps): JSX.Element {
  const { name, age } = props;
  return (
    <div className="app">
      <Header />
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
      <img src={logo} alt="啥子" />
    </div>
  );
}

export default App;
