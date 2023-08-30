import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));

// Clase de Componentes en React js

// Estructura de Componente StateFull

// import React, { useState } from 'react';

// const Button = () => {
//     const [name, setName] = useState('Hola Mundo')
//     return(
//         <div>
//              <h1>{name}</h1>
//         </div>
//     )
// }

// Estructura de Componente Stateless

// import React from 'react';

// const Button = () => ( 
//      <div>
//          <h1>{name}</h1>
//      </div>
// );

// import React from 'react';

// const Button = ( { text } ) => <ButtonRed text = {text} />;

// import React from 'react';

// const Button = () => <ButtonRed />;

// otros ejemplos de componentes con clases en react

// import React, { Component } from 'react';

// class App extends Component {

// constructor(){

// }

// render(){
//      return (){
//          <div>
//              <h1>Hello, World</h1>
//          </div>
//          }
//      } 
// }


// otros tipos de componentes tipo HOC

// import React from 'react';

// function ComponentWrapper(){
//      class Wrapper extends Component {
//          render(){
//              return <WrapperComponent { ...this.props } />;
//           }
//      }

//  return  Wrapper;
// }