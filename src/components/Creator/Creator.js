import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
  };

  static defaultProps = {
    text: 'Add new item',
  };

  state = {
    value: '',
    visibleButtons: false,
  };

  handleChange(event) {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK() {
    if (this.state.value != '') {
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel() {
    this.setState({
      value: '',
      visibleButtons: false,
    });
  }

  handleInfo() {
    this.setState({
      value: '',
      visibleButtons: true,
    });
    alert('Do not be shy!');
  }

  render() {
    return (
      <div className={styles.component}>
        <input type="text" placeholder={this.props.text} value={this.state.value} onChange={event => this.handleChange(event)} />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={() => this.handleOK()}>OK</Button>
          <Button
            onClick={() => {
              if (window.confirm('Are you sure you wish to delete this item?')) this.handleCancel();
            }}
            variant="danger"
          >
            cancel
          </Button>
          <Button onClick={() => this.handleInfo()} variant="info">
            Info
          </Button>
        </div>
      </div>
    );
  }
}

export default Creator;
