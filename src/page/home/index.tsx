import { Space, Button } from 'antd';
import { Link } from 'react-router-dom';

const Component: React.FC = () => {
  return (
    <>
      <p>首页功能测试</p>
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
    </>
  );
};

Component.displayName = 'Home';

export default Component;
