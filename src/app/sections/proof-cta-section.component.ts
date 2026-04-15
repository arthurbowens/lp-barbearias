import { Component, input } from '@angular/core';

@Component({
  selector: 'app-proof-cta-section',
  standalone: true,
  template: `
    <section class="fade-in-up fade-delay-3 space-y-5 pb-8 sm:pb-14">
      <article class="section-card border-emerald-300/30 bg-emerald-500/10 p-5 sm:p-8">
        <p class="section-kicker">Prova realista</p>
        <blockquote class="mt-3 text-lg font-semibold leading-relaxed text-zinc-100 sm:text-2xl">
          "Antes eu dependia só de indicação e tinha dia vazio direto. Depois que
          comecei a usar isso, minha agenda ficou cheia a semana toda."
        </blockquote>
        <p class="mt-3 text-sm text-zinc-300">- Jean, barbeiro</p>
      </article>

      <article class="section-card p-5 sm:p-8">
        <p class="section-kicker">Quebra de objeção</p>
        <h2 class="section-title">Não importa se:</h2>
        <ul class="mt-4 space-y-2 text-[15px] text-zinc-100">
          <li>você tem poucos seguidores</li>
          <li>seu Instagram é pequeno</li>
          <li>nunca fez anúncio</li>
        </ul>
        <p class="mt-4 text-base font-semibold leading-relaxed text-amber-200 sm:text-lg">
          👉 funciona porque é simples, direto e feito para barbearia
        </p>
      </article>

      <article class="section-card border-amber-300/35 bg-gradient-to-r from-zinc-900 to-zinc-800 p-5 sm:p-8">
        <p class="text-base font-semibold leading-relaxed text-amber-200 sm:text-lg">
          👉 Se você continuar do jeito que está, sua agenda vai continuar
          dependendo de sorte... e isso não muda sozinho.
        </p>
        <h2 class="mt-3 text-2xl font-black leading-tight text-white sm:text-4xl">
          Quer encher sua agenda também?
        </h2>
        <p class="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-300 sm:text-base">
          Me chama agora que eu te explico na prática como isso pode encher sua
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
