import React from 'react'
import { Modal } from 'react-bootstrap'

import axios from 'axios'


export default function DetailFeed({feed, show, handleClose }) {
    const url = feed?.links?.download+"?force=true"

    const download = (url) => {
        console.log(url)
        // window.location.href = url
        window.open(url,"_blank")
    }

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            centered 
            size="lg"
            backdrop="static"
            keyboard={false}
            className="bg-modal">
            <Modal.Body className="p-1 position-relative bg-secondary rounded">
                <img src={feed?.urls.regular} style={{height: '100%', width: '100%'}} className="rounded" alt={feed?.id} />
                <div 
                    onClick={handleClose}  
                    className="d-flex justify-content-center align-items-center rounded-circle text-light position-absolute btn-close-detail-img">
                    X
                </div>
                <button 
                    onClick={()=>download(url)} 
                    className="position-absolute btn btn-warning btn-sm btn-download-detail-img ">
                    Download
                </button>
            </Modal.Body>
      </Modal>
    )
}
