import React from 'react';

const backdropStyle = {
  position: '',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,3, 0.1)',
  padding: 50
}

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 700,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative',
  zIndex: 1000,
};



class Modal extends React.Component {

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
    window.location.reload();
  }
  
  
  render() {

    if (!this.props.show) {
      return null;
    }
    return (
      <React.Fragment>
        
        <div style={backdropStyle}>
          <div style={modalStyle}>
            <div className="btn btn-success btn-sm" onClick={(e) => { this.onClose(e) }}>
            x
        </div>
        {this.props.children}
        
        
        </div>
          
        </div>

        
        
        
        
        

      </React.Fragment>
    );
  }
}

export default Modal;
