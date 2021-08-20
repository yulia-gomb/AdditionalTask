const url1 = 'https://services.odata.org/Experimental/OData/OData.svc/Products?$orderby=Price asc';
const url2 ='https://services.odata.org/Experimental/OData/OData.svc/ProductDetails';

/*interface DataPart1 {
    ID: number,
    Name: string,
    Description: string,
    ReleaseDate: string,
    DiscontinuedDate: null | string,
    Rating: number,
    Price: number
}

interface DataPart2 {
    ProductID: number,
    Details: string
}*/

//function for getting data from an endpoint
async function getUsers(url) {
    try {
        const response = await fetch(url);
        const users = await response.json();
        return users.value;
    } catch(error) {
        console.log(error);
    }
}

//function for merging data
mergeData(url1, url2);
async function mergeData(url1, url2) {

    const dataPart1 = await getUsers(url1); //data from first endpoint
    const dataPart2 = await getUsers(url2); //data from second endpoint

    const getMap = (data, id) => new Map(data
        .map(({[id]:_id, ...res}) => [_id, {...res}]));

    const setID = [...new Set(dataPart1.map(({ID}) => ID)
        .concat(dataPart2.map(({ProductID}) => ProductID)))];

    const dataPart1Mapped = getMap(dataPart1, 'ID');
    const dataPart2Mapped = getMap(dataPart2, 'ProductID');

    const result = setID.map(id => ({
        ...(dataPart1Mapped.get(id) || {}),
        ...(dataPart2Mapped.get(id) || {})
    })
    );

    console.log(result);
}




