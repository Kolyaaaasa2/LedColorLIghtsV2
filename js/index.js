const burgerButton = () => {

    const burgerBtn = document.querySelector('.burgerMenu__button'),
        burgerMenuList = document.querySelector('.burgerMenu__list'),
        menu = document.querySelector('.burgerMenu__wrapper'),
        burgerMenuItems = document.querySelectorAll('.burgerMenu__list__item'),
        burgerSubmenuList = document.querySelectorAll('.burgerSubmenu__list'),
        goBackButton = document.querySelectorAll('.burgerSubmenu__list__goBackButton'),
        subMenu = document.querySelectorAll('.burgerSubmenu');


    burgerBtn.addEventListener('click',(e) => {

        burgerBtn.classList.toggle('_active')
            menu.classList.toggle('_active')

        if (menu.classList.contains('_active')) {
            menuLinksReveal(burgerMenuList)
            openSubMenu()
            document.querySelector('body').style.overflow = 'hidden'
        }
        else {
            menuLinksVanish(burgerMenuList)
            burgerSubmenuList.forEach(item => menuLinksVanish(item))
            subMenu.forEach(item => item.classList.remove('_active'))
            document.querySelector('body').style.overflow = 'visible'
        }
            
    })


    const openSubMenu = () => {
        burgerMenuItems.forEach(item => item.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target.classList.contains('burgerMenu__list__item__link')) {
                menuLinksVanish(burgerMenuList)
                const selectedSubMenu = [...item.children].filter(item => item.classList.contains('burgerSubmenu'))[0]
                const selectedSubMenuList = [...selectedSubMenu.children].filter(item => item.classList.contains('burgerSubmenu__list'))[0]

                selectedSubMenu.classList.add('_active')
                menuLinksReveal(selectedSubMenuList)
                closeSubMenu()
                console.log('hello')
            }
            
            // const result = [...e.currentTarget.children]
            // const result2 = result.filter(item => item.classList.contains('burgerSubmenu'))[0]
            // result2.classList.add('_active')


            
        }))
    }

    const closeSubMenu = () => {
        goBackButton.forEach(item => item.addEventListener('click', (e) => {
            subMenu.forEach(menu => {

                if (menu.classList.contains('_active')) {
                    const result = [...menu.children][0]
                    menu.classList.remove('_active')
                    menuLinksVanish(result)   
                    menuLinksReveal(burgerMenuList) 
                }


            })
        })
        )


    }

    const menuLinksReveal = (parent) => {

        const result = [...parent.children]
        let delay = 0.2
        result.forEach(item => {
            item.style.animation = `reverseMenuItemsReveal 0.3s ease ${delay}s`
            item.style.animationFillMode = 'forwards'
            delay += 0.07
        })
    }

    const menuLinksVanish = (parent) => {
        const result = [...parent.children]
        result.forEach(item => item.style.animation = 'menuItemsVanish 0.3s ease')
    }
}




burgerButton()
function FaqAccordion () {

    const accordionButtons = document.querySelectorAll('.faq__button')

    accordionButtons.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e.target.parentNode)
            e.target.parentNode.classList.toggle('_active')
        })
    })

}

FaqAccordion()

