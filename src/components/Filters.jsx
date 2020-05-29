import React from 'react';

class Filters extends React.Component {

	constructor(props){
		super(props);
		this.state={
			textSearch:" ",
		};
		this.setTextSearch = this.setTextSearch.bind(this);
	}

	setTextSearch(e){
		let value= e.target.value
		this.setState({textSearch: value })
		this.props.filterBy(value)
	}
	render() {

		return (
			<div className="container" data-testid="filters">
			<section className="filters">
			  <div className="filters__search">
				<input type="text" className="filters__search__input" placeholder="Pesquisar por nome"
									value={this.state.textSearch} 
									onChange={this.setTextSearch}/>
				{/**Esse onClick causa waning no console mas pode ser retirado {/*onClicK={() => this.props.filterBy(this.state.textSearch)}*/} */}							
				<button className="filters__search__icon" >
				  <i className="fa fa-search"/>
				</button>
			  </div>
  
			  <button className="filters__item is-selected" onClick={() => this.props.orderBy("name")}>
				Nome <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item is-selected" onClick={() => this.props.orderBy("country")}>
				País <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item is-selected" onClick={() => this.props.orderBy("company")}>
				Empresa <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item is-selected" onClick={() => this.props.orderBy("department")}>
				Departamento <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item is-selected" onClick={() => this.props.orderBy("admissionDate")}>
				Data de admissão <i className="fas fa-sort-down" />
			  </button>
			</section>
		  </div>
		);
	}
}

export default Filters;
