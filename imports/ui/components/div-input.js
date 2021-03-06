import React from 'react'
import ContentEditable from 'react-contenteditable'

var MyComponent = React.createClass({
  getInitialState: function(){
    return {html: "<b>Hello <i>World</i></b>"};
  },

  handleChange: function(evt){
    this.setState({html: evt.target.value});
  },

  render: function(){
    return <ContentEditable
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable edition
              onChange={this.handleChange} // handle innerHTML change
            />
  }
});
