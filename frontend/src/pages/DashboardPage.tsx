import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import { Card, Layout, Flex } from 'antd';
import { ProjectService } from '../api/projectService';
import { Button } from '@/components/ui/button';

const { Sider, Content } = Layout;

export default function DashboardPage() {

  useEffect(() => {
    const data = ProjectService.getProjectsByUserId(1);
    console.log(data);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" width={256} style={{ borderRight: '1px solid #f0f0f0' }}>
        <Navbar />
      </Sider>

      <Layout>
        <h1>Recent</h1>
        <Content style={{ padding: '24px', background: '#f5f5f5' }}>
          <Flex gap="middle" wrap="wrap">
            <Button>Test</Button>
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