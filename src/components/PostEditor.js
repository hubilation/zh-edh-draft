import React from "react";
import FieldGroup from "./FieldGroup";
import ReactQuill from "react-quill";
import theme from "react-quill/dist/quill.snow.css";

class PostEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "title",
      content: "content"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ content: value });
  }

  render() {
    return (
      <div>
        <FieldGroup
          id="post-title-input"
          label="Title your post"
          type="text"
          value={this.state.title}
        />
        <ReactQuill value={this.state.content} onChange={this.handleChange} />
      </div>
    );
  }
}

export default PostEditor;
