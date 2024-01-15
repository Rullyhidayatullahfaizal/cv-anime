const Pagination = ({ page, lastPage, setPage }) => {
    // Ketika tap scroll atas
    const scrollTop = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };
  
    const handleNextPage = () => {
      setPage((prev) => {
        // Perhatikan penggunaan return dan panggilan fungsi scrollTop
        return prev < lastPage ? prev + 1 : prev;
      });
      scrollTop(); // Panggil fungsi scrollTop
    };
  
    const handlePrevPage = () => {
      setPage((prev) => {
        // Perhatikan penggunaan return dan panggilan fungsi scrollTop
        return prev > 1 ? prev - 1 : prev;
      });
      scrollTop(); // Panggil fungsi scrollTop
    };
  
    return (
      <div className="flex justify-center items-center py-2 px-2 gap-4 ">
        <button
          className="rounded transition-all hover:bg-red-500"
          onClick={handlePrevPage}
        >
          Prev
        </button>
        <p>
          {page} of {lastPage}
        </p>
        <button
          className="rounded transition-all hover:bg-red-500"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  