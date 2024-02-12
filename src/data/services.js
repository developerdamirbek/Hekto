import { nanoid } from "nanoid";
import {DeliveryIcon} from '../assets/icons/delivery-icon'
import {SupportIcon} from '../assets/icons/support-icon'
import {CashbackIcon} from '../assets/icons/cashback-icon'
import {PremiumIcon} from '../assets/icons/premium-icon'

export const services = [
    {
        id: nanoid(),
        img: DeliveryIcon,
        title: "24/7 Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        id: nanoid(),
        img: CashbackIcon,
        title: "24/7 Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        id: nanoid(),
        img: PremiumIcon,
        title: "24/7 Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
        id: nanoid(),
        img: SupportIcon,
        title: "24/7 Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
]