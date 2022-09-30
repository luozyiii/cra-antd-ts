export interface RouteItemProps {
  icon?: string; // 图标
  path?: string; // 路由
  title?: string;
  to?: string;
  role?: string; // 权限码
  index?: any;
  element?: React.ReactNode; // 页面组件
  menu?: boolean; // 菜单是否显示
  children?: RouteItemProps[]; // 子路由
}
