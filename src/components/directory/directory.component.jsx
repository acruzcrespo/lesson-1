import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/T4BnbLD/Hats.png",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/Srw3MSS/Jackets.png",
          id: 2
        },
        {
          title: "shoes",
          imageUrl: "https://i.ibb.co/D4h2kLQ/Shoes.png",
          id: 3
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/n8JN1tx/Womens.png",
          size: "large",
          id: 4
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/1dLx0RT/Mens.png",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
