import React from 'react';
import Pet from '../containers/Pet';

class PetPage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'white', marginTop: '30px'}}>
        <Pet />
      </div>
    );
  }
}

export default PetPage;
