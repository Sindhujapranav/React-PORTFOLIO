import React from 'react';
import './Skills.css'

class Skills extends React.Component {
  render() {
    return (
      <center>
        <div className="text">
          <div>
            <p className="text">C&Basics of C++ <progress max={100} value={80} className="oneline progress-bar" />80%</p>

            <p className="text">PYTHON <progress max={100} value={75} className="oneline progress-bar" />75%</p>

            <p className="text">JAVASCRIPT<progress max={100} value={78} className="oneline progress-bar" />78%</p>

            <p className="text">HTML&CSS<progress max={100} value={80} className="oneline progress-bar" />90%</p>

            <p className="text">React <progress max={100} value={50} className="oneline progress-bar" />50%</p>

            <p className="text">Node js<progress max={100} value={40} className="oneline progress-bar" />40%</p>

          </div>
        </div></center>
    );
  };
};

export default Skills;
