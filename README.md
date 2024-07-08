# Lista de eventos na plataforma Wake Commerce, Storefront

* Exibição de lista de eventos (Ex.: Lista de casamento, lista de aniversário...);
<img src="/Tutoriais/lista-de-eventos.png" alt="Listas de eventos" width="700" style="max-width: 100%;">

* Exibição das listas feitas pelos usuários em X evento e busca simples via JS. (Listas de casamentos feitas pelos usuários no evento "Lista de casamento" por exemplo.) 
<img src="/Tutoriais/listas-de-casamento.png" alt="Listas de casamentos" width="700" style="max-width: 100%;"> 

______________

É necessário criar uma rota em Hotsites para cada evento. Para exibir as listas de eventos, foi criado a rota "lista-eventos". Para exibir listas do evento, por exemplo casamentos, foi criado a rota "lista-eventos/lista-de-casamento".

<img src="/Tutoriais/rotas-em-hotsites.png" alt="Lista de rotas de Hotsites" width="700" style="max-width: 100%;">  

Após criar os Hotsites no painel, adicione-as no seu tema em pages.json. Nas customs de "hotsite":

**"lista-eventos"** que irá exibir todos os eventos:
```
{
    "urlMatch": "lista-eventos",
    "path": "custom/event_list_type.html",
    "query": "event_list_type.graphql"
}, 
```


**"lista-eventos/*"** que irá exibir as listas do evento (criadas pelos usuários). É usado "*" para aplicar a qualquer rota que tenha "lista-eventos/" antes:
```
{
    "urlMatch": "lista-eventos/*",
    "path": "custom/event_list.html",
    "query": "event_list.graphql"
}
```

A partir disso, a criação e edição de listas serão feitas no checkout, separadas do storefront.

______________

Obs: para estilização, foi usado Tailwind CSS.

### links úteis:
* https://wakecommerce.readme.io/docs/eventlists
* https://wakecommerce.readme.io/docs/eventlisttype
