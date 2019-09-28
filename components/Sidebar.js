import React, { Component } from "react";
import "../components/scss/sidebar.scss";

class SideBar extends Component {
  constructor() {
    super();

    this.state = { openStatus: false };
  }

  componentDidMount() {
    document.addEventListener("open-sidebar", this.handleOpenEvent);
  }

  handleOpenEvent = () => {
    this.setState({ openStatus: true });
  };

  render() {
    const { openStatus } = this.state;
    const sidebarClass = openStatus ? "sidebar sidebar--open" : "sidebar";
    const overlayClass = openStatus
      ? "sidebar__overlay sidebar__overlay--open"
      : "sidebar__overlay";
    return (
      <>
        <div className={overlayClass}></div>
        <div className={sidebarClass}>Sidebar</div>
      </>
    );
  }
}

export default SideBar;
