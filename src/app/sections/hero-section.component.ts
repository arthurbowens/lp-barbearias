import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="fade-in-up space-y-6 rounded-3xl border border-amber-400/20 bg-zinc-900/80 p-6 shadow-2xl shadow-black/40 sm:p-10">
      <p class="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
        Se sua agenda não está cheia toda semana, você está perdendo dinheiro
      </p>

      <h1 class="text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
        Barbeiro, sua agenda está vazia em alguns dias da semana?
      </h1>

      <p class="max-w-2xl text-base text-zinc-300 sm:text-xl">
        Eu faço cliente chegar até você pelo Instagram e também pelo Google,
        pronto pra marcar horário.
      </p>

      <p class="text-base font-semibold text-amber-200 sm:text-lg">
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

      <div class="grid gap-4 pt-2 lg:grid-cols-[1.3fr_1fr]">
        <img
          src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=80"
          alt="Barbeiro atendendo cliente em barbearia premium"
          class="h-52 w-full rounded-2xl object-cover sm:h-64"
          loading="eager"
        />
        <div class="rounded-2xl border border-amber-300/20 bg-zinc-950/90 p-4">
          <p class="text-xs uppercase tracking-[0.2em] text-amber-300">Resultado que importa</p>
          <p class="mt-2 text-lg font-black uppercase text-white">
            Agenda cheia e cliente novo toda semana
          </p>
          <p class="mt-2 text-sm text-zinc-300">
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
