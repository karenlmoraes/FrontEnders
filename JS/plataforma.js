const search_button = document.querySelector('#search');
const search_list = document.querySelector('#input_term');
const autoComplete_list = document.querySelector('#autoComplete_list');



search_button.addEventListener('click', (search) => {
    let crypto_id = document.querySelector("#input_term").value;

    fetch('https://api.coingecko.com/api/v3/coins/' + crypto_id).then(data => {
        return data.json();
    }).then(get => {
        console.log(get);

        let name_tag = document.querySelector('#name');
        let name = get.name;
        name_tag.innerText = 'Nome: ' + name;

        // let description_text = document.querySelector('#description');
        // let description = JSON.stringify(get.description.en);
        // description_text.innerText = description;

        let h_algorithm_tag = document.querySelector('#hashing_algorithm');
        let h_algorithm = get.hashing_algorithm;
        h_algorithm_tag.innerText = 'Função hash: ' + h_algorithm;

        // let link_text = document.querySelector('#link');
        // let link = get.links.homepage;
        // link_text.innerText = link;

        let image_tag = document.querySelector('#image');
        let image = get.image.small;
        image_tag.src = image;

        let genesis_date_tag = document.querySelector('#genesis_date');
        let genesis_date = get.genesis_date;
        genesis_date_tag.innerText = 'Data de lançamento: ' + genesis_date;

        let market_cap_rank_tag = document.querySelector('#market_cap_rank');
        let market_cap_rank = get.market_cap_rank;
        market_cap_rank_tag.innerText = 'Ranking de capitalização de mercado: #' + market_cap_rank;

        let current_price_tag = document.querySelector('#current_price');
        let current_price = get.market_data.current_price.brl;
        current_price_tag.innerText = 'Valor: R$ ' + current_price;

        let ath_tag = document.querySelector('#ath');
        let ath = get.market_data.ath.brl;
        let ath_cp = get.market_data.ath_change_percentage.brl;
        let ath_data = get.market_data.ath_date.brl;
        ath_tag.innerText = 'Maior valor: R$ ' + ath + ' (' + ath_cp + '%)' + ' em: ' + ath_data;

        let atl_tag = document.querySelector('#atl');
        let atl = get.market_data.atl.brl;
        let atl_cp = get.market_data.atl_change_percentage.brl;
        let atl_data = get.market_data.atl_date.brl;
        atl_tag.innerText = 'Menor valor: R$ ' + atl + ' (' + atl_cp + '%)' + ' em: ' + atl_data;




    //div info
      /* let info = document.querySelector('#info');

        let description = get.description.en
        let block_time = get.block_time_in_minutes
        let links = get.links
        let info_dev = get.developer_data

        info.innerHTML = `<br>
        <p>${description}</p> 
        <p>blocos por minuto:${block_time}</p>`
       
         informações de desenvolvimento da moeda
         <br>
        <p>forks:${info_dev.forks}</p>
        <p>stars:${info_dev.stars}</p>
        <psubscribers:${info_dev.subscribers}</p>
        <p>total issues:${info_dev.total_issues}</p>
        <p>closed_issues:${info_dev.closed_issues}</p>
        <prequests_merged:>${info_dev.pull_requests_merged}</p>
        <pcontributors:>${info_dev.pull_request_contributors}</p>,
        <p>${info_dev.code_additions_deletions_4_weeks.additions}</p>
        <p>${info_dev.code_additions_deletions_4_weeks.additions.deletions}</p>`
        */  
   
        // document.body.append(name_text, description_text);
    })
})




let array_list = [];
//buscas de id na api
function fetchId() {
    fetch("https://api.coingecko.com/api/v3/coins/")
        .then((Response) => Response.json())
        .then((data) => { //map pega doso os nomes e joga no arrey
            array_list = data.map((get) => get.id)
            console.log(array_list)
            loadData(array_list, autoComplete_list)
        })
}

//mostras nomes atraves dom
function loadData(data, element) {
    if (data) {
        element.innerHTML = "";
        let innerElement = "";
        data.forEach((item) => {
            innerElement += `<li onclick="copyAndShow('${item}')" >${item}</li>`;
        });
        element.innerHTML = innerElement;
    }
}

// filtar nomes somente digitados no input
function filterData(data, searchText) {
    return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}


//pega input do dom
search_list.addEventListener("input", function () {
    const filtereData = filterData(array_list, search_list.value)
    loadData(filtereData, autoComplete_list)
})


fetchId()

//copia valor do deli ejoga no input
function copyAndShow(item) {
    search_list.value = item
}
