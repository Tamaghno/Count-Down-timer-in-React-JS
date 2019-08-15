import React,{Component} from 'react';


export default class Clock extends Component {
    
constructor(props){
      super(props);
      this.state={
        days:0,
        hours:0,
        mins:0,
        secs:0
      }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline),1000);
    }

    getTimeUntil(deadline){
        const time=Date.parse(deadline)-Date.parse(new Date());
        console.log('time',time);
        const secs = Math.floor((time/1000)%60);
        const mins = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));

        console.log('days',days,'mins',mins,'hours',hours,'secs',secs);
        this.setState({days: days,hours: hours,mins: mins,secs: secs});
    }
    leading(num){
        if(num<10)
        return '0'+num;
        else
        return num;
    }

    render() {
        //this.getTimeUntil(this.props.deadline);
        return (
            <div>
                 <br />
            
        <div className="Clock-days"> और बस {this.leading(this.state.days)} days :</div>
        <div className="Clock-hours"> {this.leading(this.state.hours)} hours :</div>
        <div className="Clock-mins"> {this.leading(this.state.mins)} minutes :</div>
        <div className="Clock-secs"> {this.leading(this.state.secs)} seconds में कुछ बड़ा होने वाला है</div>
        </div>
       
          
        );
    }

}