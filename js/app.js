'use strict;'

const imageArray = [];
let $photoTemplate = $('#photo-template');
let $title = $('#title');

//Take whats in the JSON file and run it through a constructor function for each object.
//Create Constructor function with proprties listed below

function ImageConstructor (description,horns,image_url,keyword,title) {
    this.description = description;
    this.horns = horns;
    this.image_url = image_url;
    this.keyword = keyword;
    this.title = title;
     
};

//We need to us the $.ajax() command to read the provided JSON file.
$.ajax('../data/page-1.json').then(data => {
    data.forEach(data => {
        new ImageConstructor (data.description,data.horns,data.image_url,data.keyword,data.title);
    }) 
});


// console.log(imageArray);
ImageConstructor.prototype.render = function(){
// let $templateClone = $('<div></div>');
let $templateClone = $phototemplate.clone();
$templateClone.find('h2').text(this.title);
}

imageArray.forEach( obj =>{
  let imgToRender = obj.render();
  $('main').append(imgToRender);

})
// imageArray.forEach( (value, idx) => {
//     $title.text(value.title);
//     $photoTemplate.append($thisTitle);
//     console.log(value.name);
//     });

/* <section id="photo-template"> <!--use this to grab the section-->
    <h2 id="title"></h2> <!--title goes here-->
        <img src="" alt=""> <!--link goes here-->
    <p></p> <!--description goes here-->
</section> */





//--Use jQuery to make a template


//Properties--------What is the data type for each?
//--Image_URL
//--Title
//--Description
//--KeyWord
//--Horns

// ----------How we did it in class------------ EXAMPLE ----------------
// $.ajax( './pets.json').then( function(data) {

//     console.log('Got the pets', data);
  
//     data.forEach((pet) => {
  
//       // copy the template
//       // Put in the words
//       // append that to the ul
//       let $thisPet = $petTemplate.clone();
//       $thisPet.find('span').text(pet.name);// .parent().removeClass('pet-template');
//       $thisPet.removeClass('pet-template');
//       $petsContainer.append($thisPet);
  
//       // $petsContainer.append(`<li><span>${pet}</span></li>`);
//     });