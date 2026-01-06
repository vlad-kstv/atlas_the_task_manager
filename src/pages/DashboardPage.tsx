import Navbar from '../components/layout/Navbar';
import { Card, Layout, Flex } from 'antd';

const { Sider, Content } = Layout;

export default function DashboardPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" width={256} style={{ borderRight: '1px solid #f0f0f0' }}>
        <Navbar />
      </Sider>

      <Layout>
        <Content style={{ padding: '24px', background: '#f5f5f5' }}>
          <Flex gap="middle" wrap="wrap">
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
            </Card>
            
            <Card title="Second card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>More content</p>
            </Card>

            <Card title="Third card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Even more content</p>
            </Card>
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}