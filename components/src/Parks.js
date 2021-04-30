// import React, { Component } from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   View
// } from 'react-native';
// import { parks } from './data.js';
// import ParkPoster from './ParkPoster.js';

// export default class Parks extends Component {
//   // Add starting here
//   state = {
//     popupIsOpen: false,
//     // Day chosen by user
//     chosenDay: 0,       // choose first day by default
//     // Time chosen by user
//     chosenTime: null,
//   }

//   openPark = (park) => {
//     this.setState({
//       popupIsOpen: true,
//       park,
//     });
//   }

//   closePark = () => {
//     this.setState({
//       popupIsOpen: false,
//       // Reset values to default ones
//       chosenDay: 0,
//       chosenTime: null,
//     });
//   }

//   chooseDay = (day) => {
//     this.setState({
//       chosenDay: day,
//     });
//   }

//   chooseTime = (time) => {
//     this.setState({
//       chosenTime: time,
//     });
//   }

//   bookTicket = () => {
//     // Make sure they selected time 
//     if (!this.state.chosenTime) {
//       alert('Please select reservation time');
//     } else {
//       // Close popup
//       this.closeMovie();
//       // Navigate away to Confirmation route
//       this.props.navigator.push({
//         name: 'confirmation',
//         // Generate random string
//         code: Math.random().toString(36).substring(6).toUpperCase(),
//       });
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           // Hide all scroll indicators
//           showsHorizontalScrollIndicator={false}
//           showsVerticalScrollIndicator={false}
//         >
//           {parks.map((park, index) => <ParkPoster
//             park={park}
//             onOpen={this.openPark}
//             key={index}
//           />)}
//         </ScrollView>
//         // Add this
//         <ParkPopup
//           park={this.state.park}
//           isOpen={this.state.popupIsOpen}
//           onClose={this.closePark}
//           chosenDay={this.state.chosenDay}
//           chosenTime={this.state.chosenTime}
//           onChooseDay={this.chooseDay}
//           onChooseTime={this.chooseTime}
//           onBook={this.bookTicket}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 20,         // start below status bar
//   },
//   scrollContent: {
//     flexDirection: 'row',   // arrange posters in rows
//     flexWrap: 'wrap',       // allow multiple rows
//   },
// });

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import { movies } from './data';
import MoviePoster from './ParkPoster';
import MoviePopup from './ParkPopup'
// import { Actions } from 'react-native-router-flux'

export default class Parks extends Component {
  state = {
    popupIsOpen: false,
    chosenDay: 0,       // choose first day by default
    // Time chosen by user
    chosenTime: null,
  }

  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,	
    });
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
      chosenDay: 0,
      chosenTime: null,
    });
  }
  chooseDay = (day) => {
    this.setState({
      chosenDay: day,
    });
  }

  chooseTime = (time) => {
    this.setState({
      chosenTime: time,
    });
  }

    bookTicket = (props) => {
    // Make sure they selected time 
    if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {
      // Close popup
      this.closeMovie();
      // Navigate away to Confirmation route
      // this.props.navigator.push({
      //   name: 'confirmation',
      //   // Generate random string
      //   code: Math.random().toString(36).substring(6).toUpperCase(),
      // });
      alert('Your order has been passed successfully')
    }
  }

  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
         
          {movies.map((movie, index) => 
          // <MoviePoster
          //   movie={movie}
          //   onOpen={this.openMovie}
          //   key={index}
          // />
          "hello")}
        </ScrollView>
        <MoviePopup
  movie={this.state.movie}
  isOpen={this.state.popupIsOpen}
  onClose={this.closeMovie}
  chosenDay={this.state.chosenDay}
  chosenTime={this.state.chosenTime}
  onChooseDay={this.chooseDay}
  onChooseTime={this.chooseTime}
  onBook={this.bookTicket}
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});


