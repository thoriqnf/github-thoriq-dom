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
    let displayUsername = `<h1>${response.login}</h1>`;
    const container = document.querySelector(".container");
    container.innerHTML = displayUsername;
  } catch (error) {
    console.log(error);
  }
};

getDataGithub();
