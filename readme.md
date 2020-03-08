登录：

```
后端返回：
	{
		name,  // 用户姓名
		company, // 用户公司
		task: // 与该用户挂钩的二维数组， eg： task:[[taskId, taskName],[taskId, taskName]……]
	}

```







切换到协作者单聊列表：

```
前端发送：

	{
		username // 用户手机号
		
	}

后端返回：
	{
		friend // 与该用户挂钩的二维数组，存放他的好友列表信息eg: 
		// friend:[[friendName, friendCompany],[friendName,friendCompany],[friendName,friendCompany]......]
	}


```

