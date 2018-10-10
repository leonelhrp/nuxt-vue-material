import axios from 'axios';

export default function ( { params, store } ) {

    console.log(store);
    /*
    return axios.get(`http://api.football-data.org/v1/competitions`)
    .then(response => store.commit('add', response.data));
  */
}