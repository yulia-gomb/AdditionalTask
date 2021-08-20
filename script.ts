const url1 = 'https://services.odata.org/Experimental/OData/OData.svc/Products?$orderby=Price asc';
const url2 ='https://services.odata.org/Experimental/OData/OData.svc/ProductDetails';

interface IData {
    ID?: number,
    ProductID?: number,
    Name?: string,
    Description?: string,
    ReleaseDate?: string,
    DiscontinuedDate?: null | string,
    Rating?: number,
    Price?: number,
    Details?: string
}

//function for getting data from an endpoint
async function getUsers(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users.value)
        return users.value;
    } catch(error) {
        console.log(error);
    }
}

//function for merging data
mergeData(url1, url2);
async function mergeData(url1: string, url2: string): Promise<void> {

    const dataPart1: IData[] = await getUsers(url1);
    const dataPart2: IData[] = await getUsers(url2);

    console.log("hello2")

    const getMap = (data: any, id: string) => new Map(data.map(({[id]:_id, ...res}) => [_id, {...res}]));

    const setID = [...new Set(dataPart1.map(({ID}) => ID)
        .concat(dataPart2.map(({ProductID}) => ProductID)))];

    const dataPart1Mapped: Map<any, any> = getMap(dataPart1, 'ID');
    const dataPart2Mapped: Map<any, any> = getMap(dataPart2, 'ProductID');

    const result = setID.map(id => ({
        ...(dataPart1Mapped.get(id) || {}),
        ...(dataPart2Mapped.get(id) || {})
    })
    );

    console.log(result);
}




