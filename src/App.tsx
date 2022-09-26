import { FC } from 'react';
import { Button } from 'antd';
import { isArray } from 'lodash-es';
import './App.css';
import styles from '@/app.module.scss';
console.log('styles', styles);
console.log(isArray);

const App: FC = () => {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;
