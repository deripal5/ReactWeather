var React = require('react');
var {Link} = require ('react-router')

var Examples =  (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here few example location to try out :</p>
      <ol>
        <li><Link to ='/?location=Denpasar'> Denpasar, ID </Link></li>
        <li><Link to ='/?location=Singaraja'> Singaraja, ID </Link></li>
      </ol>
    </div>
  )
};

module.exports = Examples;
