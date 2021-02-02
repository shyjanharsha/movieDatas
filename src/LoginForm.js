import React,{useState} from 'react';
import { Form, Input, Button } from 'antd';
import  {useHistory} from 'react-router-dom';



function LoginForm(props){
	const [name, setName] = useState('shyjan');

	const [passwords,setpasswords] = useState('shyjanharsha')
	const history = useHistory()
	const onFinish = (values) => {
		if(values.username == name && values.password == passwords){
			props.setIsLoggedIn(true)
			history.push("/movies")
		}
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
	return(
		<>
		{!props.isLoggedIn && (<Form
      		name="basic"
      		initialValues={{
        	remember: true,
      		}}
      		onFinish={onFinish}
       	    onFinishFailed={onFinishFailed}
    	>
	        <Form.Item
		        label="Username"
		        name="username"
		        rules={[
		          {
		          	required: true,
		            message: 'Please input your username!',
		          }
		        ]}
	      	>
        		<Input />
      		</Form.Item>

	        <Form.Item
		        label="Password"
		        name="password"
		        rules={[
		          {
		          	required: true,
		            message: 'Please input your password!',
		          }
		        ]}
		    >
        		<Input.Password />
      		</Form.Item>

    		<Form.Item >
       			<Button type="primary" htmlType="submit">
         			submit
        		</Button>
      		</Form.Item>
    	</Form>)}
    	</>
	);
}

export default LoginForm;