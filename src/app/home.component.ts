import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section
      class="font-body text-xl text-cream flex flex-col justify-center items-center h-screen bg-blob-pattern bg-center bg-auto sm:bg-cover"
    >
      <div class="text-center">
        <h1 class="font-title text-3xl font-bold">Matt Palacio</h1>
        <p class="mb-4">Software Developer</p>

        <ul class="flex flex-col gap-3">
          <li>
            <a
              href="https://www.linkedin.com/in/mattpalacio/"
              target="_blank"
              class="p-2 block border border-cream rounded hover:bg-cream hover:text-primary focus:bg-cream focus:text-primary focus:outline-none ease-in-out duration-200"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mattpalacio"
              target="_blank"
              class="p-2 block border border-cream rounded hover:bg-cream hover:text-primary focus:bg-cream focus:text-primary focus:outline-none ease-in-out duration-200"
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
