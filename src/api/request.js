import axios from 'axios'

export const getShopListRequest = () =>
    axios.get(`https://www.fastmock.site/mock/041a1d09b8d07742f2a97acd41a35c2a/beers/ice`)

export const getMilkTeaRequest = () => 
    axios.get(`https://www.fastmock.site/mock/041a1d09b8d07742f2a97acd41a35c2a/beers/dinner`)