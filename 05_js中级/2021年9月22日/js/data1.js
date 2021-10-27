Mock.setup({ timeout: '1000-4000' });
Mock.mock('chuli.php','get', {
    "data|1-6": [{   // 随机生成1到6个数组元素
	    'sno|+1': 88,    // 属性值自动加 1，初始值为88
        'sname|1': ['tom',"jarry","susan"],        
        'sage|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'sdept|1':['cs','ma','is','ca'],
		'sgender|1':['男',"女"]
    }]
});
