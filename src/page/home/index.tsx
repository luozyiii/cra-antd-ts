import { Card, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import BearCom from './component/bear';
import HelloWorld from './component/hello-world';

const Component: React.FC = () => {
  return (
    <>
      <p>首页功能测试</p>
      <Card>
        <Space>
          <Button>
            <Link to={`/login`}>登录</Link>
          </Button>
          <Button type="primary">
            <Link to={`/system/menu`}>系统管理-菜单管理</Link>
          </Button>
          <Button type="primary">
            <Link to={`/system/user/list`}>系统管理-用户管理</Link>
          </Button>
          <Button type="primary">
            <Link to={`/system/user/online`}>系统管理-在线用户</Link>
          </Button>
        </Space>
      </Card>
      <br />
      <Card>
        <h3>zustand React Hook 状态管理</h3>
        <BearCom />
        <HelloWorld />
      </Card>
    </>
  );
};

Component.displayName = 'Home';

export default Component;
