import axios from 'axios';

export default function ( { params, store } ) {
    return axios.get(`http://api.football-data.org/v1/${params.id}`)
        .then(response => store.commit('add', response.data))
        .catch(err => {})
}