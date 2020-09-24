import React,{Component} from 'react';
import PropTypes from "prop-types";

class Form extends Component {
    static  propTypes={

        addContact:PropTypes.func
    }

    state={
        name:'',
        phone:''
    };
    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSumbit=(e)=>{
        e.preventDefault();
        this.props.addContact({
            ...this.state
        })
    }
    render(){
        return(
            <div>
              <form onSubmit={this.onSumbit}>
                  <div className="ui icon input">
                      <input name="name" id="name" value={this.state.name} onChange={this.onChange} placeholder="İsim Gir"/>
                          <i className="search icon"></i>
                  </div>
                  <br/>
                  <div className="ui icon input">
                      <input name="phone" id="phone" value={this.state.phone}  onChange={this.onChange} placeholder="Telefon Gir"/>
                      <i className="search icon"></i>
                  </div>
                  <br/>
                  <button>Ekle</button>
              </form>
            </div>
        )
    }
}
export  default  Form;