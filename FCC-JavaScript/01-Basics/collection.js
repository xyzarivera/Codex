/*
our function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
*/
// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
    var object2 = object[id]
    if (value.length === 0) {
      delete object2[prop];
      return object;
    };
    switch (prop){
      case 'tracks':
        if (object2.hasOwnProperty('tracks')){
          object2.tracks =  object2.tracks.concat(value);
        } else {
          object2.tracks = [value];
        };
        break;
      default: 
        object2[prop] = value;
        break;
    }
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');