class Util {
    static sortByDate(data) {
        const sortedData = data.sort(function(a, b) {
            const dateA = a.timeofcall;
            const dataB = b.timeofcall;
            if (dateA < dataB) {
              return -1;
            }
            if (dateA > dataB) {
              return 1;
            }
            return 0;
          });
          return sortedData;
    }

    static sortByName(data) {
        const sortedData = data.sort(function(a, b) {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
          return sortedData;
    }
    
    static displaytime(seconds) {
      const format = val => `0${Math.floor(val)}`.slice(-2)
      const hours = seconds / 3600
      const minutes = (seconds % 3600) / 60
    
      return [hours, minutes, seconds % 60].map(format).join(':')
  }
}


export default Util;