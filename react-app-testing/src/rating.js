import React from 'react';

class Rating extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const width = this.props.rating.toFixed(1) * 10;
        const color = this.props.color ? this.props.color : '#EE0000';
        return (
            <div className="star-rating">
                <div className="star-rating-top" style={{ color: color, width: width + '%' }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="star-rating-bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default Rating;
