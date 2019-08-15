import React from 'react';
class Clockcurrent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleTimeString()
      };
      
    }
    componentDidMount() {
      
        setInterval(() => this.setState({
        time: new Date().toLocaleTimeString()
      }),1000);
      
      //const{time}=this.state;
    }
  
  
    render() {
      return (
         <h5> 
          The time is {this.state.time}
          
          </h5>
      );
    }
  }
export default Clockcurrent;