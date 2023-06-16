import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section
      class="font-body text-lg m-8 flex flex-col justify-center items-center h-screen"
    >
      <div class="p-8 w-max border border-black rounded text-center">
        <h1 class="font-title text-2xl font-bold">Matt Palacio</h1>
        <p class="mb-8">Software Developer</p>

        <ul class="flex flex-col gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/mattpalacio/"
              target="_blank"
              class="p-2 block border border-black rounded"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mattpalacio"
              target="_blank"
              class="p-2 block border border-black rounded"
              >Github</a
            >
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: [],
})
export class HomeComponent {}
