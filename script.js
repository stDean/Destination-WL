(function () {
  "use strict";

  const detailsForm = document.querySelector("#destination_details_form");

  detailsForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();

    const destName = e.target.elements["name"].value;
    const destLocation = e.target.elements["location"].value;
    const destPhoto = e.target.elements["photo"].value;
    const destDesc = e.target.elements["description"].value;

    Array.from(detailsForm).forEach(ele => {
      ele.value = ""
    });

    const descCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);
    const wishListCOntainer = document.querySelector("#destination_container")

    if (wishListCOntainer.children.length === 0) {
      document.getElementById("title").innerHTML = "My Wish List";
    }

    wishListCOntainer.appendChild(descCard)
  }

  function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", name);

    const constPhotoUrl = 'images/port1.PNG';
    if (photoURL.length === 0) {
      img.setAttribute("src", constPhotoUrl);
    } else {
      img.setAttribute("src", photoURL);
    }

    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card_body";

    const cardName = document.createElement("h3");
    cardName.innerText = name;
    cardBody.appendChild(cardName);

    const cardLoc = document.createElement("h4");
    cardLoc.innerText = location;
    cardBody.appendChild(cardLoc);

    if (description.length !== 0) {
      const cardText = document.createElement("p");
      cardText.className = "card_text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove";
    deleteButton.style.padding = "10px 20px";

    deleteButton.addEventListener("click", removeDestination)
    cardBody.appendChild(deleteButton);

    card.appendChild(cardBody);

    return card;

  }

  function removeDestination(e) {
    const card = e.target.parentElement.parentElement;
    card.remove()
  }
})();