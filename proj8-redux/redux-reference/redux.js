console.clear();

//  People dropping off a form

// Action creators
//// Creating a policy
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount,
    },
  };
};
// Deleting a policy
const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    },
  };
};
// Create a claim
const createClaim = (name, amountToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountToCollect,
    },
  };
};

//// Dispatch is a part of redux so there is no need to use it

//// Reducers -- called with action creators (Departments)
// if this is being called for the first time the oldListOfClaims will be assigned as an empty array
// Claims History reducer
const claimsHistory = (action, oldListOfClaims = []) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action
    return [...oldListOfClaims, action.payload];
  }
  // we dont care about this action
  return oldListOfClaims;
};

// Accounting reducer
const accounting = (action, bagOfMoney = 100) => {
  // if its a claim, subtract moni
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountToCollect;
  }
  // if its a new policy, add moni
  if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  // if its delete policy then idc
  return bagOfMoney;
};

// Policy reducer
const policies = (action, oldListOfPolicies = []) => {
  if (action.type === 'CREATE_POLICY') {
    return [...oldListOfPolicies, action.payload.name];
  }
  if (action.type === 'DELETE_POLICY') {
    return oldListOfPolicies.filter(name => name !== action.payload.name);
  }
  return oldListOfPolicies;
};
// its important to always return something **new** from a reducer

// Wiring into redux store
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting,
  claimsHistory,
  policies,
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Geoff', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Geoff'));

console.log(store.getState());
