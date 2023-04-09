import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Nand Patel",
    isSeller: true,
  };

  const message = `good morning sir, how can i help you sir`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Nand</td>
            <td>
              <Link to="/message/123" className="link">
                {message}
              </Link>
            </td>
            <td>1 Day</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Patel</td>
            <td>
              <Link to="/message/123" className="link">
                {message}
              </Link>
            </td>
            <td>1 Day</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
          <tr>
            <td>Nand</td>
            <td>
              <Link to="/message/123" className="link">
                {message}
              </Link>
            </td>
            <td>1 Day</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
          <tr>
            <td>Nand</td>
            <td>
              <Link to="/message/123" className="link">
                {message}
              </Link>
            </td>
            <td>1 Day</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
