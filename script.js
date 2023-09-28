const textRating = document.querySelector('.rating__value');
const stars = document.querySelectorAll('.rating__star');

stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {

        textRating.textContent = index + 1;

        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('rating__star--on');
        }
        for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove('rating__star--on');
        }  });

        star.addEventListener('mouseenter', () => {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('rating__star--on');
            }
        });

        star.addEventListener('mouseleave', () => {
            for (let i = 0; i < stars.length; i++) {
                stars[i].classList.remove('rating__star--on');
            }

            for (let i = 0; i < textRating.textContent; i++) {
                stars[i].classList.add('rating__star--on');
            }
        });
    });
 
    //     console.log('The stars NodeList:')
    //     console.log(stars)
    //     console.log('The clicked star element:')
    //     console.log(star)
    //     console.log('The index of the clicked star in the NodeList:')
    //     console.log(index)
    //     console.log('Rating expressed by text:')
    //     console.log(textRating)
    //     console.log('-------------------------------------------------------------------------')
    // })

