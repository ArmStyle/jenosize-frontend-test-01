import {
  HANDLE_EXPANDED,
  HANDLE_ROUTING,
  ON_ADD_ORDERS,
  HANDLE_OPEN_FILTER,
  ADD_HEADER_SEARCH,
} from "../actions";

// var menuExpanded = localStorage.getItem("mvrp:menu_expanded") || "false";

// if (menuExpanded === "true") menuExpanded = true;
// else menuExpanded = false;

let INITIAL_STATE = {
  // expanded: menuExpanded,
  expanded: false,
  clickRoute: false,
  forceAddOrders: false,
  ordersNeedToAdd: {
    filename: "",
    view: [],
    raw: [],
  },
  isRouting: false,
  openFilter: false,
  headerSearch: {
    branch: "",
    merchan: "",
    type: "",
    vendor: "",
  },
};

const headerReducter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_ADD_ORDERS:
      return {
        ...state,
        ordersNeedToAdd: { ...state.ordersNeedToAdd, ...action.payload },
      };

    case HANDLE_ROUTING:
      return { ...state, isRouting: action.payload };

    case HANDLE_EXPANDED:
      return { ...state, expanded: action.payload };

    case HANDLE_OPEN_FILTER:
      return { ...state, openFilter: action.payload };

    case ADD_HEADER_SEARCH:
      return { ...state, headerSearch: action.payload };

    default:
      return state;
  }
};
export default headerReducter;
