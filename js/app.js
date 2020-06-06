'use strict;'

const imageArray = [];
let $photoTemplateDiv = $('#photo-template');
let $gallery = $('#gallery');



//Create Constructor function with proprties listed below
function ImageConstructor (description,horns,image_url,keyword,title) {
  this.description = description;
  this.horns = horns;
  this.image_url = image_url;
  this.keyword = keyword;
  this.title = title;

  this.imageToRender = this.render();
  imageArray.push(this);
}

//Take whats in the JSON file and run it through a constructor function for each object.
$.ajax('../data/page-1.json').then(data => {
  data.forEach( obj => {
    new ImageConstructor (obj.description,obj.horns,obj.image_url,obj.keyword,obj.title);
    console.log(obj.keyword);
  })
  console.log(imageArray);
});


//create a prototype function that renders the info to the DOM
ImageConstructor.prototype.render = function(){
  let $templateClone = $photoTemplateDiv.clone();
  $templateClone.removeAttr('id');
  $templateClone.addClass(this.keyword);
  $templateClone.find('h2').text(this.title);
  $templateClone.find('img').attr('src', this.image_url);
  $templateClone.find('p').text(this.description);
  $gallery.append($templateClone);
}

function renderDropdown (){
  imageArray.forEach( function(obj){
    console.log(obj.keyword);
  });
  console.log('hello');
}

renderDropdown();
//add keyword as a class
//populate all keywords into the drop down
//create an even listener that shows pictures with associated keyword on change


