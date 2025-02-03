The solution involves waiting for the Firebase connection to be fully established before attempting to access the database. We can use the `onAuthStateChanged` listener (or a similar approach depending on your authentication method) combined with a promise to guarantee the connection is ready. 

```javascript
// Corrected code using onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    return new Promise((resolve, reject) => {
      const databaseRef = firebase.database().ref('users');
      databaseRef.once('value', snapshot => {
        resolve(snapshot.val());
      }, error => reject(error));
    });
  } else {
    console.log('User is not authenticated')
  }
}).then(userData => {
  console.log(userData); // Now userData should be correctly populated
}).catch(error => {
  console.error('Error fetching data: ', error);
});
```
Alternatively, you can use asynchronous functions:
```javascript
async function fetchData(){
  const user = await firebase.auth().currentUser
  if (user){
    const snapshot = await firebase.database().ref('users').once('value')
    console.log(snapshot.val())
  }
  else{
    console.log('User is not authenticated')
  }
}
fetchData()
```