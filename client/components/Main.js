import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import FaAlignLeft from 'react-icons/lib/fa/align-left';

const Main = React.createClass({
  render() {
    const styles = {
      icon: {
        "color": "#77C7F7"
      }
    };
    return (
      <MuiThemeProvider>
        <div>
          <h1>
            <Link to="/">
              Poll Vault <FaAlignLeft style={styles.icon} />
            </Link>
          </h1>
          {React.cloneElement({...this.props}.children, {...this.props})}
        </div>
      </MuiThemeProvider>
    )
  }
});

export default Main;
