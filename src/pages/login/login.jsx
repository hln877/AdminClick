import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import './login.less'
import logo from './images/logo.png'
// import create from '@ant-design/icons/lib/components/IconFont';
export default class Login extends Component {
     

    render() {
        // const {getFieldDecorator} = this.props.Form

        const onFinish = values => {
            console.log('Received values of form: ', values);
          };
        
     return (
            <div className="login">
                <div className='login-header'>
                    <img src={logo} alt=""/>
                    <h1>小柴文创</h1>
                </div>
                <div className='login-content'>
                    <h1>用户登录</h1>
                    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item 
        name="username"
        initialValue=""
        rules={[
            { 
                required: true, 
                message: 'Please input your Username!' 

            },
            {
                min:4,
                message:'用户名不能小于四位数'
            },
            {
                max:12,
                message:'用户名要小于12位'
            },
            {
                pattern:/^[a-zA-Z0-9_]+$/
            }
            
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        initialValue=""
        rules={[
            () => ({
                validator(rule, value) {
                  if (!value) {
                    return Promise.reject('密码必须输入')
                  }else if(value.length<4){
                    return Promise.reject('密码要大于四位')
                  }else if(value.length>12){
                    return Promise.reject('密码小于12位')
                  }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
                    return Promise.reject('密码格式不对')

                  }else{
                    return Promise.reject()

                  }
                //   return Promise.reject('The two passwords that you entered do not match!');
                }
              }),
         
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        </Form.Item>
        </Form>
                </div>
            </div>
        )
    }
}

// const WrapperForm = Form.create()(Login)
// export default WrapperForm

