import { userConstants } from "../redux/constants";
//import env from "react-dotenv";

const API = "http://localhost:3001/api";

console.log(API);

export const userActions = {
  API,
  testAction,
  exampleAction
};

function testAction(message) {
  return (dispatch) => {
    console.log(message);
    dispatch({type: userConstants.testSuccess}, message);
  };
}

function exampleAction(input) {

  return (dispatch) => {
    dispatch(request("Trying example action"));
    console.log(input);
    
    fetch(API + "/test", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({input}),
    })
      .then((res) => res.json())
      .then((data) => {
        const {message} = data;
        if(message) dispatch(success(message));
      });
    function request(action) {
      return { type: userConstants.exampleREQUEST, action };
    }
    function success(message) {
      return {type: userConstants.exampleSUCCESS, message};
    }
  }
}

  // function exampleAction(input) {
  //   return (dispatch) => {
  //     dispatch(request("trying function testAction()"));

  //     fetch(API + "/test", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(input),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         dispatch(success(data));          
  //       });
  //   };
  //   function request(action) {
  //     return { type: userConstants.exampleActionREQUEST, action };
  //   }
  //   function success(users) {
  //     return { type: userConstants.exampleActionSUCCESS, users };
  //   }
  //   function failure(action) {
  //     return { type: userConstants.exampleActionFAILURE, action };
  //   }
  // }

  // function reroute(location) {
  //   window.location.assign(`${window.location.origin}/${location}`);
  // }