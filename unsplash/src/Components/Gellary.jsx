import { Bookmark, Plus, ArrowDown } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
const Gallery = () => {
  const [img, setimg] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);

  //api fetch
  useEffect(() => {
    const FetchImg = async () => {
        if(loading) return;
        setloading(true);
        try {
          let response = await axios.get(
          `https://picsum.photos/v2/list?page=1&limit=30`,
        );
        
        setimg((prev)=>[...prev, ...response.data]);
        } catch (error) {
          console.log(error);
        }
        finally{
          setloading(false);
        }
      };
      FetchImg();
  }, [page]);

  //scroll effect
  useEffect(()=>{
    const handleScroll = ()=>{
        if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300){
            setpage((prev)=>{
                return prev + 1;

            })
        }
    };

    window.addEventListener("scroll" , handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll);
  })
  return (
    <>
      <section>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
          {img.map((data) => {
            
           return(
             <div
              className="relative mb-4 break-inside-avoid shadow group "
              key={data.id}
            >
              {/* Image */}
              <img
                src={data.download_url}
                alt="Image"
                className="w-full object-cover "
              />

              {/* overlay div */}
              <div className="absolute top-0 bg-black/20 inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {/* top Icons */}
                <div className="flex justify-end gap-2 ">
                  <div className="bg-white rounded-md p-2">
                    <Bookmark />
                  </div>

                  <div className="bg-white rounded-md p-2">
                    <Plus />
                  </div>
                </div>

                {/* Bottom icon */}
                <div className="flex items-center justify-between ">
                  <h1 className="text-white font-bold">{data.author}</h1>
                  <div className="bg-white rounded-md p-2">
                    <ArrowDown />
                  </div>
                </div>
              </div>
            </div>
           )
          })}
          {/* Fetch Imahes from Api */}
        </div>
      </section>
    </>
  );
};

export default Gallery;
