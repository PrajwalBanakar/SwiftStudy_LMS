import { db } from "@/lib/db";
import { Categories } from "./_components/categories";

const searchPage = async () => {
    const categories = await db.category.findMany({
        orderBy: {
            name:"asc"
        }
    })
    return ( 
        <div className="p-6">
            <Categories items={categories}/>
        </div>
     );
}
 
export default searchPage;