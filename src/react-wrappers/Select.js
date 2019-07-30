import React ,{Component} from 'react';

class Select extends Component{
    constructor(props){
        super(props);
        this.selectRef = React.createRef();

    }
    componentDidMount = ()=>{
        let node = this.selectRef.current;
        document.addEventListener('initializeScripts',function(ev){
            window.$(node).selectpicker();
        })
    };
    componentDidUpdate = ()=>{
        console.log('update');
        window.$(this.selectRef.current).selectpicker();
    };
    render(){
        let {children, className , name} = this.props;
        return(
            <select ref = {this.selectRef} className={className} name={name}>
                {children}
            </select>
        )
    }
    componentWillUnmount = ()=>{
        window.$(this.selectRef.current).remove();
    }
}

export default Select;