import { Button } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

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
