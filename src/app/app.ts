import { AfterViewInit, Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly currentYear = new Date().getFullYear();
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.initRevealObserver();
    this.initFaq();
  }

  private initRevealObserver(): void {
    const sections = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -30px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }

  private initFaq(): void {
    const faqButtons = document.querySelectorAll<HTMLButtonElement>('.faq-question');
    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const isOpen = item?.classList.contains('active');
        document.querySelectorAll('.faq-item.active').forEach((openItem) => {
          openItem.classList.remove('active');
        });
        if (!isOpen && item) item.classList.add('active');
      });
    });
  }

}
