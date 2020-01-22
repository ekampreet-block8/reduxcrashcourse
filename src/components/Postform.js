import React, { Component } from "react";
class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title:</label>
            <br></br>
            <input name="title" type="text" value={this.state.title} />
          </div>
          <br></br>
          <div>
            <label>Body:</label>
            <br></br>
            <textarea name="body" value={this.state.body} />
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
