import { Component } from '@angular/core';

@Component({
  selector: 'app-solution-benefits-section',
  standalone: true,
  template: `
    <section class="fade-in-up fade-delay-2 space-y-6">
      <article class="rounded-3xl border border-amber-300/25 bg-zinc-900/70 p-6 sm:p-8">
        <p class="section-kicker">Solução</p>
        <h2 class="section-title">A real é simples</h2>
        <p class="mt-4 text-base text-zinc-300 sm:text-lg">
          Eu ajusto seu Instagram pra transformar quem vê em cliente te chamando
          no WhatsApp pra agendar.
        </p>
        <p class="mt-3 text-base text-zinc-300 sm:text-lg">
          E também posiciono você no Google pra ser encontrado por quem já quer
          cortar.
        </p>
        <ul class="mt-4 space-y-2 text-zinc-100">
          <li>👉 Sem depender de sorte</li>
          <li>👉 Sem depender de indicação</li>
        </ul>
        <p class="mt-4 text-base font-semibold text-amber-200 sm:text-lg">
          Você para de correr atrás de cliente e começa a receber mensagem de
          gente pronta para marcar horário.
        </p>
      </article>

      <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article class="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8">
          <p class="section-kicker">Benefícios</p>
          <h3 class="mt-2 text-xl font-black uppercase text-white">
            Com isso, você passa a ter:
          </h3>
          <ul class="mt-4 space-y-3">
            @for (benefit of benefits; track benefit) {
              <li class="benefit-item">{{ benefit }}</li>
            }
          </ul>
        </article>

        <article class="rounded-3xl border border-amber-300/25 bg-zinc-900/80 p-6 sm:p-8">
          <p class="section-kicker">Multiplica resultado</p>
          <h3 class="mt-2 text-xl font-black uppercase text-white">
            Sinal de demanda no WhatsApp
          </h3>

          <div class="mt-4 rounded-2xl border border-white/10 bg-zinc-950 p-4">
            <div class="mt-3 space-y-2">
              <p class="w-fit rounded-xl bg-zinc-800 px-3 py-2 text-sm text-zinc-200">
                Mano, tem horário hoje?
              </p>
              <p class="ml-auto w-fit rounded-xl bg-amber-300 px-3 py-2 text-sm font-semibold text-black">
                Tenho sim, 19h ou 20h. Qual você quer?
              </p>
              <p class="w-fit rounded-xl bg-zinc-800 px-3 py-2 text-sm text-zinc-200">
                Fecha 20h, já me manda o pix.
              </p>
            </div>
          </div>

          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <div class="overflow-hidden rounded-xl border border-red-400/30 bg-red-500/10">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80"
                alt="Agenda vazia em celular de barbeiro"
                class="h-28 w-full object-cover"
                loading="lazy"
              />
              <div class="p-3">
              <p class="text-xs uppercase tracking-[0.15em] text-red-300">Antes</p>
              <p class="mt-1 text-sm text-zinc-200">Agenda vazia e incerteza toda semana</p>
              </div>
            </div>
            <div class="overflow-hidden rounded-xl border border-emerald-400/30 bg-emerald-500/10">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80"
                alt="Agenda cheia em barbearia"
                class="h-28 w-full object-cover"
                loading="lazy"
              />
              <div class="p-3">
              <p class="text-xs uppercase tracking-[0.15em] text-emerald-300">Depois</p>
              <p class="mt-1 text-sm text-zinc-200">Agenda cheia e cliente chamando no WhatsApp</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  `
})
export class SolutionBenefitsSectionComponent {
  protected readonly benefits = [
    'Mais cliente chamando toda semana',
    'Agenda cheia sem depender de sorte',
    'Menos dias parados',
    'Mais dinheiro entrando no fim do mês'
  ];
}
