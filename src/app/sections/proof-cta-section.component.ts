import { Component, input } from '@angular/core';

@Component({
  selector: 'app-proof-cta-section',
  standalone: true,
  template: `
    <section class="fade-in-up fade-delay-3 space-y-6 pb-16">
      <article class="rounded-3xl border border-emerald-300/25 bg-emerald-500/10 p-6 sm:p-8">
        <p class="section-kicker">Prova realista</p>
        <blockquote class="mt-3 text-lg font-semibold text-zinc-100 sm:text-2xl">
          "Antes eu dependia só de indicação e tinha dia vazio direto. Depois que
          comecei a usar isso, minha agenda ficou cheia a semana toda."
        </blockquote>
        <p class="mt-3 text-sm text-zinc-300">- Jean, barbeiro</p>
      </article>

      <article class="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 sm:p-8">
        <p class="section-kicker">Quebra de objeção</p>
        <h2 class="section-title">Não importa se:</h2>
        <ul class="mt-4 space-y-2 text-zinc-100">
          <li>você tem poucos seguidores</li>
          <li>seu Instagram é pequeno</li>
          <li>nunca fez anúncio</li>
        </ul>
        <p class="mt-4 text-base font-semibold text-amber-200 sm:text-lg">
          👉 funciona porque é simples, direto e feito para barbearia
        </p>
      </article>

      <article class="rounded-3xl border border-amber-300/30 bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 sm:p-8">
        <p class="text-base font-semibold text-amber-200 sm:text-lg">
          👉 Se você continuar do jeito que está, sua agenda vai continuar
          dependendo de sorte... e isso não muda sozinho.
        </p>
        <h2 class="text-2xl font-black uppercase text-white sm:text-4xl">
          Quer encher sua agenda também?
        </h2>
        <p class="mt-3 max-w-xl text-zinc-300">
          Me chama agora que eu te explico no direto como isso pode encher sua
          agenda ainda essa semana.
        </p>
        <p class="mt-3 text-base font-semibold text-amber-200">👉 papo reto.</p>

        <div class="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            class="cta-primary"
            [href]="whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero encher minha agenda agora
          </a>
        </div>
      </article>
    </section>
  `
})
export class ProofCtaSectionComponent {
  readonly whatsappUrl = input.required<string>();
}
