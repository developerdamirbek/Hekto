import { nanoid } from "nanoid";
import Img1 from '../assets/images/p-img1.png'
import Img2 from '../assets/images/p-img2.png'
import Img3 from '../assets/images/p-img3.png'
import Img4 from '../assets/images/p-img4.png'
import Img5 from '../assets/images/p-img5.png'
import Img6 from '../assets/images/p-img9.png'
import Img7 from '../assets/images/p-img7.png'
import Img8 from '../assets/images/p-img8.png'
import Img10 from '../assets/images/p-img10.png'
import Img11 from '../assets/images/p-img12.png'
import banner1 from '../assets/images/p-img17.png'
import banner2 from '../assets/images/p-img16.png'

export const featuredProducts =[
    {
        id: 1,
        img: Img1,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
    {
        id: 2,
        img: Img2,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
    {
        id: 3,
        img: Img3,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
    {
        id: 4,
        img: Img4,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
    {
        id: 5,
        img: Img5,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
    {
        id: 6,
        img: Img6,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
    {
        id: 7,
        img: Img7,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
    {
        id: 8,
        img: Img8,
        title: "Cantilever chair",
        code: "Code - Y523201",
        price: "$42.00"
    },
]

export const trendingProducts = [
    [
        {
            id: nanoid(),
            img: Img6,
            name: "Cantilever chair",
            price: "$26.00",
            oldPrice: "$42.00"
        },
        {
            id: nanoid(),
            img: Img10,
            name: "Cantilever chair",
            price: "$26.00",
            oldPrice: "$42.00"
        },
        {
            id: nanoid(),
            img: Img11,
            name: "Cantilever chair",
            price: "$26.00",
            oldPrice: "$42.00"
        },
        {
            id: nanoid(),
            img: Img8,
            name: "Cantilever chair",
            price: "$26.00",
            oldPrice: "$42.00"
        },
    ],
    [
        {
            id: nanoid(),
            name: "23% off in all products",
            img: banner1
        },
        {
            id: nanoid(),
            name: "23% off in all products",
            img: banner2
        },
    ]
]