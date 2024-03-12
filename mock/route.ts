export default [
    {
        url: '/route/list',
        method: 'get',
        response: () => {
            return {
                code: 200,
                data: [
                    {
                        id: 1,
                        name: '首页',
                        path: '/home',
                        component: 'home',
                        icon: 'home',
                        children: [],
                    },
                    {
                        id: 2,
                        name: '用户管理',
                        path: '/user',
                        component: 'user',
                        icon: 'user',
                        children: [
                            {
                                id: 3,
                                name: '用户列表',
                                path: '/user/list',
                                component: 'userList',
                                icon: 'userList',
                                children: [],
                            },
                            {
                                id: 4,
                                name: '用户详情',
                                path: '/user/detail',
                                component: 'userDetail',
                                icon: 'userDetail',
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 5,
                        name: '角色管理',
                        path: '/role',
                        component: 'role',
                        icon: 'role',
                        children: [
                            {
                                id: 6,
                                name: '角色列表',
                                path: '/role/list',
                                component: 'roleList',
                                icon: 'roleList',
                                children: [],
                            },
                            {
                                id: 7,
                                name: '角色详情',
                                path: '/role/detail',
                                component: 'roleDetail',
                                icon: 'roleDetail',
                                children: [],
                            },
                        ],
                    },
                ],
            }
        }
    }
]