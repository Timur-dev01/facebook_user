    const container = document.querySelector('.container')
    const search = window.location.search.slice(1).split("=")[1];
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(`${url}/${search}`)
      .then((res) => res.json())
      .then((user) => {
        const title = document.createElement('h1')
        title.textContent = `User: ${search} - ${user.name}`

        const userDiv = document.createElement("div");
        userDiv.classList.add("user");

        const userData = document.createElement('pre')
        userData.textContent = JSON.stringify(user, null, 2)

        const button = document.createElement('button')
        const link = document.createElement('a')
        link.textContent = 'На главную'
        link.href = "/main.html";
        button.append(link)

        userDiv.append(userData)
        container.append(title, userDiv, button)
      });