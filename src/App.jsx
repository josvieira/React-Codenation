import React from 'react';

import Contacts from './components/Contacts'
import Topbar from './components/Topbar'
import Filters from './components/Filters'

import './App.scss';



class App extends React.Component {
  constructor(props){
		super(props);
		this.state={
      myApiData:[],
      dataFilter: []
    };
    this.filterBy = this.filterBy.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
	  }
	
	componentDidMount(){
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then(response => response.json())
		.then(data => this.setState({myApiData: data, dataFilter: data}));
  }
  
  filterBy(property){
    let contactFilter = this.state.myApiData.sort((a,b) => {
        return a[property] > b[property];
    })
    this.setState({dataFilter: contactFilter})
  }

  filterSearch(property){
    const contacts = this.state.myApiData.filter(contact => 
      contact.name.toLowerCase().includes(property.toLowerCase()))

    this.setState({dataFilter: contacts})
  }
  
  render() {
  
    return (
      
      <React.Fragment>
        <div className='app' data-testid='app'>
          <Topbar />

          <Filters orderBy={this.filterBy}
                  filterBy={this.filterSearch}/>

          <Contacts data={this.state.dataFilter} />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
