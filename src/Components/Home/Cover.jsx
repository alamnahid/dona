

// eslint-disable-next-line react/prop-types
const Cover = ({handleSearch}) => {
    return (
        <div className="h-[18rem] md:h-[37rem] cover-container flex flex-col justify-center items-center mt-6">

            <h1 className="text-center text-[#0B0B0B] text-2xl md:text-5xl font-semibold">I Grow By Helping People In Need</h1>

            <div className="relative text-center mt-10 ">
                <div className="md:w-[29.3rem] relative">
                <form onSubmit={handleSearch}>
                <input name="search" type="text" placeholder="Search here...." className="input input-bordered border-1 md:w-[29.3rem] h-[3.125rem] bg-white rounded-lg pr-16 search-input" />
                <button className="btn absolute top-0 right-0 rounded-l-none w-[6.875rem] h-[3.125rem] text-white capitalize text-bas
                 font-medium bg-[#FF444A] hover:text-black"><input type="submit" value="Search" /></button>
                </form>
                </div>
            </div>


        </div>
    );
};

export default Cover;