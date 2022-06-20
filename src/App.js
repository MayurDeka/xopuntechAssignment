import React,{Component} from "react";
import Slab from "./components/slab";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jio: [],
      airtel: [],
      vodafone: [],
      network: 'Airtel-Prepaid'
    }
  }
  handleNetworkChange = (e) => {
    this.setState({network: e.target.value})
  }
  handleAddSlab = () => {
    const { network, jio, airtel, vodafone } = this.state;
    const newSlab = {
      id: uuidv4(),
      value: {
        max: undefined,
        min: undefined,
        sd: {
          value: undefined,
          s: false,
          c: false,
          f: false,
          p: false
        },
        md: {
          value: undefined,
          s: false,
          c: false,
          f: false,
          p: false
        },
        dist: {
          value: undefined,
          s: false,
          c: false,
          f: false,
          p: false
        },
        ret: {
          value: undefined,
          s: false,
          c: false,
          f: false,
          p: false
        },
        a: undefined,
        m: undefined
      }
    }
    switch(network){
      case 'Vodafone-Prepaid': const v = vodafone;
        v.push(newSlab);
        this.setState({vodafone: v})
        break;
      case 'Jio-Prepaid': const j = jio;
        j.push(newSlab);
        this.setState({jio: j})
        break;
      case 'Airtel-Prepaid': const a = airtel;
        a.push(newSlab);
        this.setState({airtel: a})
        break;
    }
  }
  handleChangeSlab = (id, network, value) => {
    const { jio, airtel, vodafone } = this.state;
    const newSlab = {
      id: id,
      value: value
    }
    switch(network){
      case 'vodafone': const newVoda = vodafone.map(item=>{
          return item.id===id?newSlab:item;
        })
        this.setState({vodafone: newVoda})
        break;
      case 'jio': const newJio = jio.map(item=>{
          return item.id===id?newSlab:item;
        })
        this.setState({jio: newJio})
        break;
      case 'airtel': const newAirtel = airtel.map(item=>{
          return item.id===id?newSlab:item;
        })
        this.setState({airtel: newAirtel})
        break;
    }
  }
  handleDeleteSlab = (id,network) => {
    const { jio, airtel, vodafone } = this.state;
    switch(network){
      case 'vodafone': const v = vodafone.filter(item=>item.id!==id);
        this.setState({vodafone: v})
        break;
      case 'jio': const j = jio.filter(item=>item.id!==id);
        this.setState({jio: j})
        break;
      case 'airtel': const a = airtel.filter(item=>item.id!==id);
        this.setState({airtel: a})
        break;
    }
  }
  render() {
    const {jio,airtel,vodafone} = this.state;
    return (
      <>
        <div className="container">
          {airtel.length!==0 && (
            <>
              <div className="networkHeading">
                <h3>AIRTEL-PREPAID</h3>
                <div className="bar">
                </div>
              </div>
              <div>
                {airtel.map((item, index) => <Slab 
                  key={index} 
                  id={item.id} 
                  network="airtel" 
                  value={item.value} 
                  className="slab" 
                  onDeleteSlab={this.handleDeleteSlab} 
                  onValueChange={this.handleChangeSlab}
                />)}
              </div>
            </>
          )}
          {jio.length!==0 && (
            <>
              <div className="networkHeading">
                <h3>JIO-PREPAID</h3>
                <div className="bar">
                </div>
              </div>
              <div>
                {jio.map((item, index) => <Slab key={index} id={item.id} network="jio" value={item.value} className="slab" onDeleteSlab={this.handleDeleteSlab} onValueChange={this.handleChangeSlab}/>)}
              </div>
            </>
          )}
          {vodafone.length!==0 && (
            <>
              <div className="networkHeading">
                <h3>VODAFONE-PREPAID</h3>
                <div className="bar">
                </div>
              </div>
              <div>
                {vodafone.map((item, index) => <Slab key={index} id={item.id} network="vodafone" value={item.value} className="slab" onDeleteSlab={this.handleDeleteSlab} onValueChange={this.handleChangeSlab}/>)}
              </div>
            </>
          )}
          <select onChange={(e)=>this.handleNetworkChange(e)} className="dropdownStyle">
            <option value="Airtel-Prepaid">Airtel-Prepaid</option>
            <option value="Jio-Prepaid">Jio-Prepaid</option>
            <option value="Vodafone-Prepaid">Vodafone-Prepaid</option>
          </select>
          <button onClick={this.handleAddSlab} className="addSlabBtn">Add Slab</button>
          </div>
      </>
    )
  }
}

export default App;
