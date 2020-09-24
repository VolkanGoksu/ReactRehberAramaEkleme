import React, {Component} from 'react';
import Contacts from "./Contacts";

class App extends Component {
    constructor(props) {
        super(props);
        this.addContact=this.addContact.bind(this);
    }

    state={
        contacts:[{
            name : 'Volkan',
            phone: '121212'
        },{
            name:'Ayaz',
            phone:'252525'
        }]
    };
    addContact(contact){
      const {contacts} = this.state;
      contacts.push(contact);

      this.setState({
          contacts: contacts
      })
    }



    render(){
        return (
            <div className="App">
                <Contacts
                    addContact={this.addContact}
                    contacts={this.state.contacts}/>
            </div>
        );
    }
}

export default App;
