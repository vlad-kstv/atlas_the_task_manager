import { Button, Form, Input, Mentions, Transfer } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";

export default function CreateProjectPage() {

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item<string>
                    label="Project name: "
                    name="projectName"
                    rules={[{ required: true, message: 'Name of your project is required!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Description"
                    name="description"
                >
                <Input />
                </Form.Item>

                <Form.Item<string>
                    label="Additional members: "
                    name="members"
                >
                <Input />
                </Form.Item>

                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </>
    )
}