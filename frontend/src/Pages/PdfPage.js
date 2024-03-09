import React, { useState, useEffect } from "react";
import CustomCard from "../Components/CustomCard";
import axios from "axios";

const PdfPage = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pdf/note/")
      .then((response) => setNote(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-row ">
          {note.map(
            (item ) => (
              <CustomCard key={item.id} note={item} /> //! The card function component is taken from the lower fxn
            )
          )}
        {/* <div className="min-width-visit">IFRAME CONTENT HERE</div> */}

        </div>
      </div>
    </div>
  );
};

export default PdfPage;
