import { Component } from '@angular/core';

@Component({
  selector: 'app-problem-section',
  standalone: true,
  template: `
    <section class="fade-in-up fade-delay-1 space-y-6">
      <div>
        <p class="section-kicker">O problema</p>
        <h2 class="section-title">Você se identifica com isso?</h2>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        @for (pain of pains; track pain) {
          <article class="card-problem">
            <p class="text-lg font-semibold text-zinc-100">{{ pain }}</p>
          </article>
        }
      </div>

      <article class="rounded-2xl border border-red-400/30 bg-red-500/10 p-5">
        <p class="text-base text-zinc-100 sm:text-lg">
          Isso não é falta de talento. É falta de um processo para atrair cliente
          todo santo dia.
        </p>
      </article>

      <article class="rounded-2xl border border-amber-300/20 bg-zinc-900/80 p-5 sm:p-6">
        <p class="section-kicker">Agitação</p>
        <p class="mt-3 text-base text-zinc-200 sm:text-lg">
          Enquanto você espera alguém te indicar...
        </p>
        <ul class="mt-4 space-y-2 text-zinc-100">
          <li>👉 outro barbeiro está sendo encontrado no Instagram e no Google todo dia</li>
          <li>👉 enchendo a agenda sem depender de sorte</li>
          <li>👉 e faturando mais com menos estresse</li>
        </ul>
        <p class="mt-4 text-base font-semibold text-amber-200 sm:text-lg">
          E muitas vezes nem corta melhor que você.
        </p>
      </article>
    </section>
  `
})
export class ProblemSectionComponent {
  protected readonly pains = [
    'Você posta direto e mesmo assim tem horário vazio',
    'Depende de indicação para conseguir cliente',
    'Tem barbeiro pior que você com agenda cheia',
    'Fica sem saber quantos clientes vai ter na semana'
  ];
}
