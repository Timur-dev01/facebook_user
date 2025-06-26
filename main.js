fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => renderUser(data));

function renderUser(users) {
  const usersDiv = document.querySelector(".users");
  console.log(users);
  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = user.name;

    const description = document.createElement("p");
    description.textContent =`Company: ${user.company.name}` ;

    const description2 = document.createElement("p");
    description2.textContent =`Website: ${user.website}` ;

    const description3 = document.createElement("p");
    description3.textContent = `Phone: ${user.phone}`;

    const button = document.createElement('button')
    const link = document.createElement('a')
    link.textContent = 'Подробнее'
    const userId = user.id
    link.href = `/account.html?id=${user.id}`;

    button.append(link)

    userDiv.append(title,description,description2,description3,button)
    usersDiv.append(userDiv)
  }
}
