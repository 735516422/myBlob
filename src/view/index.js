import React,{ lazy, Suspense }from 'react'
import Loading from '../component/loading'
import InkButton from '../component/button/InkButton'
import GraButton from '../component/button/graButton'
//import Back from './back'
//const Back = lazy(() => import('./back'))
export default class index extends React.Component{
    render(){
        return (
            <Suspense fallback={<Loading />}>
                {/* <Loading></Loading> */}
                <InkButton></InkButton>
                <GraButton></GraButton>
            </Suspense>
        );
    }
}