const http = new EasyHttp;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.error(err));

// User Data
const data = {
  name: 'feroz khan',
  username: 'ferozkhan',
  email: 'ferozkhan@gmail.com'
}

// Post User
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.error(err));

// Update User
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.error(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.error(err));


