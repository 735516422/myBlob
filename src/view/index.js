import React,{ lazy, Suspense }from 'react'
import Loading from '../component/loading'
import InkButton from '../component/button/InkButton'
import GraButton from '../component/button/graButton'
import AniText from '../component/aniText'
//import Back from './back'
//const Back = lazy(() => import('./back'))
export default class index extends React.Component{
    render(){
        return (
            <Suspense fallback={<Loading />}>
                {/* <Loading></Loading> */}
                <InkButton></InkButton>
                <GraButton></GraButton>
                <AniText text={"sword art online"}></AniText>
                <AniText text={"欢迎来到我的博客"}></AniText>
            </Suspense>
        );
    }
}