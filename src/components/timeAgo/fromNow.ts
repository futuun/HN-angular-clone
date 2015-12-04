export default function fromNow() {
  return function(input):string {
    let timeDifference:number = Math.round(new Date().getTime() / 1000) - input;
    const timeUnits = {
      'year': 31536000,
      'month': 2592000,
      'week': 604800,
      'day': 86400,
      'hour': 3600,
      'minute': 60
    };
    //'time unit' : number of seconds needed for one time unit

    for (let timeUnit in timeUnits) if (timeDifference > timeUnits[timeUnit]) {
      let numberOfUnits:number = Math.floor(timeDifference / timeUnits[timeUnit]);
      return `${numberOfUnits} ${timeUnit}${numberOfUnits > 1 ? 's ago' : ' ago'}`;
    }
  };
}