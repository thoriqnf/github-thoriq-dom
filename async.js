// asynchronus

// callback
const mainFunc = (number1, number2, callback) => {
  console.log(number1 + number2);
  callback();
};

const myCallBack = () => {
  console.log("Done");
};

mainFunc(10, 5, myCallBack);

// callback proses
const proses1 = () => {
  console.log("proses 1 selesai");
};

const proses2 = () => {
  const time = 1000 * 6;
  console.log(time);
  setTimeout(() => {
    console.log("proses 2 selesai");
    console.log("proses 2,1 selesai");
  }, time);
  // time dalam milisecond > 2 second / detik
};

const proses3 = () => {
  proses1();
  proses2();
  console.log("proses 3 selesai");
};
proses3();

// promise
const examplePromise = () => {
  new Promise((resolve, reject) => {
    let condition = false;
    if (condition) {
      resolve("Janji dipenuhi");
    } else {
      reject("Janji batal");
    }
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

// promise untuk ambil data dari API

// API pikachu
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

const fetchPikachu = fetch("https://jsonplaceholder.typicode.com/users");
fetchPikachu
  .then((response) => {
    return response.json();
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// API JSON place holder
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// API Star wars
fetch("https://swapi.dev/api/people/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// API Kawal Corona
fetch("https://api.kawalcorona.com/indonesia/")
  .then((response) => response.json())
  .then((json) => console.log(json));

// API Github
fetch("https://api.github.com/users/thoriqnf")
  .then((response) => response.json())
  .then((json) => console.log(json));

// Versi lengkap fetch
const getDataGithub = () => {
  // alamat url dari API
  const url = "https://api.github.com/users/thoriqnf";
  // opsi tambahan untuk method fetch
  const option = {
    method: "GET",
  };
  // proses menjalan fetch menggunakan promise
  fetch(url, option)
    // mengambil data dalam bentuk JSON
    .then((response) => response.json())
    // menampilkan data ke dalam console log
    .then((json) => console.log(json))
    // hanya berjalan jika terjadi error
    .catch((error) => console.log(error));
};

// ========= async await =========
// async harus ditaroh sebelum function

// async await cara biasa
async function halo() {
  let result = await "halo";
  return result;
}

// async await es6 / arrow function
const halo2 = async () => {
  let result = await "halo";
  return result;
};

// async await ambil data dari github
const getDataGithub = async () => {
  const url = "https://api.github.com/users/thoriqnf";
  const option = {
    method: "GET",
  };
  try {
    let response = await fetch(url, option);
    response = await response.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

getDataGithub();
