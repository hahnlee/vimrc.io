import React from 'react';

class Category extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.categoryName}</h2>
      </div>
    );
  }
}

export default Category;
