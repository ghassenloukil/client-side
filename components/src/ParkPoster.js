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
   
  
    state = {
      parkId: null,
       parkname: "",
       totalPlaces: 0,
       emptyPlaces: 0,
       price: 0,
       long: 0,
       latit: 0
    };
    createPark = () => {
      
      
      var obj = {parking_id: this.state.parkId,parkname:this.state.parkname, totalPlaces:this.state.totalPlaces, emptyPlaces:this.state.emptyPlaces, price: this.state.price, long:this.state.long, latit:this.state.latit}
      console.log("parkId",this.state.parkId, "obj",obj)
      axios.post("http://10.0.2.2:3000/api/ParkiZone/parking/create'", obj).then((res) => {
        alert("your park is created")
      }).catch((err) => {
        console.log(err);
      })
    }
    
    render() {
        const { movie, movie: { parkname, price, poster,emptyPlaces }, onOpen } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: "https://www.datocms-assets.com/17742/1575299320-parking-1-4.jpg?auto=format" }} style={styles.image} resizeMethod='resize'/>
                </View>
                <Text style={styles.title} numberOfLines={1}> Parking: {parkname}</Text>
                <Text style={styles.genre} numberOfLines={1}> Price: {price}</Text>
                <Text style={styles.genre} numberOfLines={1}> Empty Places:{emptyPlaces}</Text>
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
      // color: 'white'
    },
    genre: {
      ...defaultStyles.text,
      // color: 'white',
      fontSize: 12,
      lineHeight: 14,
    },
  });