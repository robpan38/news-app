Autor:
    nume: Pandele
    prenume: Robert-Andrei
    numar telefon: 0736944414
    email: r.pandele39@gmail.com

aplicatia este hostata aici:
    https://cheery-unicorn-66c534.netlify.app/

instructiuni instalare dependinte:
    1) asigura-te ca ai npm instalat
    2) npm install in folder-ul cu package.json
    3) npm start pentru a rula aplicatia local
    4) intra pe localhost:3000 pentru a vedea aplicatia

tehnologii folosite in implementarea aplicatiei (react):
    1) create-react-app pentru obtinerea unei schelet de cod
    pentru o aplicatie web care este construita cu react
    2) material-ui pentru a usura procesul de implementare a
    componentelor din aplicatie
    3) inline css pentru styling
    4) axios librarie folosita pentru realizarea requesturilor
    GET, POST, PUT

arhitectura aplicatie:
    1) primul pas in rezolvarea task-ului a constat in realizarea
    diferitelor "view-uri"(componente) ale aplicatiei (pagina de login, pagina de sign-up, componenta unui articol, pagina in care sunt prezentate toate articolele, pagina in care este adaugat un articol) fara a introduce functionalitate
    
    2) urmatorul pas a fost implementarea procesului de login/sign-up;
    pentru rezolvarea acestei cerinte am folosit un rest api fake
    https://mockapi.io/clone/6256d2426ea70370054001bd (pentru a vedea structura acestuia, se creeaza cont pe mockapi.io si se cloneaza
    rest api-ul)
    api-ul are rutele:
    /api/login - folosita la login
    /api/users - aici salvez userii care isi creeaza un cont
    /api/news - aici salvez diferitele stiri din aplicatie

    proces login: 
        user-ul trimite request de tip POST la /api/login,
        iar serverul trimite raspuns cu body-ul request-ului trimis de client (username si password);
        apoi clientul trimite un request de tip GET la /api/users si obtine intreaga lista de useri (nu e tocmai ok din punct de vedere al securitatii);
        astfel avem username-ul din request-ul de login si lista cu toti userii aplicatiei; se parcurge lista de useri pana gasim
        userul al carui username coincide cu cel al clientului care
        vrea sa se conecteze si setam id-ul si rolul acestuia pentru
        urmatoarele interactiuni cu aplicatia

    3) odata ce userul este logat, el are acces la diferitele stiri
    postate de jurnalistii aplicatiei
        - daca rolul acestuia este reader: el nu are optiunea de a adauga alte stiri in aplicatie
        - daca rolul acestuia este journalist: el poate adauga alte
        stiri in aplicatie
            jurnalistii adauga stiri trimitand request-uri de tip
            POST la /api/news cu titlul articolului, body-ul articolului si lista goala de tag-uri ale articolului
        - reader-ul introduce un nou tag trimitand un request PUT
        cu noua lista de tag-uri a articolului care sufera o modificare
        de tag-uri la /api/news/{article_id}
    
    4) functia de refresh doar trimite un nou request de tip GET la
    /api/news/, de fiecare data cand butonul este apasat