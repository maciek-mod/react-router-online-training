import React from 'react';
import events from '../data/events';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            event: {}
        };
    }
    getEvent(){
        const id = this.props.match.params.eventId;
        const event = events.find(item => item.id === parseInt(id, 10));
        return event;
    }
    componentDidMount(){
        this.setState({
            event: this.getEvent()
        });
    }

    componentDidUpdate(){
        const event = this.getEvent();

        if (event.id !== this.state.event.id) {
            this.setState({
                event
            });
        }
    }

    render(){
        const { name, place, date, time} = this.state.event;
        return(
            <div>
                <strong>Nazwa: {name}</strong><br />
                Gdzie: {place}<br />
                Kiedy: {date} - {time}<br />
            </div>
        );
    }

}


export default Details;
