import React, { Component } from "react";

class Post extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        id: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const { name, value } = event.target;
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log('A name was submitted: ' + JSON.stringify(this.state));
      alert('A name was submitted: ' + JSON.stringify(this.state));
    }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="Title">Title</label>
              <input
              value={this.state.title} 
              onChange={this.handleChange}
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                name="title"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="UniqueId">Unique ID</label>
              <input
                type="text"
                value={this.state.id} 
              onChange={this.handleChange}
                className="form-control"
                id="link"
                placeholder="ID"
                name="id"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea className="form-control" id="desc" rows="3" value={this.state.description} name="description" 
              onChange={this.handleChange} />
          </div>
          <input id="submit" type="submit" value="submit" className="btn btn-success btn-lg"/>
        </form>
      </React.Fragment>
    );
  }
}

export default Post;
