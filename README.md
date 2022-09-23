# cypress-kiwi-task2

1.Kedže v tomto prípade testujeme rezervačný formulár, preto chceme aby náš test začal na stránke rezervačného formuláru. Inými slovami nenavštevuj stránku kiwi.com a nehľadaj lety na hlavnej stránke.
2.Prejdeme priamo na rezervačný formulár a to na adresu https://www.kiwi.com/booking?token={booking_token}.
3.booking_token je možno získať pomocou Search API a to prostredníctvom flights endpointu.
4.Nie je nutné sa registrovať na Tequila portáli, pre komunikáciu s flights API použi cypress ako hodnotu pre parameter partner.
5.V prípade, že ti IATA kód nič nehovorí, tu je stránka kódy letísk ktorá by ti mala pômocť získať potrebné info.
6.booking_token je dynamická hodnota, preto si treba booking_toke získať pred každým testom.
7.V rezervačnom formulári sa budeme sústrediť na doplnkovú službu cestovného poistenia.
8.Otestuj, že v prípade národnosti inej ako US* (vrátane teritórií patriacich pod US), má zákazník na výber z troch možností. Skontroluj, že všetky možnosti sú klikateľné a fungujú.
9.Zmeň národnosť na US a otestuj možnosti ako v predošlom prípade. V teste skontroluj, či sú nutné daľšie informácie, ak áno tak ich vyplň.
