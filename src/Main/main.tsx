const Mains = ()=> {
    
    const Cars = [
        {
            id: "./images/EClass.png",
            name: "E-Class",
            price:"$100.000"
        },
        {
            id: "./images/g63.png",
            name: "G63 AMG ",
            price:"$100.000"
        },
        {
            id: "./images/GLC300.png",
            name: "GLC 300",
            price:"$100.000"
        },
        {
            id: "./images/Mer-S.png",
            name: "S-Class",
            price:"$100.000"
        },
        {
            id: "./images/Maybach.png",
            name: "MayBach S650",
            price:"$100.000"
        },
        {
            id: "./images/AMG-GT.png",
            name: "AMG GT",
            price:"$100.000"
        },
    ];
    return(
        <div className="grid grid-cols-3 gap-x-14 gap-y-10 pt-12 pb-16 px-60 bg-[#212529] ">
            {Cars.map((value, key)=>{
            return(
                <div className="text-center  text-zinc-50 border-[0.1rem] border-b-8 border-b-[#6a6c6ef0] border-zinc-50  hover:bg-[#43464a]">
                    <img className="h-[50%] w-[100%] object-fill" src={value.id} alt=""  />
                    <div className="mt-14 ">
                    <h1 className="font-sans text-3xl mb-4">{value.name}</h1>
                        <div className="text-2xl">
                            <span>     
                            {value.price} <button className="border-2 w-32 rounded-lg bg-[#43464a] hover:bg-[#6a6c6ef0] ">BUY NOW</button>
                            </span>
                        </div>
                    </div>
                </div>
            );
            })}
        </div>
        );
}
export default Mains;