import { ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Button type="primary" icon={<ArrowDownOutlined />}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
