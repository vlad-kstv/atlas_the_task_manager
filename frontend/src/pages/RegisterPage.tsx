import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './styles/AuthForm.css';
import Title from 'antd/es/typography/Title';

export default function RegisterPage() {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
    <div className='auth-form-wrapper'>
        <div className='form-div'>
            <Title level={3}>Atlas</Title>
            <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                    Register
                    </Button>
                    or <a href="">Log in now!</a>
                </Form.Item>
            </Form>
        </div>
    </div>
    );
};