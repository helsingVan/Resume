var data = {
	skill: {
		0: '熟悉W3C标准，对表现与数据分离，Web语义化有深刻理解，'
			+'致力于编写结构清晰，语义明确的HTML页面。',
		1: '熟练掌握HTML、CSS，熟悉HTML5、CSS3新特性，如H5媒体元素、LocalStorage、websocket，C3动画、flex布局等。',
		2: '熟练掌握JS，熟悉其核心技术DOM、BOM、Ajax等，熟悉闭包、继承、作用域等重要特性，掌握'
			+ '面向对象编程，拥有清晰的编码思路及整洁的代码风格。',
		3: '熟练掌握JS类库的使用，如jquery、zepto、underscore等，了解其运行机制。',
		4: '熟悉前端MVVM框架Vue、knockout，使用Vue结合vue-router、vuex等进行组件化开发，构建webApp。',
		5: '熟悉数据可视化图表库echarts.js。',
		6: '熟悉前端常用ui框架，如jqueryUI、Bootstrap、Ant Design、vue-element。',
		7: '了解Node的使用，搭配express框架，搭建web服务。',
		8: '了解前端自动化构建工具webpack的使用。'
	},
	otherSkill: {
		0: '对前后端分离、webApp、数据可视化，有浓厚兴趣。',
		1: 'github、stackoverflow、mdn重度使用者。'
	},
	work: [
		{
			time: '2016.06.06 - 至今',
			home: '百度（外派）',
			work: '百度金融风控管理项目组',
			main: [
				'负责项目组主线产品Rimbi（百度金融数据可视化）及有数平台的前端开发工作。',
				'参与产品技术架构的制定和优化，开拓和引入新的技术。',
				'与后台工程师进行交流与配合，共同实现业务方案，推进产品的持续改进。',
				'相关迭代优化工作。'
			]
		},
		{
			time: '2014.05.10-2016.05.20',
			home: '武汉拓普伟域网络有限公司（一路乐旅游）',
			work: '技术部',
			main: [
				'负责一路乐旅游网站以及移动端推广页开发工作。',
				'参与项目技术方案制定，进行相关的设计与开发工作。',
				'调研新技术和优化方案，对产品进行迭代优化，提升用户体验。'
			]
		}
	],
	project: [
		{
			time: '2016.06.06-至今',
			name: '百度金融Rimbi',
			general: 'Rimbi是一个大数据展示平台，基于百度金融产品线的流量数据，深度挖掘，深度分析，致力于为风控团队提供丰富的产品数据展示。',
			technology: [
				'1.x.x版本：Echarts，sea.js，bootstarp，jquery，handlebars',
				'2.x.x版本：Echarts，Vue，Vuex，bootstarp',
				'移动web版: Echarts，Vux'
			],
			work: [
				'项目1.0版本产品量不多，采用的是模块化开发，鉴于后期产品线比较多，但UI层都大体相同，申请采用组件化开发，便于项目的维护与管理，并成功引入Vue；',
				'鉴于每条产品都有图表展示，使用vue与echarts结合，封装成ui组件，达到接收不同的数据和配置，展示不同的数据可视效果图；',
				'移动web的Rimbi为轻量版，只展示重要产品线数据，为快速开发上线，采用Vux组件库，构建成webApp，提高用户体验。'
			]
		},
		{
			time: '2016.11.01-至今',
			name: '有数平台',
			general: '有数平台是一个大数据服务平台，基于Rimbi金融风控丰富的数据源，建设完善的风控数据仓库集市，致力于为业务团队提供便捷高效的数据查询、数据分析、数据加工、数据获取等服务，有效提高数据任务的开发效率, 节约人力和时间成本。',
			technology: [
				'Hue，Django，Vue，Vuex'
			],
			work: [
				'基于hue系统，对其进行ui改造美化，还原UE设计稿效果95%以上',
				'系统已有模块采用的js框架是knockout，鉴于knockout性能瓶颈与拓展问题，在新模块采用Vue开发，对已有模块进行渐进式替换为Vue的方案。'
			]
		},
		{
			time: '2014.09-2015.06',
			name: '一路乐旅游官网',
			general: '旅游门户网站，致力于为游客打造最直观的旅游指南（现已转型app）',
			technology: [
				'jquery，bootstrap，swiper.js，underscore.js，art-template，sea.js'
			],
			work: [
				'对整站进行全响应式开发，适配pc、平板、手机，节约开发成本预算；',
				'对景点展示页采用瀑布流布局，懒加载方法，缩减整页渲染时间，提升用户体验；',
				'对轮播图方法，Loading方法，hover效果等方法进行封装，暴露接口，以备多页面重用，受此启发，学习sea.js，引入模块化开发方案。'
			]
		},
		{
			time: '2015.07-2016.05',
			name: '一路乐旅游app（推广页模块）',
			general: '智慧旅游技术服务平台',
			technology: [
				'zepto.js'
			],
			work: [
				'发现流式布局适配性不好，采用rem布局，适配各手机屏幕；',
				'部分手机浏览器不支持svg，图标icon全部采用web字体，缩减页面载入时间和流量，提升用户体验。'
			]
		}
	],
	education: {
		'毕业院校': '武汉大学东湖分校（2008.09~2011.07）   大专',
		'专业': '应用电子技术',
		'核心课程': 'C语言   汇编语言   单片机开发'
	},
	admin: {
		'年龄': 28,
		'籍贯': '湖北黄冈',
		'现居': '北京',
		'电话': '173-4652-3203',
		'邮箱': 'it.fan@foxmail.com',
		
	}
}