import React, {useState,useContext,useEffect,useCallback} from "react";
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [ searchTerm, setSearchTerm] = useState("")
    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            console.log("Fetched Data:", docs);

            if (docs){
                const newBooks = docs.slice(0,20).map((bookSingle)=>{
                    const {key,author_name,cover_i,edition_count,first_publish_year,title} = bookSingle;

                    return {
                        id:key,
                        author:author_name,
                        cover_id:cover_i,
                        edition_count:edition_count,
                        first_publish_year:first_publish_year,
                        title:title
                    }
                });
                console.log("New Books:", newBooks); // Log the mapped books
                setBooks(newBooks);

                if(newBooks.length > 1 ){
                    setResultTitle("Your Search Result");
                }
                else{
                    setResultTitle("No Search Result Found!")
                }
            }else{
                setBooks([]);
                setResultTitle("No Search Result found!");
            }
            setLoading(false);
        }
        catch(error){
            console.log(error)
            setLoading(false);
        }
    },[searchTerm])

    useEffect(() => {
        if (searchTerm.trim()) {  // Only fetch when there's a search term
            fetchBooks();
        }
    },[searchTerm,fetchBooks])

    return(
        <AppContext.Provider value={{
            loading,books,setSearchTerm,resultTitle,setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export{AppContext,AppProvider};