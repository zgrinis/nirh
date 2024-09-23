import { ViewAbout } from "./about";
import { ViewContacts } from "./contacts";
import { ViewHome } from "./home";

export const views:View[] =[
    {
        alias:'home',
        component:ViewHome,
        initial:true,
        title:"Home"
    },
    {
        alias:'about',
        title:'About me',
        component:ViewAbout,
    },
    {
        alias:'contacts',
        title:'Contacts',
        component:ViewContacts,
    },
]