import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import AceEditor from 'react-ace';
import { Glyphicon } from 'react-bootstrap';
import ReactGA from 'react-ga';
import 'brace/mode/javascript';
import 'brace/theme/chaos';

class Instructions extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return(
      <div className="instructions">
        <Header toApp={true} />
        <div className="container">
          <h1 className="light-sea">Help</h1>
          <hr/>
          <h2 className="deeper-sea">What is BlckBx?</h2>
          <h4 className="text-color">
            BlckBx allows for the quick construction of applications, with no UI needed.
            <br />
            Users can draft and send algorithms to friends and coworkers who need no programming knowledge to use. We provide the frontend, and computing power, to let your programs run anywhere, even on mobile devices.
          </h4>
          <h2 className="deeper-sea">How do I get started?</h2>
          <h4 className="text-color">
            Simply sign up and get access to BlckBx's integrated development environment. Write your program, pick a name, a prompt, and click generate.
            <br />
            Instantly, your program will be running in your web browser, ready to share.
            <br />
            <br/>
            It's as simple as that.
            <br/>
            <br />
            <span className="basic-grey">
              Tip: You can log back in and edit your programs at any time, any previous links you have shared will automatically update with any code, name, or prompt changes you have made.
            </span>
          </h4>
          <h2 className="deeper-sea">Sample uses:</h2>
          <h4 className="text-color">
            <Link className="deep-sea" to="/program/59a5f5a81c39c222df33fed9"> <Glyphicon glyph="link" className="prm" />Averaging numbers </Link>
            <AceEditor
              className="mt-10"
              mode="javascript"
              theme="chaos"
              value={"function main(x) {\r\n    var nums = x.split(' ');\r\n    var sum = nums.reduce(function(a, b) { return parseInt(a) + parseInt(b); }, 0);\r\n    var res = sum/nums.length;\r\n\treturn res;\r\n}\r\n"}
              name="ace"
              width="100%"
              height="200px"
              readOnly={true}
              editorProps={{$blockScrolling: true}}
            />
            <br/>
            <Link className="deep-sea" to="/program/59a6045218abb13b79939503"> <Glyphicon glyph="link" className="prm" />Fibonacci Generator </Link>
            <AceEditor
              className="mt-10"
              mode="javascript"
              theme="chaos"
              value={"function fib(n) {\r\n    n = parseInt(n);\r\n    if(n <= 1) {\r\n        return n;\r\n    } else {\r\n        return fib(n - 1) + fib(n - 2);\r\n    }\r\n}\r\n\r\nfunction main(x) {\r\n\treturn fib(x);\r\n}\r\n"}
              name="ace"
              width="100%"
              height="200px"
              readOnly={true}
              editorProps={{$blockScrolling: true}}
            />
            <br/>
            <Link className="deep-sea" to="/program/59a604c318abb13b79939505"> <Glyphicon glyph="link" className="prm" />Fortune Teller </Link>
            <AceEditor
              className="mt-10"
              mode="javascript"
              theme="chaos"
              value={"function main(x) {\r\n    x = parseInt(x);\r\n    var rand = Math.floor((Math.random() * 30) + 1);\r\n    var fortunes = [\r\n        'You will have the best year of your life',\r\n        'Tomorrow will be bad, but the next day will make up for it',\r\n        'Good luck is right around the corner',\r\n        'You will get a promotion',\r\n        'Be careful for the next few days',\r\n        'You will have great success in what you least expect'\r\n        ];\r\n        \r\n    var res = fortunes[(x*rand)%6];\r\n\treturn res;\r\n}\r\n"}
              name="ace"
              width="100%"
              height="200px"
              readOnly={true}
              editorProps={{$blockScrolling: true}}
            />
            <br/>
            <Link className="deep-sea" to="/program/59a6050618abb13b79939507"> <Glyphicon glyph="link" className="prm" />Secret Message </Link>
            <AceEditor
              className="mt-10 pbl"
              mode="javascript"
              theme="chaos"
              value={"function main(x) {\r\n    return (x==='secretpass' ? 'secret info' : 'incorrect password');\r\n}"}
              name="ace"
              width="100%"
              height="200px"
              readOnly={true}
              editorProps={{$blockScrolling: true}}
            />
          </h4>
        </div>
      </div>
    );
  }
}

export default Instructions;
