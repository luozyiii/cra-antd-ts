import { FC } from 'react';
import { Button } from 'antd';
import { isArray } from 'lodash-es';
import './App.less';
import styles from '@/app.module.less';
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
