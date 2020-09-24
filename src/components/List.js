import React,{Component} from 'react';
import './List.css';
import PropTypes from 'prop-types';

class List extends Component {
    static  propTypes={
        contacts: PropTypes.array.isRequired
    }
    state={
        filterText:''
    }
    onChangeFilterText=(e)=>{
        console.log(e.target.value);
        this.setState({
            filterText:e.target.value
        })
    }
    render(){
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );
        return(
            <div className={"listArea"}>
                <div className="ui icon input">
                    <input value={this.state.filterText} onChange={this.onChangeFilterText} className={"filter"} id={"filter"} placeholder={"İsim veya Telefon no gir:"}/>
                    <i className="search icon"></i>
                </div>
                <ul className={"list"}>
                    {
                        filteredContacts.map(contact=>{
                            return(
                                <li key={contact.phone}>
                                    <span className={"name"}>{contact.name}</span>
                                    <span className={"phone"}>{contact.phone}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export  default  List;