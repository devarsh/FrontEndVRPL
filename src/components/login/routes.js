import  { LoginHeader,LoginBody } from './components/login.js'
import  { ForgotHeader,ForgotBody } from './components/forgot.js'



const Items = [
    {
        label:'Login',
        key:1,
        HeaderComponent: LoginHeader,
        BodyComponent: LoginBody,
        path: ['/login'], 
        protected: false
    },
    {
        label:'Forgot',
        key:2,
        HeaderComponent: ForgotHeader,
        BodyComponent: ForgotBody,
        path:'/forgot',
        protected: true
    },

]

export const PathIndex = (path) => {
    let i=0;
    for(i=0;i< Items.length; i++) {
        if (Items[i].path === path) {
            return Items[i].key
        }
    }
    return -1
}

export default Items