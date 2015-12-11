export default function hackerNewsAPI($firebaseArray, $firebaseObject) {
  const connection:Firebase = new Firebase('https://hacker-news.firebaseio.com/v0/');

  return {
    fetchHot: () =>
      $firebaseArray(connection.child('topstories/')),

    fetchBest: () =>
      $firebaseArray(connection.child('beststories/')),

    fetchMaxitem: () =>
      $firebaseObject(connection.child('maxitem/')),

    fetchAsk: () =>
      $firebaseArray(connection.child('askstories/')),

    fetchShow: () =>
      $firebaseArray(connection.child('showstories/')),

    fetchJob: () =>
      $firebaseArray(connection.child('jobstories/')),

    fetchItem: (itemID:number) =>
      $firebaseObject(connection.child('item/' + itemID)),

    fetchUser: (userID:string) =>
      $firebaseObject(connection.child('user/' + userID))
  }
}