const menu = () => {

    const menuBlocks = document.querySelectorAll('.menu__block'),
        categories = [...document.querySelectorAll('.category')],
        categoryLinks = document.querySelectorAll('.menu__list__item__link'),
        menuList = document.querySelectorAll('.menu__block__list'),
        subMenus = document.querySelectorAll('.sublink'),
        closeMenuButton = document.querySelectorAll('.menu__close');



    const subMenuClose = () => {
        subMenus.forEach(item => {
            item.classList.remove('_active')
            for (let i = 0; i < item.children.length; i++) {
                item.children[i].style.removeProperty('animation')
            }
        })
    }


    const menuClose = () => {
        closeMenuButton.forEach(item => item.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('menu__close')) {
                subMenuClose()
                menuBlocks.forEach(menu => {
                    if (menu.classList.contains('_active')) {
                        menu.classList.remove('_active')
                        menu.style.visibility = 'hidden'
                        menu.style.removeProperty('visibility');
                        if (menu.classList.contains('_active')) {
                            document.querySelector('body').style.overflow = 'hidden'
                         }
                         else {
                            document.querySelector('body').style.overflow = 'visible'
                         }
                    }
                })
                menuList.forEach(item => menuCategoriesVanish(item))
            }
            categoryLinks.forEach(item => item.classList.remove('_active'))
        })
        )
    }



    const openMenu = () => {

        menuClose()
        categories.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                if (e.target.classList.contains('menu__list__item__link')) {
                    categoryLinks.forEach(item => item.classList.remove('_active'))
                    menuBlocks.forEach(item => {
                        item.style.zIndex = '30'
                    })
                    e.target.classList.add('_active')
                    for (let i = 0; i < item.children.length; i++) {
                        if (item.children[i].classList.contains('menu__block')) {
                            item.children[i].classList.add('_active')
                            item.children[i].style.zIndex = "50"
                            menuBlocks.forEach(item => {
                                if (item.classList.contains('_active')) {
                                   document.querySelector('body').style.overflow = 'hidden'
                                }
                            })
                        }
                    }
                    
                    const preResult = [...e.currentTarget.children].filter(item => item.classList.contains('menu__block'))[0]
                    const result = [...preResult.children].filter(item => item.classList.contains('menu__block__list'))[0]
                    menuCategoriesReveal(result)
                    subMenuOpen()
                }
            })
        })
    }



    const menuCategoriesReveal = (elem) => {

        const menuLists = document.querySelectorAll('.menu__block__list')
        menuLists.forEach(item => {
            if (elem.id !== item.id) {
                for (let i = 0; i < item.children.length; i++) {
                    item.children[i].style.removeProperty('animation')
                }
            }

            if(elem.id == item.id) {
                let delay = 0.6
               for (let i = 0; i < elem.children.length; i++) {
                elem.children[i].style.animation = `MenuItemsReveal 0.7s ease ${delay}s`
                elem.children[i].style.animationFillMode = 'forwards';
                delay += 0.1;
                }
            }
        })
    }



    const menuCategoriesVanish = (parent) => {
        const result = [...parent.children].forEach(item => {
            // item.style.removeProperty('visibility');
            item.style.removeProperty('animation');
        })
               



    }


    const subMenuOpen = () => {
        const menuLinks = document.querySelectorAll('.menu__link')

        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {

                menuLinks.forEach(item => item.style.zIndex = '30');

                if (e.currentTarget.classList.contains('menu__link')) {

                   document.querySelectorAll('.menu__link__text').forEach(link => link.classList.remove('_active'))
                   const result = [...link.children].filter(item => item.classList.contains('menu__link__text'))[0]
                   result.classList.add('_active')

                    const selectedLink = [...link.children].filter(child => child.classList.contains('sublink'))
                    selectedLink[0].classList.add('_active')
                    link.style.zIndex = '50'

                    const subMenu = [...link.children].filter(menu => menu.classList.contains('sublink'))[0]
                    console.log(subMenu)
                    subMenuDescrReveal(subMenu)
                }
            })
        })
    }


    const subMenuDescrReveal = (elem) => {
        subMenus.forEach(item => {
            if (elem == item) {
                let delay = 0.5
                const result = [...elem.children]
                console.log(result)
                for (let i = 0; i < result.length; i++) {
                    result[i].style.animation = `MenuItemsReveal 1s ease ${delay}s`
                    result[i].style.animationFillMode = `forwards`
                    delay += 0.1
                }
            }

            if (elem != item) {
                for (let i = 0; i < item.children.length; i++) {
                    item.children[i].style.removeProperty('animation')
                }
            }
        })
    }


    openMenu()
}

menu()

if(document.querySelector('advantages__inner')) {

    const slider = () => {
        const sliderInner = document.querySelector('.advantages__inner'),
              sliderBlocks = document.querySelectorAll('.advantages__block'),
              sliderDots = document.querySelectorAll('.advantages__dot');
    
    
    
        let interval = 0
        let dot = 1
        let iterator = 0
        // sliderInner.style.transform = `translateX(${interval}px)`;
    
        const sliderChanger = () => {
            if (dot == 3)
            {
                dot = 0;
            }
    
            if (iterator == sliderDots.length) {
                iterator = 0
            }
    
            sliderInner.style.transition = `all 0.7s ease`
    
          
            sliderDots.forEach(dot => dot.classList.remove('_active'))
            sliderDots[dot].classList.add('_active')
            dot++
            
            interval -= sliderBlocks[0].clientWidth;
            sliderInner.style.transform = `translateX(${interval}px)`
            let clone = sliderBlocks[iterator].cloneNode(true)
            sliderInner.append(clone)
            iterator++
    
        }
    
        setInterval(sliderChanger, 3000)
    }
    
    slider()

}

