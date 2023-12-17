import axios from "axios";

const FakeStoreApi = {

    fetchAllData: async () => {
        //using axios
        const result = await axios.get("https://fakestoreapi.com/products")
        return result.data;
        
        //using fetch
        // const res = await fetch("https://fakestoreapi.com/products")
        // const result = await res.json()
        // return result;

    },
    fetchDataById: async (Id) => {
        //using axios
        const result =  await axios.get(`https://fakestoreapi.com/products/${Id}`)
        return result.data;

        //using fetch
        // const res = await fetch(`https://fakestoreapi.com/products/${Id}`)
        // const result = await res.json()
        // return result;
    },
    fetchDataBySearchQuery: async (query) => {
        //using axios
        const result = await axios.get(`https://fakestoreapi.com/products`)
        return result.data.filter((item)=>item.title.toLowerCase().includes(query))


        // using fetch
        // const res = await fetch("https://fakestoreapi.com/products")
        // const result = await res.json()
        // return result.filter((item) => item.title.toLowerCase().includes(query))

    }
}

export { FakeStoreApi }