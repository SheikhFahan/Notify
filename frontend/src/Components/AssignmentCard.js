import React from "react";
import "../css/notescard.css";

const AssignmentCard = ({ note, type = null , handleDelete}    ) => {
//   const openPdf = (pdfUrl) => {
//     const iframeContent = `<iframe src="${pdfUrl}" width="100%" height="100%" frameBorder="0"></iframe>`;
//     document.querySelector(".visit").innerHTML = iframeContent;
//   };
  return (
    <div className=" card ">
      <div className="card__body">
        <h2 className="card__title">{note.name}</h2>
        <p className="card__description">Prof: {note.prof_name}</p>
        <p className="card__description">Ideal index: {note.ideal_index}</p>
        <p className="card__description">Subject Code: {note.sub_code}</p>
        <p className="card__description">Submission Date: {note.l_submission}</p>
      </div>

      <div className="" >
        <a href={note.note} target="_blank" rel="noopener noreferrer">
          <span>
            <p className="btn_txt">View Assignment</p>
          </span>
        </a>
      </div>
      <div className="card__btn2">
        <a href={note.note} download={note.note}>
        {type == 'prof' ?
          <span>
                   <p className="btn_txt" onClick={(e) => handleDelete(e, note.pk)}>Delete Assignment {note.pk}</p>
        </span>:
          <span>
          <p className="btn_txt">Download Assignment</p>
        </span>}
        </a>
      </div>
    </div>
    
  );
};


export default AssignmentCard