import React from 'react';
import './CookieConsentModal.css';

class CookieConsentModal extends React.Component {
  render() {
    return (
      <div className="modal">
        <button className="close-button" onClick={this.props.onClose}>X</button>
        <h2>This website utilises technologies such as cookies to enable essential site functionality, as well as for analytics, personalisation, and targeted advertising purposes.</h2>
        <p>You may change your settings at any time or accept the default settings. You may close this banner to continue with only essential cookies.</p>
        <div className="cookie-options">
          <div className="cookie-option">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h4>Targeted Advertising</h4>
            </div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="cookie-option">
            <h4>Personalisation</h4>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="cookie-option">
            <h4>Analytics</h4>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.props.onSave}>Save</button>
          <button onClick={this.props.onAcceptAll}>Accept All</button>
          <button onClick={this.props.onRejectAll}>Reject All</button>
        </div>
        <h3><a href="/cookie-policy">Cookie Policy</a>  Storage Preferences</h3>
      </div>
    );
  }
}

export default CookieConsentModal;