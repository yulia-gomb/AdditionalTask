const url1 = 'https://services.odata.org/Experimental/OData/OData.svc/Products?$orderby=Price asc';
const url2 ='https://services.odata.org/Experimental/OData/OData.svc/ProductDetails';

interface IData1 {
    ID: number,
    ProductID: number,
    Name: string,
    Description: string,
    ReleaseDate: string,
    DiscontinuedDate: null | string,
    Rating: number,
}
interface IData2 {
    ProductID: number,
    Details: string
}

//function for getting data from an endpoint
async function getData(url: string) {
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
async function mergeData(url1: string, url2: string): Promise<void> {

    //getting data from server
    const dataPart1: IData1[] = await getData(url1);
    const dataPart2: IData2[] = await getData(url2);

    //getting array from unique data`s IDs
    const setID = [...new Set(dataPart1.map(({ID}) => ID)
        .concat(dataPart2.map(({ProductID}) => ProductID))
    )];

    //getting Map of data
    const getMap1 = (data: any, id: string) => new Map(data.map(({[id]:_id, ...res}) => [_id, {ID: _id,...res}]));
    const getMap2 = (data: any, id: string) => new Map(data.map(({[id]:_id, ...res}) => [_id, {...res}]));

    const dataPart1Mapped: Map<any, any> = getMap1(dataPart1, 'ID');
    const dataPart2Mapped: Map<any, any> = getMap2(dataPart2, 'ProductID');

    //merging both data's
    const resultData = setID.map(id => ({
        ...(dataPart1Mapped.get(id) || {}),
        ...(dataPart2Mapped.get(id) || {})
    })
    );

    console.log(resultData);
}




