#  AIR KIOSK

### Celem projektu było zbudowanie jednej z podstron strony LOT.

## Instalacja

* `npm install` - zainstalowanie paczek zdefiniowanych w pliku package.json
* `npm run api` - uruchomienie mockowego serwera `json-server` hostującego pliki JSON, zawarte w folderze `/api`, na porcie `3000`
* `npm run start` - uruchomienie aplikacji angularowej na porcie `4200`

## Użyte frameworki i bibioteki

* Angular v10 https://angular.io/
* Bootstrap v4.5 https://getbootstrap.com/
* Json-server v0.16.1 https://github.com/typicode/json-server
* Font-awesome v.4.7.0  https://fontawesome.com/

## Użycie

Aplikacja poprawnie wyświetla się zarówno na desktopie jak i wersji mobilnej.
Użyto czcionki `Lato` : https://fonts.google.com/specimen/Lato. Wszystkie dane dynamiczne pobierane są za pomocą `REST API`.
Zastosowano tłumaczenie strony ( `wersja angielska i polska` ) przy użyciu bibioteki 
`@ngx-translate/core`, jak również zmianę waluty ( `PLN i EUR` `).
Aplikacja poprawnie wyświetla się na wszystkich popularnych przeglądarkach.

