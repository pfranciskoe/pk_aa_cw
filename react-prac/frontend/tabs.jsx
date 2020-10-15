import React from 'react';
class Header extends React.Component{
    render(){
    }
}















export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:1
        };
        this.selectTab = this.selectTab.bind(this)
    };
    selectTab(){}
    render(){
        const tab1 = 'I am Tab 1'
        const tab2 = 'I am not not Tab 2'
        const tab3 = 'Some people call me Tab 3'
        return (
            <div className='table'>
                <div className='tabs'>
                    <div className='tab'>tab1</div>
                    <div className='tab'>tab2</div>
                    <div className='tab'>tab3</div>
                </div>
                <div className='tab-content'>

                </div>
            </div>
            
        )
    }
};