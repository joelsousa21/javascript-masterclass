let host = "localhost";
let port = "3000";
let resource = "users";
let url = `https://${host}:${port}/${resource}`;
console.log(url)

// > let host = "localhost"
// undefined
// > let port = "3000";
// undefined
// > let resource = "users";
// undefined
// > let url = "http://" + host + ":" + port + "/" + resource;
// undefined
// > url
// 'http://localhost:3000/users'
// > 
// > url = `https://${host}:${port}/${resource}`;
// 'https://localhost:3000/users'
// > url
// 'https://localhost:3000/users'