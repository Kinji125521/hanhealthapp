// antd 需引入的函示庫組
import { Card, Form, Input, Checkbox, Button } from 'antd'
// import 'antd/dist/reset.css'
import logo from '@/assets/logo.png'
// 導入樣式文件
import './index.scss'

function Login () {
  function onFinish (values) {
    console.log(values)
    // values: 放置的是所有表單項中用戶輸入的內容
    // todo: 登錄
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed', errorInfo)
  }
  return (
    <div>
      <div className='login'>
        <Card className='login-container'>
          <img className='login-logo' src={logo} alt='' />
          {/* 登入表單 */}
          {/* 子項用到的觸發事件，需要在 Form 中都聲明一下才可以 */}
          <Form
            validateTrigger={['onBlur', 'onChange']}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '手機號碼不能為空!',
                },
                {
                  pattern: /^09\d{8}$/,
                  message: '手機號碼格式錯誤',
                  validateTrigger: 'onBlur'
                }
              ]}
            >
              <Input size="large" placeholder="請输入手機號碼" />
            </Form.Item>
            <Form.Item
              style={{ marginBottom: 10 }}
              name="password"
              rules={[
                {
                  required: true,
                  message: '驗證號碼不能為空!',
                },
                {
                  len: 6,
                  message: '驗證號碼長度不足',
                  validateTrigger: 'onBlur'
                }
              ]}
            >
              <Input size="large" placeholder="請输入驗證號碼" />
            </Form.Item>
            <Form.Item style={{ marginBottom: 10 }}>
              <Form.Item
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox className="login-checkbox-label">
                  保持登入
                </Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="https://www.google.com.tw/">
                忘記密碼?
              </a>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Form.Item style={{ marginBottom: 20 }}>
                <Button type="primary" htmlType="submit" size="large" block>
                  登入
                </Button>
              </Form.Item>
              若尚未登入過，需 <a className="login-form-register" href="https://www.google.com.tw/">立即註冊!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Login