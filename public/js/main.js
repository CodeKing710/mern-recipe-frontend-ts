//Handle session saving/requesting
const BE_API_URL = 'http://localhost:4000';
let id;
if(localStorage.getItem('user_id') != null) {
  //Session ID saved proceed with login
  id = localStorage.getItem('user_id');
  (async () => {
    await fetch(`${BE_API_URL}/${id}`);
  })();
} else {
  (async () => {
    let fname = prompt('What is your name?');

    let res = await fetch(`${BE_API_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({fname: fname})
    });
    res = await res.json();
    localStorage.setItem('user_id', res._id);
    id = res._id;
  })();
}

//Handle Pageload sequence
window.onload = async () => {
  let name = await fetch(`${BE_API_URL}/${id}`);
  name = await name.json();
  console.log(name);
  document.getElementById('hi').innerHTML = `Hi ${name.fname}`;
};