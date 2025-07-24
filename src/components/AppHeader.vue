<template>
  <header className="container mx-auto px-4">
    <nav className="navbar">
      <div className="navbar-start">
        <a href="/" className="text-2xl font-bold">Simple Task Manager</a>
      </div>
      <div className="navbar-end">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1">
            <span id="theme-name">Theme: Default</span>
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content bg-base-300 max-w-40 w-40 max-h-40 z-10 p-2 shadow-2xl overflow-y-auto"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Abyss"
                value="Abyss"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Garden"
                value="garden"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Luxury"
                value="luxury"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Pastel"
                value="pastel"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Business"
                value="business"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Synthwave"
                value="synthwave"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
