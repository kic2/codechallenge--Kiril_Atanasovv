fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let images = data.map(({ image }) => image);
    let captions = data.map(({ caption }) => caption);
    let types = data.map(({ type }) => type);
    let sourceTypes = data.map(({ source_type }) => source_type);
    let dates = data.map(({ date }) => date);
    let likes = data.map(({ likes }) => likes);
    let names = data.map(({ name }) => name);
    let profileImgs = data.map(({ profile_image }) => profile_image);
    let sourceLinks = data.map(({ source_link }) => source_link);
    console.log(captions[0]);
    console.log(typeof likes[0]);

    //DATA IMPORT IN HTML
    let captionsClass = document.getElementsByClassName("captions");
    let postImages = document.getElementsByClassName("content-img");
    let datesClass = document.getElementsByClassName("dates");
    let likesClass = document.getElementsByClassName("likes");
    let logoLinks = document.getElementsByClassName("logo-links");
    let avatars = document.getElementsByClassName("avatars");
    let namesClass = document.getElementsByClassName("link-name");

    //SOCIALS LOGO LOOP
    let socialLogo = document.getElementsByClassName("social-logos");
    for (i = 0; i < socialLogo.length; i++) {
      socialLogo[i].src = "/media/" + sourceTypes[i] + ".svg";
    }
    //CHANGE SRC INPUT FUNCTION
    let srcImport = function (inputOne, inputTwo) {
      for (i = 0; i < inputOne.length; i++) {
        inputOne[i].src = inputTwo[i];
      }
    };
    //CHANGE TXT INPUT FUNCTION
    let textImport = function (inputOne, inputTwo) {
      for (i = 0; i < inputOne.length; i++) {
        inputOne[i].innerText = inputTwo[i];
      }
    };
    //CHANGE HREF INPUT FUNCTION
    let hrefImport = function (inputOne, inputTwo) {
      for (i = 0; i < inputOne.length; i++) {
        inputOne[i].href = inputTwo[i];
      }
    };
    srcImport(postImages, images);
    textImport(datesClass, dates);
    textImport(captionsClass, captions);
    textImport(likesClass, likes);
    hrefImport(logoLinks, sourceLinks);
    srcImport(avatars, profileImgs);
    textImport(namesClass, names);
  });

/// LOAD MORE BUTTON FUNCTION
let wrapper = document.getElementsByClassName("wrapper");
let moreBtn = document.querySelector(".loadmore-btn");
let currentPosts = 1;
moreBtn.addEventListener("click", function () {
  for (let i = currentPosts; i < currentPosts + 1; i++) {
    if (wrapper[i]) {
      wrapper[i].style.display = "flex";
    }
  }
  currentPosts += 1;
  if (currentPosts >= wrapper.length) {
    moreBtn.style.display = "none";
  }
});
