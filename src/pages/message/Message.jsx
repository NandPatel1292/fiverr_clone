import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="content">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>
          {"  "}» NAND »
        </span>
        <div className="messages">
          <div className="item">
            <img src="/images/man1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptate ea nisi vitae facere dicta magni id dignissimos facilis
              incidunt.
            </p>
          </div>
          <div className="item owner">
            <img src="/images/man1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptate ea nisi vitae facere dicta magni id dignissimos facilis
              incidunt.
            </p>
          </div>
          <div className="item">
            <img src="/images/man1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptate ea nisi vitae facere dicta magni id dignissimos facilis
              incidunt.
            </p>
          </div>
          <div className="item owner">
            <img src="/images/man1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptate ea nisi vitae facere dicta magni id dignissimos facilis
              incidunt.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="Write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
