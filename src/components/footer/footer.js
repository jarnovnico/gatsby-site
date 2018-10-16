import React from 'react'
import ReactDOM from 'react-dom'
import createReactClass from 'create-react-class'
import './footer.css'

// var list = [1,2,3,4,5]

// export default class Footer extends React.Component {
// 	render() {
// 		return(
// 			<footer>
// 				<ul>
// 		          {list.map(function(listValue){
// 		            return <li>{listValue}</li>;
// 		          })}
// 		        </ul>
// 				<span>Made by Jarno - 2019</span>
// 			</footer>
// 		);
// 	}
// }

var list = [1,2,3,4,5]

export default class Footer extends React.Component {
  render() {
    return(
      <div>
          {list.map(function(listValue){

            return(
              <article className="video-item">
                <div className="video-information__wrapper">
                  <h3>Footer - {listValue}e</h3>
                  <p>description...</p>
                </div>
                <div className="clear-fix"></div>
              </article>
            );
          })}
      </div>
    );
  }
}