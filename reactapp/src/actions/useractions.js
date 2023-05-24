import { userConstants } from "../redux/constants";
//import env from "react-dotenv";

const API = "http://localhost:3001/api";

console.log(API);

export const userActions = {
  API,
  testAction
};

function testAction(message) {
  return (dispatch) => {
    console.log(message);
    dispatch({type: userConstants.testSuccess}, message);
  };
}

  // function testAction(input) {
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

  