"use client"
import { usePathname, useSearchParams,useRouter } from "next/navigation";


const Search = () => {
    const serachParams = useSearchParams();
    const pathName = usePathname()
    const {replace} = useRouter()

    const doSearch =(term)=>{
        const params =new URLSearchParams(serachParams);
       
        if(term){
            params.set("qurey",term);
        }else{
            params.delete("qurey");
        }
        replace(`${pathName}?${params.toString()}`)
    }
function handleSearch(term){
    doSearch(term)
}
  return (
    <div>
      <input
      onChange={(e)=>handleSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        defaultValue={serachParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
