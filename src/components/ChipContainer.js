import React, {Component} from 'react';
var test=["dfdf"];
class ChipContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chips: [],

        }
        this.updateChips = this.updateChips.bind(this);
        this.removeChip = this.removeChip.bind(this);

    }
    removeChip(chipName){
        this.props.update(chipName);
    }
    updateChips(ourChips) {
        this.setState({chips: ourChips});
    }

    render() {
        if(this.state.chips.length!==0){
            var chips = this.state.chips.map((item)=>{
                var classN=item.replace(" ","-").replace("'","").toLowerCase();
                return<div className={"chip chip-"+classN}>
                        <div className="chip-content">{item}</div>
                        <div className={"chip-close "+classN} onClick={()=>{this.removeChip(item)}}>
                            <svg className="chip-svg" focusable="false" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                            </svg>

                        </div>
                    </div>})
        }
        return (
            <div className="chip-container">
                {chips}
            </div>
        )
    }
}

export default ChipContainer;