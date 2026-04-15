import { Component, ViewEncapsulation } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section.component';
import { ProblemSectionComponent } from './sections/problem-section.component';
import { SolutionBenefitsSectionComponent } from './sections/solution-benefits-section.component';
import { ProofCtaSectionComponent } from './sections/proof-cta-section.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroSectionComponent,
    ProblemSectionComponent,
    SolutionBenefitsSectionComponent,
    ProofCtaSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly whatsappUrl =
    'https://wa.me/5548988281035?text=Fala%2C%20vim%20pelo%20site%20Impulso%20Barbeiros%20e%20quero%20encher%20minha%20agenda.';
}
