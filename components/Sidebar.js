import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../components/scss/sidebar.scss';

class SideBar extends Component {
  constructor() {
    super();
    this.overlayRef = React.createRef();
    this.state = { openStatus: false };
  }

  componentDidMount() {
    document.addEventListener('open-sidebar', this.handleOpenEvent);
  }

  handleOpenEvent = data => {
    const {
      title,
      paraMain,
      imgSrc,
      imgAlt,
      paraAlt,
      href,
      hrefTitle,
      hrefText,
    } = data.detail;
    this.setState({
      title,
      paraMain,
      imgSrc,
      imgAlt,
      paraAlt,
      href,
      hrefTitle,
      hrefText,
      openStatus: true,
    });

    document.body.classList.add('body__lock');
  };

  closeSideBar = () => {
    this.setState({ openStatus: false });
    document.body.classList.remove('body__lock');
  };

  render() {
    const {
      openStatus,
      title,
      paraMain,
      imgSrc,
      imgAlt = 'placeholder image for projects',
      paraAlt,
      href,
      hrefTitle,
      hrefText,
    } = this.state;
    const sidebarClass = openStatus
      ? 'sidebar sidebar--open'
      : 'sidebar';
    const overlayClass = openStatus
      ? 'sidebar__overlay sidebar__overlay--open'
      : 'sidebar__overlay';
    return (
      <>
        <div
          ref={this.overlayRef}
          className={overlayClass}
          onClick={this.closeSideBar}
        ></div>
        <div className={sidebarClass}>
          <button
            aria-label="close the sidebar"
            className="sidebar__close"
            onClick={this.closeSideBar}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <h1 className="sidebar__title">{title}</h1>
          <p className="sidebar__text">{paraMain}</p>
          <img src={imgSrc} alt={imgAlt} />
          <p className="sidebar__text">{paraAlt}</p>
          <a
            href={href}
            title={hrefTitle}
            className="sidebar__link"
            target="_blank"
          >
            {hrefText}
          </a>
        </div>
      </>
    );
  }
}

export default SideBar;
