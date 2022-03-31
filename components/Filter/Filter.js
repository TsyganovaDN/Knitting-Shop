
     

class Filter{

    slideOne(min_value){ 
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let displayValOne = document.getElementById("range1");
        let minGap = 0;
      if (sliderTwo.value - sliderOne.value <= minGap){
            sliderOne.value = parseInt(sliderTwo.value)-minGap;
            displayValOne.textContent=parseInt(sliderTwo.value)-minGap;
        }
      else        
        displayValOne.textContent=min_value;
        productsPage.render_price(sliderOne.value,sliderTwo.value);
        
    }

    slideTwo(max_value){
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let displayValTwo = document.getElementById("range2");
        let minGap = 0;
       if (sliderTwo.value-sliderOne.value <= minGap){
            sliderTwo.value = parseInt(sliderOne.value)+ minGap;
            displayValTwo.textContent=parseInt(sliderOne.value)+ minGap;
        }
        else        
        displayValTwo.textContent=max_value;
        productsPage.render_price(sliderOne.value,sliderTwo.value);
    }






    render(MinPrice,MaxPrice){
     
        const html = `<div class ="filter-conteiner">
                        <span>Фильтр по цене</span>
                        <div class="range-values">
                            <span id="range1">${MinPrice}</span>
                            <span>&dash;</span>
                            <span id="range2">${MaxPrice}</span>
                        </div>
                        <div class="range-slider">
                        <div class="slider-track">
                        <input type="range" min="0" max="30000" step="100" value="${MinPrice}" id="slider-1" oninput="filterPage.slideOne(this.value);">
                        <input type="range" min="0" max="30000" step="100" value="${MaxPrice}" id="slider-2" oninput="filterPage.slideTwo(this.value);">
                        </div></div>
                        
                    </div>`;
        ROOT_FILTER.innerHTML=html;
    }
}

const filterPage = new Filter();
filterPage.render(0,30000);