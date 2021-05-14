import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];
// const image = ["https://www.datocms-assets.com/17742/1575299320-parking-1-4.jpg?auto=format","https://www.datocms-assets.com/17742/1575299320-parking-1-4.jpg?auto=format"]
export const movies = [
  {
    days,
    times,
    poster : 'https://www.datocms-assets.com/17742/1575299320-parking-1-4.jpg'
  }
]
  