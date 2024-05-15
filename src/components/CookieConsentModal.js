import React from 'react';
import './CookieConsentModal.css';

class CookieConsentModal extends React.Component {
  render() {
    return (
      <div className="modal">
        <h2>This website utilises technologies such as cookies to enable essential site functionality, as well as for analytics, personalisation, and targeted advertising purposes.</h2>
        <p>You may change your settings at any time or accept the default settings. You may close this banner to continue with only essential cookies.</p>
        <a href="/cookie-policy">Cookie Policy</a>
        <h3>Storage Preferences</h3>
        <div className="cookie-options">
          <div className="cookie-option">
            <h4>Targeted Advertising</h4>
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
        <button onClick={this.props.onSave}>Save</button>
        <button onClick={this.props.onAcceptAll}>Accept All</button>
        <button onClick={this.props.onRejectAll}>Reject All</button>
      </div>
    );
  }
}

export default CookieConsentModal;