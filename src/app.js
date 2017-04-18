import bootstrap from './framework'

import MyBlank from './myapp/Blank'
import Index from './myapp/Index'
import Main from './myapp/Main'
import Forms from './myapp/Forms'
import SamplePages from './myapp/SamplePages'
import SecondPage from './myapp/SecondPage'
import ThirdLevelItem from './myapp/ThirdLevelItem'
import FourOhFour from './myapp/FourOhFour'
import WritingAPage from './myapp/WritingAPage'
import logo from './myapp/logo-2048x2048.png'

import './myapp/app.css'
/** @type {ModuleConfig} */
const moduleConfig = {
    title: "Sample Module",
    logo,
    basename: () => {
        if (location.host === "trajano.github.io") {
            return "/reactjs-admin"
        } else {
            return ""
        }
    },
    notFoundComponent: FourOhFour,
    content: [
        {
            icon: 'dashboard',
            to: '/',
            component: Main,
            aliases: ['/index.html'],
            label: 'Dashboard'
        },
        {
            icon: 'bar-chart-o',
            label: 'Charts',
            content: [
                {
                    to: '/flot.html',
                    label: 'Flot Charts',
                    component: ThirdLevelItem
                },
                {
                    to: '/morris.html',
                    label: 'Morris.js Charts',
                    component: ThirdLevelItem
                }

            ]
        },
        {
            icon: 'edit',
            to: '/forms',
            component: Forms,
            label: 'Forms'
        },
        {
            icon: 'sitemap',
            label: 'Multi-Level Dropdown',
            content: [
                {
                    label: 'Writing a Page',
                    to: '/s1',
                    aliases: ['/index2.html', '/writing'],
                    component: WritingAPage
                },
                {
                    label: 'Second Level Item',
                    to: '/s2',
                    component: Forms
                },
                {
                    label: 'Third Level',
                    content: [
                        {
                            label: 'Third Level Item',
                            to: '/t1',
                            component: ThirdLevelItem,
                        },
                        {
                            label: 'Third Level Item', to: '/t2',
                            component: ThirdLevelItem,
                        },
                        {
                            label: 'Third Level Item', to: '/t3',
                            component: ThirdLevelItem,
                        },
                        {
                            label: 'Third Level Item', to: '/t4',
                            component: ThirdLevelItem,
                        }
                    ]
                }

            ]
        },

        {
            icon: 'files-o',
            label: 'Sample Pages',
            to: "/sample",
            component: SamplePages,
            content: [
                {
                    icon: 'files-o',
                    to: '/blank.html',
                    component: SecondPage,
                    label: 'Blank Page'
                },
                {
                    to: '/login.html',
                    component: MyBlank,
                    label: 'Login Page'
                }

            ]
        }
    ]
}
bootstrap(moduleConfig)
