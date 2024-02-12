import { Home } from "../pages/home";
import { Pages } from '../pages/pages'
import { Products } from "../pages/products";
import { Blog } from '../pages/blog'
import { Shop } from "../pages/shop";
import { Contact } from "../pages/contact";

export const pages = [
    {
        component: <Home />,
    },
    {
        component: <Pages />,
        path: '/pages',
    },
    {
        component: <Products />,
        path: '/products',
    },
    {
        component: <Blog/>,
        path: '/blog',
    },
    {
        component: <Shop/>,
        path: '/shop',
    },
    {
        component: <Contact/>,
        path: '/contact',
    },
]