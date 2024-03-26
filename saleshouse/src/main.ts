import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

let slideIndex: number = 0;
showSlides();

function showSlides(): void {
    const slides: NodeListOf<HTMLImageElement> = document.querySelectorAll('.slides img') as NodeListOf<HTMLImageElement>;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = 'block';  
    setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
