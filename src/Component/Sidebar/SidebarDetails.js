import {IoWalletOutline} from 'react-icons/io5';
import {BiHomeAlt} from 'react-icons/bi';
import {SlTag} from 'react-icons/sl';
import {FiBarChart2} from 'react-icons/fi';
import {FiMessageCircle} from 'react-icons/fi';
export const SidebarDetails = [
    {
        title:"Overview",
        icon:<BiHomeAlt/>,
        link:"/"
    },
    {
        title:"Cards",
        icon:<IoWalletOutline/>,
        link:"/card"
    },
    {
        title:"Transactions",
        icon:<SlTag/>,
        link:"/transaction"
    },
    {
        title:"Reports",
        icon:<FiBarChart2/>,
        link:"/receipt"
    },
    {
        title:"Chats",
        icon:<FiMessageCircle/>,
        link:"/chatoverview"
    },
]