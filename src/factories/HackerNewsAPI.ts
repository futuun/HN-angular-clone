export default function hackerNewsAPI($firebaseArray, $firebaseObject) {
  const connection:Firebase = new Firebase('https://hacker-news.firebaseio.com/v0/');

  return {
    fetchHomepage: () =>
      $firebaseArray(connection.child('topstories/')),

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