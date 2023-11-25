# BIT WEB recruitment task

## Spis treści

1. [Instrukcja uruchomienia](#instrukcja-uruchomienia)
2. [Dlaczego ja?](#dlaczego-ja)
3. [Further improvements](#furhter-improvements)

## Instrukcja uruchomienia

*W całej instrukcji zakładam że masz zainstalowany npm.*
1. Przejdź w terminalu do folderu w którym chcesz repo do sprawdzenia.
2. Wpisz w terminalu: `git clone https://github.com/karmatys8/BIT_WEB_recruitment_task.git`
3. Wpisz w terminalu: `cd BIT_WEB_recruitment_task`
4. Wpisz w terminalu: `npm install`
5. Wpisz w termianlu: `npm start` lub kolejno `npm run build` oraz `serve -s build`

## Dlaczego ja?

1. Komunikacja z innymi ludźmi przychodzi mi z łatwością.
2. Szybko się uczę - MUI, Routingu i i18next nauczyłęm się na potrzeby tego projektu. I uważam że jak na niecałe 2 tygodnie to wyszło całkiem nieźle :)
3. Podoba mi się pisanie FE i robię to w wolnym czasie od prawie roku.
4. Zależy mi na lepszym UI i UX enrolla bo z niego korzystam. I ogólnie chciałbym wziąść udział w większym projekcie.


## Furhter improvements

1. I assumed that you wanted me to build a custom Table so I didn't use Data Grid. Which has built in sorting and filtering that obviously are more optimized than my code.
2. LocaleContext probably should be on App level.
3. There is an Warning: Cannot update a component (`MyAppBar`) while rendering a different component (`SharedLayout`). To locate the bad setState() call inside `SharedLayout`. To be frank I don't have time to fix it. My best assumption is that when isDarkMode state updates MUI Switch updates and then SharedLayout cannot update because MyAppBar component hasn't re-rendered yet. *Website still works but it is a bad practice*
4. User prefered color scheme is not taken into account. It could be done with useMediaQuery('(prefers-color-scheme: dark)').
5. There is a light theme flashing while dark-mode is activated. It happens because dark mode logic happens after the html element is already loaded.
6. Error Page could look nicer.
7. When incorrect year is typed in there should be some placeholder/info.