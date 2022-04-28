import { WikiContextState, Mark } from "../AppComponents/CustomTypes";
import { Region } from "react-native-maps";


const contextDefaultData: WikiContextState = {
    region: {} as Region,
    entities: [],
    username: "",
    password: "",
    queryRange: "",
    loadingData: false,
    anonymous: false,
    properties: [],
    missingProperties: [],
    login: false,
    selectedEntityQID: "",
    selectedPropertyPID: "",
    markers: [] as Mark[],
    setSelectedEntityQID: () => { },
    setUserLocation: () => { },
    loadProperties: (qid: string) => { },
    setSelectedPropertyPID: () => { },
    clearCache: () => { },
    refreshWiki: () => { },
    setQueryRange: () => { },
    setUserCredentials: (user_name: string, password: string) => { },
    setLoadingData: () => { },
    setMarkers: () => { },
    setAnonymous: () => { },
    setLogin: () => { }
};

export default contextDefaultData;