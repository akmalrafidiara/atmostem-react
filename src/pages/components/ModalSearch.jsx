import React, { useState } from "react";

function ModalSearch() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    // Perform the search here
    console.log("Searching for:", searchKeyword);
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchKeyword)}`,
      "_blank"
    );
  };

  const handleInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(20, 24, 62, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn btn-square bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-light p-3"
                  placeholder="Type search keyword"
                  value={searchKeyword}
                  onChange={handleInputChange}
                />
                <button className="btn btn-light px-4" onClick={handleSearch}>
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSearch;
