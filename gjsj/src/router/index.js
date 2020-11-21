import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shouye from '@/components/shouye'
import shangcheng from '@/components/shangcheng'
import company from '@/components/company'
import companyIntroduce from '@/components/companyIntroduce'
import leader from '@/components/leader'
import announcement from '@/components/announcement'
import Login from '@/components/Login'
import owner from '@/components/owner'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/shouye',
			name: 'shouye',
			component: shouye
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/owner',
			name: 'owner',
			component: owner
		},
		{
			path: '/shangcheng',
			name: 'shangcheng',
			component: shangcheng
		},
		{
			path: '/company',
			name: 'company',
			component: company,
			children: [{
					path: '/companyIntroduce',
					name: 'companyIntroduce',
					component: companyIntroduce,
				},
				{
					path: '/announcement',
					name: 'announcement',
					component: announcement,
				},
				{
					path: '/leader',
					name: 'leader',
					component: leader,
				},

			]
		}
	]
})
