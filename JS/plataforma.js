const search_button = document.querySelector('#search');

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

        // document.body.append(name_text, description_text);
    })
})