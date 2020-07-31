
//This is basically a getter and setter for the tabs
//Communicated via message
type Message = {
  name: 'get-tab-volume',
  tabId: number
} | {
  name: 'set-tab-volume',
  tabId: number,
  value: number
}

export default Message
