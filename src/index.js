console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogDisplay = document.querySelector('#dog-image-container');

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogBreedUl = document.querySelector('#dog-breeds');

const breedDrop = document.querySelector('#breed-dropdown');

const items = dogBreedUl.getElementsByTagName('li')

fetch(breedUrl)
.then(resp => resp.json())
.then(breedList =>{
    
    
   // console.log(breedList.message)
    
    
    for (const key in breedList.message){
        
            const newDogBreed = document.createElement('li');
            newDogBreed.textContent = key
            newDogBreed.addEventListener('click', (event) =>{
              //  newDogBreed.className = "selected";
                newDogBreed.classList.add('selected')
                newDogBreed.classList.add('shown')

            })


            dogBreedUl.appendChild(newDogBreed)




          //  console.log(breedList.message[key])
        }



        // for (let i =0; i<breedList.message.length; i++){

        //         console.log(breedList.message[i])
        // }

        // console.log(breedList);

        //     for (let breed of breedList){
        //         console.log(breed);
        //         console.log(breedlist.message[breed])
        //     }
        


        


        

    })



fetch(imgUrl)
.then(resp => resp.json())
.then(imageArray => {
    
    console.log(imageArray)



        for (let i =0; i<imageArray.message.length; i++){

            const newImg = document.createElement('img')
            newImg.src = imageArray.message[i];
            dogDisplay.appendChild(newImg);
            
        }


    // imageArray.message.forEach(image => {
    //    // console.log(image)

    // })



});


breedDrop.addEventListener('change', (event) =>{

        for (let i =0; i<items.length; i++){
            console.log(`right now character is ${items[i].textContent.charAt(0)} and the value is ${breedDrop.value}`)
                if (items[i].textContent.charAt(0) != breedDrop.value){
                    items[i].remove();
                }




            console.log(items[i].textContent + i)
               // if (items[i].textContent)
        }
        // if (breedDrop.value ==="a"){
        //     console.log('WE FOUND A');
        // }


})























