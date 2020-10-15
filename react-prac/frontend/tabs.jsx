import React from 'react';
class Headers extends React.Component{
    render(){
        const selected = this.props.selectedTab;
        const headers = this.props.panes.map((pane,index)=>{
            const title = pane.title;
            const klass = index === selected ? 'active' : '';
            return(
                <li
                key={index}
                className={klass}
                onClick={() => this.props.onTabChosen(index)}>
                    { title }
                </li>
            )
        });
        return (
            <ul className='tab-header'>
                {headers}
            </ul>
        );
    }
}

export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:0
        };
        this.selectTab = this.selectTab.bind(this)
    };
    selectTab(index){
        this.setState({ selectedTab: index })  
    }
    render(){
        const pane = this.props.panes[this.state.selectedTab];
        return (
            <div className='table'>
                <Headers
                    selectedTab = {this.state.selectedTab}
                    onTabChosen = {this.selectTab}
                    panes = {this.props.panes}
                />
                <div className='tab-content'>
                    {pane.content}
                </div>
            </div>
            
        )
    }
};