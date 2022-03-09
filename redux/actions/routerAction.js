import { HANDLE_EXPANDED, HANDLE_CLICK_ROUTE, ONCHANGE_FORCE_ADD_ORDERS, HANDLE_ROUTING, ON_ADD_ORDERS,HANDLE_OPEN_FILTER,ADD_HEADER_SEARCH } from './types'

export const handleExpanded = expanded => {
  localStorage.setItem('mvrp:menu_expanded', expanded)
  return { type: HANDLE_EXPANDED, payload: expanded }
}

// export const handleClickRoute = (bool, forceAddOrders = false, orders = []) => {
//   return { type: HANDLE_CLICK_ROUTE, payload: { bool, forceAddOrders, orders } }
// }

export const onAddOrders = orders => {
  return { type: ON_ADD_ORDERS, payload: orders }
}

// export const onChangeForceAddOrders = bool => {
//   return { type: ONCHANGE_FORCE_ADD_ORDERS, payload: bool }
// }

export const handleIsRouting = bool => {
  return { type: HANDLE_ROUTING, payload: bool }
}

export const handleOpenFilter = bool => {
  return { type: HANDLE_OPEN_FILTER, payload: bool }
}

export const addHeaderSearch = param => {
  return { type: ADD_HEADER_SEARCH, payload: param }
}



