import React, { Component } from "react";
import { addPost } from '../utils/postapi';

class MakePost extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: '',
        desc: '',
        link: '',
        screenshot: ""
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

//need to update this to work with images /4***************************************

//*************************************************** */

      const post = {
        title: this.state.title,
        link: this.state.link,
        desc: this.state.desc,
        screenshot:this.state.screenshot
      }
      console.log(JSON.stringify(post)  + "  add post")

      addPost(post)
        .then(postResponse => {
          console.log(postResponse.data);
        })
        .catch(err => {
          console.log(err);
        })


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
                value={this.state.link} 
              onChange={this.handleChange}
                className="form-control"
                id="link"
                placeholder="ID"
                name="link"
              />
            </div>
          </div>

           <div className="form-group">
           <label htmlFor="UploadPic">Example file input</label>
            <input type="file" className="form-control-file" name="screenshot" id="screenshot" value={this.state.screenshot} onChange={this.handleChange}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea className="form-control" id="desc" rows="3" value={this.state.desc} name="desc" 
              onChange={this.handleChange} />
          </div>
          <input id="submit" type="submit" value="submit" className="btn btn-success btn-lg" />
          
        </form>
      </React.Fragment>
    );
  }
}

export default MakePost;
