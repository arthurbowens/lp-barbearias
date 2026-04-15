import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="section-card fade-in-up space-y-5 p-5 sm:p-8">
      <p class="inline-flex rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-300 sm:text-xs">
        Se sua agenda não está cheia toda semana, você está perdendo dinheiro
      </p>

      <h1 class="text-3xl font-black leading-tight text-white sm:text-5xl">
        Barbeiro, sua agenda está vazia em alguns dias da semana?
      </h1>

      <p class="max-w-2xl text-[15px] leading-relaxed text-zinc-300 sm:text-xl">
        Eu faço cliente chegar até você pelo Instagram e também pelo Google,
        pronto pra marcar horário.
      </p>

      <p class="text-[15px] font-semibold text-amber-200 sm:text-lg">
        👉 Papo reto: sem enrolação, sem complicação, só cliente chegando.
      </p>

      <div class="flex flex-col gap-3 sm:flex-row">
        <a
          class="cta-primary"
          [href]="whatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero mais clientes essa semana
        </a>
      </div>

      <div class="grid gap-4 pt-1 lg:grid-cols-[1.35fr_1fr]">
        <img
          src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=80"
          alt="Barbeiro atendendo cliente em barbearia premium"
          class="h-48 w-full rounded-xl object-cover sm:h-64"
          loading="eager"
        />
        <div class="rounded-xl border border-amber-300/25 bg-zinc-950/90 p-4">
          <p class="text-[11px] uppercase tracking-[0.15em] text-amber-300">Resultado que importa</p>
          <p class="mt-2 text-lg font-black leading-snug text-white">
            Agenda cheia e cliente novo toda semana
          </p>
          <p class="mt-2 text-sm leading-relaxed text-zinc-300">
            Enquanto os outros esperam indicação, você recebe mensagem e fecha
            horário no mesmo dia.
          </p>
        </div>
      </div>
    </section>
  `
})
export class HeroSectionComponent {
  readonly whatsappUrl = input.required<string>();
}
