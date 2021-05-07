// import React, { Component, PropTypes } from 'react';
// import {
//   Dimensions,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from 'react-native';
// import { defaultStyles } from './styles';

// // Get screen dimensions
// const { width, height } = Dimensions.get('window');
// // How many posters we want to have in each row and column
// const cols = 3, rows = 3

// export default class ParkPosters extends Component {
//   // Component prop types
//   static propTypes = {
//     // Park object with name, empty_places, and poster
//     park: PropTypes.object.isRequired,
//     // Called when user taps on a poster
//     onOpen: PropTypes.func.isRequired,
//   }
//   render() {
//     const { park, park: { name, empty_places, poster }, onOpen } = this.props;
//     return (
//       <TouchableOpacity style={styles.container} onPress={() => onOpen(park)}>
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: poster }} style={styles.image} />
//         </View>
//         <Text style={styles.name} numberOfLines={1}>{name}</Text>
//         <Text style={styles.empty_places} numberOfLines={1}>{empty_places}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginLeft: 10,
//     marginBottom: 10,
//     height: (height - 20 - 20) / rows - 10,
//     width: (width - 10) / cols - 10,
//   },
//   imageContainer: {
//     flex: 1,                          // take up all available space
//   },
//   image: {
//     borderRadius: 10,                 // rounded corners
//     ...StyleSheet.absoluteFillObject, // fill up all space in a container
//   },
//   name: {
//     ...defaultStyles.text,
//     fontSize: 14,
//     marginTop: 4,
//   },
//   empty_places: {
//     ...defaultStyles.text,
//     color: '#BBBBBB',
//     fontSize: 12,
//     lineHeight: 14,
//   },
// });


import React, { Component, PropTypes } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { defaultStyles } from './styles';


// Get screen dimensions - Obtener dimensiones de pantalla
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column - Cuantos carteles queremos tener en cada fila y columna
const cols = 3, rows = 3;

export default class MoviePoster extends Component {
    // Component prop types
    //static propTypes = {
        // Movie object with title, genre, and poster
        //movie: PropTypes.object.isRequired,
        // Called when user taps on a poster
        //Open: PropTypes.func.isRequired,
    //}
    
    render() {
        const { movie, movie: { name, owner, poster,empty_places }, onOpen } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: poster }} style={styles.image} resizeMethod='resize'/>
                </View>
                <Text style={styles.title} numberOfLines={1}> Parking: {name}</Text>
                <Text style={styles.genre} numberOfLines={1}> Owner: {owner}</Text>
                <Text style={styles.genre} numberOfLines={1}> Empty Places:{empty_places}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      marginLeft: 47,
      marginBottom: 10,
      height: (height - 20 - 20) / rows - 10,
      width: (width - 1) / cols - 1,
    },
    imageContainer: {
      flex: 1,                          // take up all available space
    },
    image: {
      borderRadius: 10,                 // rounded corners
      ...StyleSheet.absoluteFillObject, // fill up all space in a container
    },
    title: {
      ...defaultStyles.text,
      fontSize: 14,
      marginTop: 4,
    },
    genre: {
      ...defaultStyles.text,
      color: '#374353',
      fontSize: 12,
      lineHeight: 14,
    },
  });